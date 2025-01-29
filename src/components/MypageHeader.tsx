import React from "react";

const MypageHeader: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white text-gray-800 px-5 py-3 z-10 max-w-[500px] mx-auto">
      <div className="container flex justify-between items-center h-8">
        <h1 className="text-xl font-bold">마이페이지</h1>
      </div>
    </header>
  );
};

export default MypageHeader;
