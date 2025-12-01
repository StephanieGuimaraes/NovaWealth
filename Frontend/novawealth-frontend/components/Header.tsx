// components/Header.tsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-[#1A253A] bg-[#0A1226]/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/IconLogo.png"
            alt="NovaWealth logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold leading-tight">NovaWealth</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/blog" className="text-[#D9DEE7] hover:text-white transition">
            Blog
          </Link>
          <Link href="#" className="text-[#D9DEE7] hover:text-white transition">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}