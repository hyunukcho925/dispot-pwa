"use client";
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/outline';

interface SiteHeaderProps {
  title?: string;
}

export default function SiteHeader({ title }: SiteHeaderProps) {
  const router = useRouter();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title || '공유하기',
          url: window.location.href,
        });
      } catch (error) {
        console.error('공유하기 실패:', error);
      }
    } else {
      // 공유하기 API를 지원하지 않는 경우 클립보드에 복사
      await navigator.clipboard.writeText(window.location.href);
      alert('링크가 클립보드에 복사되었습니다.');
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b h-12">
      <button
        onClick={() => router.back()}
        className="p-2 hover:bg-gray-100 rounded-full"
      >
        <ArrowLeftIcon className="w-6 h-6" />
      </button>
            
      <button
        onClick={handleShare}
        className="p-2 hover:bg-gray-100 rounded-full"
      >
        <ShareIcon className="w-6 h-6" />
      </button>
    </header>
  );
} 