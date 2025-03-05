"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import { supabase } from '../../../utils/supabase';

interface Site {
  site_id: number;
  name: string;
  name_en: string;
  image_url: string;
  site_url: string;
  category_id: number;
  description?: string;
}

export default function SitePage() {
  const params = useParams();
  const [site, setSite] = useState<Site | null>(null);
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  useEffect(() => {
    async function fetchSite() {
      const { data, error } = await supabase
        .from("sites")
        .select("*")
        .eq("name_en", params.name_en)
        .single();

      if (error) {
        console.error('사이트 로딩 에러:', error);
        return;
      }

      if (data) setSite(data);
    }

    fetchSite();
  }, [params.name_en]);

  if (!site) return (
    <div className="w-full h-screen flex flex-col">
      <div className="h-16 border-b border-gray-100 px-4 flex items-center">
        <div className="w-32 h-6 bg-gray-200 animate-pulse rounded"></div>
      </div>
      <div className="flex-1 bg-gray-50 animate-pulse">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );

  const siteUrl = site.site_url.includes('notion.so') 
    ? `${site.site_url}?hide-header=true` 
    : site.site_url;

  return (
    <div className="w-full h-screen flex flex-col">
      <SiteHeader title={site.name} />
      <div className="flex-1 overflow-hidden relative">
        {isIframeLoading && (
          <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
          </div>
        )}
        <iframe
          src={siteUrl}
          className="w-full h-[calc(100%+120px)] border-0 -mt-[120px]"
          title={site.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsIframeLoading(false)}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation"
        />
      </div>
    </div>
  );
} 