"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, Menu, User, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-bg-primary/95 border-b border-text-primary/10 shadow-sm transition-all duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-16 h-16 md:h-20 flex items-center justify-between">
        {/* Logo & Name on the Left */}
        <div className="flex items-center gap-3">
          <button 
            className="flex items-center gap-4 md:hidden p-1 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-text-primary" />
            )}
          </button>
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-accent-gold/30 shadow-sm">
              <Image src="/logo.jpeg" alt="Ishu's Collections Logo" fill className="object-cover" />
            </div>
            <div className="text-lg md:text-2xl font-serif font-bold tracking-tighter text-text-primary hidden sm:block">
              Ishu&apos;s Collections
            </div>
          </Link>
        </div>
        
        {/* Nav Links in the Center (hidden on mobile) */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-6 text-xs md:text-sm font-medium tracking-widest uppercase">
          <Link href="/" className="hover:text-accent-gold transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-gold transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/shop" className="hover:text-accent-gold transition-colors relative group">
            Shop
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-gold transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/collections" className="hover:text-accent-gold transition-colors relative group">
            Collections
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-gold transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/our-story" className="hover:text-accent-gold transition-colors relative group">
            Our Story
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-gold transition-all group-hover:w-full"></span>
          </Link>
        </div>

        {/* Search and Cart on the Right */}
        <div className="flex items-center gap-3 md:gap-6 justify-end">
          <div className="hidden md:flex items-center border-b border-text-primary/30 pb-1 focus-within:border-accent-gold transition-colors">
            <input 
              suppressHydrationWarning
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none text-sm placeholder:text-text-primary/50 w-32 focus:w-48 transition-all duration-300 text-text-primary"
            />
            <Search className="w-4 h-4 ml-2 text-text-primary" />
          </div>
          <button suppressHydrationWarning className="md:hidden p-1">
            <Search className="w-5 h-5 md:w-6 md:h-6 text-text-primary" />
          </button>

          <Link href="/account" className="relative group hover:scale-110 transition-transform hidden sm:block">
            <User className="w-5 h-5 md:w-6 md:h-6 text-text-primary" />
          </Link>

          <Link href="/cart" className="relative group hover:scale-110 transition-transform">
            <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-text-primary" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent-gold text-text-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bg-primary border-b border-text-primary/10 shadow-lg py-4 px-4 flex flex-col gap-4 font-medium uppercase tracking-widest text-sm z-50">
          <Link 
            href="/" 
            className="py-2 border-b border-text-primary/10 hover:text-accent-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/shop" 
            className="py-2 border-b border-text-primary/10 hover:text-accent-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Shop
          </Link>
          <Link 
            href="/collections" 
            className="py-2 border-b border-text-primary/10 hover:text-accent-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Collections
          </Link>
          <Link 
            href="/our-story" 
            className="py-2 border-b border-text-primary/10 hover:text-accent-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Story
          </Link>
          <Link 
            href="/account" 
            className="py-2 hover:text-accent-gold transition-colors flex items-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <User className="w-4 h-4" /> My Account
          </Link>
        </div>
      )}
    </header>
  );
}

