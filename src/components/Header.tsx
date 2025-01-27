import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header
      className="sticky top-0 left-0 right-0 h-12 z-10 bg-white"
    >
      <div className="px-4 h-full flex justify-between items-center w-full max-w-[720px] mx-auto">
        <Link href="/" className="flex items-center">
          <Image 
            src="/assets/images/logo.webp"
            alt="디스팟"
            width={64}
            height={30}
            className="object-contain"
          />
        </Link>
        <Link 
          href="/search" 
          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
        >
          <MagnifyingGlassIcon className="w-5 h-5" />
        </Link>
      </div>
    </header>
  );
} 