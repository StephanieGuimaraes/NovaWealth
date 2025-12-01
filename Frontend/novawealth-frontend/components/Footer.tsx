export default function Footer() {
  return (
    <footer className="border-t border-[#1A253A] mt-16">
      <div className="max-w-5xl mx-auto text-center py-8 text-sm text-[#8C96A8]">
        © {new Date().getFullYear()} NovaWealth — All rights reserved.
      </div>
    </footer>
  );
}