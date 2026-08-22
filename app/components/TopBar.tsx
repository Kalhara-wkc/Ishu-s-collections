import Link from "next/link";

export default function TopBar() {
  return (
    <div className="w-full bg-text-primary text-[#E5D3B3] text-[10px] md:text-xs py-2.5 px-4 flex justify-between items-center font-light tracking-widest uppercase z-50 relative">
      <div className="hidden md:flex gap-6 opacity-80">
        <Link href="/" className="hover:text-white cursor-pointer transition-colors">Home</Link>
      </div>
      <div className="w-full md:w-auto overflow-hidden flex-1 opacity-90 relative h-4 flex items-center">
        <div className="whitespace-nowrap absolute animate-marquee w-full text-center">
          ✨ Complimentary Shipping within Sri Lanka on Orders Over LKR 15,000 | Experience the finest authentic premium leather ✨
        </div>
      </div>
      <div className="hidden md:flex gap-6 opacity-80">
        <Link href="/store-locator" className="hover:text-white cursor-pointer transition-colors">Store Locator</Link>
        <Link href="/contact" className="hover:text-white cursor-pointer transition-colors">Contact</Link>
      </div>
    </div>
  );
}
