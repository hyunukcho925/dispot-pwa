import Link from "next/link";

export default function Header() {
  return (
    <header
      className="sticky top-0 left-0 right-0 h-12 z-10 border-b border-gray-200 bg-repeat bg-center"
    >
      <div className="px-4 h-full flex justify-between items-center w-full max-w-[720px] mx-auto">
        <Link href="/" className="flex items-center">
          <span className="text-lg font-black text-black">DISPOT</span>
        </Link>
      </div>
    </header>
  );
} 