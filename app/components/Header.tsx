"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, Menu, User, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-bg-primary/95 border-b border-text-primary/10 shadow-sm transition-all duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-16 h-16 md:h-20 flex items-center justify-between">
        {/* Logo & Name on the Left */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4 md:hidden">
            <Menu className="w-6 h-6 text-text-primary" />
          </div>
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-accent-gold/30 shadow-sm">
              <Image src="/logo.jpeg" alt="Ishu's Collections Logo" fill className="object-cover" />
            </div>
            <div className="text-lg md:text-2xl font-serif font-bold tracking-tighter text-text-primary">
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
        <div className="flex items-center gap-4 md:gap-6 justify-end">
          <div className="hidden md:flex items-center border-b border-text-primary/30 pb-1 focus-within:border-accent-gold transition-colors">
            <input 
              suppressHydrationWarning
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none text-sm placeholder:text-text-primary/50 w-32 focus:w-48 transition-all duration-300 text-text-primary"
            />
            <Search className="w-4 h-4 ml-2 text-text-primary" />
          </div>
          <button suppressHydrationWarning className="md:hidden">
            <Search className="w-6 h-6 text-text-primary" />
          </button>

          <Link href="/account" className="relative group hover:scale-110 transition-transform hidden sm:block">
            <User className="w-6 h-6 text-text-primary" />
          </Link>

          <Link href="/cart" className="relative group hover:scale-110 transition-transform">
            <ShoppingCart className="w-6 h-6 text-text-primary" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent-gold text-text-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
