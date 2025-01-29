import { MetadataRoute } from 'next'
import { supabase } from '../../utils/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://discountedspot.com'
  
  // 기본 정적 페이지들
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/category`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ] as const
  
  // Supabase에서 사이트 정보 가져오기
  const { data: sites, error } = await supabase
    .from('sites')
    .select('name_en, updated_at')
    .eq('is_active', true)
  
  if (error) {
    console.error('사이트맵 생성 중 에러:', error)
    return [...staticPages]
  }

  const sitePages = sites.map((site) => ({
    url: `${baseUrl}/${site.name_en}`,
    lastModified: new Date(site.updated_at || Date.now()),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...sitePages]
} 