import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoggedInContent() {
  return (
    <>
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
          <Image
            src="/placeholder-avatar.png"
            alt="프로필 이미지"
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold">사용자 이름</h2>
          <p className="text-sm text-gray-500">user@example.com</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">계정 관리</h3>
        <Link
          href="/profile"
          className="flex items-center justify-between py-3 border-b"
        >
          <span>프로필 수정</span>
          <span className="text-gray-400">›</span>
        </Link>
        <Link
          href="/terms"
          className="flex items-center justify-between py-3 border-b"
        >
          <span>이용약관</span>
          <span className="text-gray-400">›</span>
        </Link>
        <Link
          href="/privacy"
          className="flex items-center justify-between py-3 border-b"
        >
          <span>개인정보처리방침</span>
          <span className="text-gray-400">›</span>
        </Link>
        <button className="w-full text-left py-3 text-red-500">로그아웃</button>
      </div>
    </>
  );
}
