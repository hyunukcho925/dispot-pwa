"use client";
import Header from "@/components/Header";
import { supabase } from '../../../utils/supabase';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BottomTab from "@/components/BottomTab";



interface Category {
  category_id: number;
  category_name: string;
}

interface Site {
  site_id: number;
  name: string;
  name_en: string;
  image_url: string;
  category_id: number;
}

export default function Category() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [sites, setSites] = useState<Site[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>(1);

  useEffect(() => {
    async function fetchData() {
      const { data: categoryData, error: categoryError } = await supabase
        .from("category")
        .select("category_id, category_name")
        .order("category_id");

      if (categoryError) {
        console.error('카테고리 로딩 에러:', categoryError);
        return;
      }

      const { data: siteData, error: siteError } = await supabase
        .from("sites")
        .select("site_id, name, name_en, image_url, category_id")
        .order("name");

      if (siteError) {
        console.error('사이트 로딩 에러:', siteError);
        return;
      }

      if (categoryData) setCategories(categoryData);
      if (siteData) setSites(siteData);
    }

    fetchData();
  }, []);

  const getSitesByCategory = (categoryId: number) => {
    return sites.filter(site => site.category_id === categoryId);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto flex h-[calc(100vh-50px)] overflow-hidden border-t">
        <div className="w-28 bg-gray-50">
          {categories.map((category) => (
            <button
              key={`category-${category.category_id}`}
              onClick={() => setSelectedCategory(category.category_id)}
              className={`w-full text-left pl-4 pr-2 py-3 text-sm hover:bg-gray-50 ${
                selectedCategory === category.category_id
                  ? "text-primary font-bold bg-white"
                  : "text-gray-400"
              }`}
            >
              {category.category_name}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <div className="grid grid-cols-3 gap-4">
              {getSitesByCategory(selectedCategory).map((site) => (
                <Link 
                  href={`${site.name_en}`}
                  key={`site-${site.site_id}`}
                  className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <div className="w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center mb-2 overflow-hidden bg-white">
                    <Image 
                      src={site.image_url} 
                      alt={site.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-center">{site.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BottomTab />
    </>
  );
}
