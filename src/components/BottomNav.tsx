"use client";

import Link from "next/link";
import { HomeIcon, MagnifyingGlassIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 h-14 bg-white border-t border-gray-200 max-w-[480px] mx-auto">
      <div className=" h-full">
        <div className="grid grid-cols-3 h-full">
          <Link href="/" className="flex flex-col items-center justify-center">
            <HomeIcon
              className={`w-6 h-6 ${
                pathname === "/" ? "text-primary" : "text-gray-400"
              }`}
            />
            <span
              className={`text-xs mt-1 ${
                pathname === "/" ? "text-primary" : "text-gray-400"
              }`}
            >
              홈
            </span>
          </Link>
          <Link
            href="/category"
            className="flex flex-col items-center justify-center"
          >
            <Squares2X2Icon
              className={`w-6 h-6 ${
                pathname === "/category" ? "text-primary" : "text-gray-400"
              }`}
            />
            <span
              className={`text-xs mt-1 ${
                pathname === "/category" ? "text-primary" : "text-gray-400"
              }`}
            >
              카테고리
            </span>
          </Link>
          <Link
            href="/search"
            className="flex flex-col items-center justify-center"
          >
            <MagnifyingGlassIcon
              className={`w-6 h-6 ${
                pathname === "/search" ? "text-primary" : "text-gray-400"
              }`}
            />
            <span
              className={`text-xs mt-1 ${
                pathname === "/search" ? "text-primary" : "text-gray-400"
              }`}
            >
              검색
            </span>
          </Link>
          {/* <Link
            href="/mypage"
            className="flex flex-col items-center justify-center"
          >
            <UserIcon
              className={`w-6 h-6 ${
                pathname === "/mypage" ? "text-primary" : "text-gray-400"
              }`}
            />
            <span
              className={`text-xs mt-1 ${
                pathname === "/mypage" ? "text-primary" : "text-gray-400"
              }`}
            >
              마이
            </span>
          </Link> */}
        </div>
      </div>
    </div>
  );
} 