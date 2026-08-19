import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, Menu, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#F4F0F7]/95 border-b border-[#4A0E4E]/10 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Name on the Left */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 md:hidden">
            <Menu className="w-6 h-6 text-[#4A0E4E]" />
          </div>
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-[#D4AF37]/30 shadow-sm">
              <Image src="/logo.jpeg" alt="Ishu's Collections Logo" fill className="object-cover" />
            </div>
            <div className="text-xl md:text-3xl font-serif font-bold tracking-tighter text-[#4A0E4E]">
              Ishu&apos;s Collections
            </div>
          </Link>
        </div>
        
        {/* Nav Links in the Center (hidden on mobile) */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-medium tracking-widest uppercase">
          <Link href="/shop" className="hover:text-[#D4AF37] transition-colors relative group">
            Shop
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/collections" className="hover:text-[#D4AF37] transition-colors relative group">
            Collections
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/our-story" className="hover:text-[#D4AF37] transition-colors relative group">
            Our Story
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all group-hover:w-full"></span>
          </Link>
        </div>

        {/* Search and Cart on the Right */}
        <div className="flex items-center gap-5 md:gap-8 justify-end">
          <div className="hidden md:flex items-center border-b border-[#4A0E4E]/30 pb-1 focus-within:border-[#D4AF37] transition-colors">
            <input 
              suppressHydrationWarning
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none text-sm placeholder:text-[#4A0E4E]/50 w-32 focus:w-48 transition-all duration-300 text-[#4A0E4E]"
            />
            <Search className="w-4 h-4 ml-2 text-[#4A0E4E]" />
          </div>
          <button suppressHydrationWarning className="md:hidden">
            <Search className="w-6 h-6 text-[#4A0E4E]" />
          </button>
          
          <Link href="/account" className="relative group hover:scale-110 transition-transform">
            <User className="w-6 h-6 text-[#4A0E4E]" />
          </Link>

          <Link href="/cart" className="relative group hover:scale-110 transition-transform">
            <ShoppingCart className="w-6 h-6 text-[#4A0E4E]" />
            <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-[#4A0E4E] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              2
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
