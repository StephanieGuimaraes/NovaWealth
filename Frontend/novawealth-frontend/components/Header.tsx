// components/Header.tsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 bg-[#0A1226] backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/IconLogo.png"
            alt="NovaWealth logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold leading-tight text-[#F2F4F7]">NovaWealth</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/blog" className="text-[#D9DEE7] hover:text-[#F2F4F7] transition">
            Blog
          </Link>
          <Link href="/About" className="text-[#D9DEE7] hover:text-[#F2F4F7] transition">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}