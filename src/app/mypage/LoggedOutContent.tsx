"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import loginImage from "@/assets/images/login.png";
import KakaoLogo from "@/assets/images/kakao.png";
import AppleLogo from "@/assets/images/apple.png";
import EmailLogo from "@/assets/images/email.png";
import BottomSheet from "@/components/BottomSheet";

export default function LoggedOutContent() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const router = useRouter();

  const handleKakaoLogin = () => {
    // 카카오 로그인 로직 구현
    console.log("카카오 로그인 시도");
  };

  const handleEmailLogin = () => {
    // 이메일 로그인 로직 구현
    setIsBottomSheetOpen(true);
  };

  const handleAppleLogin = () => {
    // 애플 로그인 로직 구현
    console.log("애플 로그인 시도");
  };

  const handleExistingUserLogin = () => {
    router.push("/login");
  };

  const handleNewUserSignup = () => {
    router.push("/signin");
  };

  return (
    <div className="flex flex-col bg-white mt-14 relative">
      <div className="flex-grow flex flex-col items-center justify-center px-4">
        <p className="text-center text-2xl font-extrabold mb-2">
          <span className="text-primary">디스팟</span>에서
          <br />
          최신 할인정보를
          <br />
          확인해 보세요!
        </p>
        <div className="w-[300px] max-w-md mb-4">
          <Image
            src={loginImage}
            alt="로그인 이미지"
            layout="responsive"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className="w-full max-w-md space-y-2 flex flex-col items-center">
          <div className="w-[160px] text-center text-sm font-semibold text-gray-700 p-3 mb-[-16px] rounded-full shadow-xl bg-white z-10">
            👇 3초만에 가입하기
          </div>
          <button
            onClick={handleKakaoLogin}
            className="w-[80%] p-4 bg-[#FEE500] rounded-md shadow-lg flex items-center relative"
          >
            <Image
              src={KakaoLogo}
              alt="카카오 로고"
              width={24}
              height={24}
              className="absolute left-4"
            />
            <span className="flex-grow text-center text-gray-800 font-semibold">
              카카오로 계속하기
            </span>
          </button>
          <button
            onClick={handleEmailLogin}
            className="w-[80%] p-4 bg-gray-800 border-[2px] border-gray-800 rounded-md shadow-lg flex items-center relative"
          >
            <Image
              src={EmailLogo}
              alt="이메일 로고"
              width={24}
              height={24}
              className="absolute left-4"
            />
            <span className="flex-grow text-center text-white font-semibold">
              이메일로 계속하기
            </span>
          </button>
          <button
            onClick={handleAppleLogin}
            className="w-[80%] p-4 bg-white border-[2px] border-gray-800  rounded-md shadow-lg flex items-center relative"
          >
            <Image
              src={AppleLogo}
              alt="애플 로고"
              width={24}
              height={24}
              className="absolute left-4"
            />
            <span className="flex-grow text-center text-gray-800 font-semibold">
              Apple로 계속하기
            </span>
          </button>
        </div>
      </div>

      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
      >
        <h2 className="text-xl font-bold mb-4">
          이메일로 계속하기
        </h2>
        <div className="space-y-4">
          <button
            onClick={handleExistingUserLogin}
            className="w-full p-4 bg-[#E6F3FF] text-primary rounded-md font-semibold"
          >
            기존 회원 로그인
          </button>
          <button
            onClick={handleNewUserSignup}
            className="w-full p-4 bg-gray-300 text-gray-800 rounded-md font-semibold"
          >
            신규 회원가입
          </button>
        </div>
      </BottomSheet>
    </div>
  );
}
