"use client";

import React, { useState } from "react";
import LoggedInContent from "@/app/mypage/LoggedInContent";
import LoggedOutContent from "@/app/mypage/LoggedOutContent";
import BottomNav from "@/components/BottomNav";
import MypageHeader from "@/components/MypageHeader";

export default function MyPage() {
  const [isLoggedIn] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {isLoggedIn && <MypageHeader />}
      <div className={`flex-grow ${isLoggedIn ? 'pt-14' : ''} pb-20`}>
        {isLoggedIn ? <LoggedInContent /> : <LoggedOutContent />}
      </div>
      <BottomNav />
    </div>
  );
}
