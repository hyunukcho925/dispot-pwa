"use client";
import { useState, useEffect } from 'react';
import { supabase } from '../../../utils/supabase';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface Site {
  site_id: number;
  name: string;
  name_en: string;
  image_url: string;
  category_id: number;
}

export default function SearchPage() {
  const [sites, setSites] = useState<Site[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSites, setFilteredSites] = useState<Site[]>([]);

  useEffect(() => {
    async function fetchSites() {
      const { data, error } = await supabase
        .from("sites")
        .select("site_id, name, name_en, image_url, category_id")
        .order("name");

      if (error) {
        console.error('사이트 로딩 에러:', error);
        return;
      }

      if (data) setSites(data);
    }

    fetchSites();
  }, []);

  useEffect(() => {
    const filtered = sites.filter(site =>
      site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      site.name_en.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSites(filtered);
  }, [searchTerm, sites]);

  return (
    <>
      <header className="sticky top-0 left-0 right-0 h-12 z-10 bg-white">
        <div className="px-4 h-full flex items-center w-full mx-auto gap-3">
          <Link 
            href="/"
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </Link>
          <input
            type="text"
            placeholder="사이트 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </header>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-4 gap-4">
          {filteredSites.map((site) => (
            <Link 
              href={`/${site.name_en}`}
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
      </div>
    </>
  );
} 