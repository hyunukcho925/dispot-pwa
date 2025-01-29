"use client";
import Header from "@/components/Header";
import { Tab } from '@headlessui/react'
import { supabase } from '../../utils/supabase';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BottomNav from "@/components/BottomNav";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}


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

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [sites, setSites] = useState<Site[]>([]);

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
      <div className="container mx-auto">
        <div>
          <Tab.Group defaultIndex={0}>
            <Tab.List className="flex overflow-x-auto h-12 scrollbar-hide no-scrollbar">
              <div className="flex min-w-full">
                {categories.map((category) => (
                  <Tab
                    key={`tab-${category.category_id}`}
                    className={({ selected }) =>
                      classNames(
                        "px-4 py-2 text-sm font-medium leading-5 focus:outline-none whitespace-nowrap",
                        "border-b-2 -mb-[1px]",
                        selected
                          ? "border-b-4 border-primary text-primary font-black"
                          : "border-b-2 border-gray-100 text-gray-300 hover:text-gray-700"
                      )
                    }
                  >
                    {category.category_name}
                  </Tab>
                ))}
              </div>
            </Tab.List>
            <Tab.Panels>
              {categories.map((category) => (
                <Tab.Panel
                  key={`panel-${category.category_id}`}
                  className="focus:outline-none py-6 px-4"
                >
                  <div className="grid grid-cols-4 gap-4">
                    {getSitesByCategory(category.category_id).map((site) => (
                      <Link 
                        href={`${site.name_en}`}
                        key={`site-${site.site_id}`}
                        className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        <div className="w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center mb-2 overflow-hidden">
                          <Image 
                            src={site.image_url} 
                            alt={site.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-sm">{site.name}</span>
                      </Link>
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
