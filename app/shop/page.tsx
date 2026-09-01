"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { ChevronDown, Filter } from "lucide-react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { allProducts } from "../data/products";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
};

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-bg-primary text-text-primary flex items-center justify-center">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const [sortBy, setSortBy] = useState("featured");

  let displayedProducts = categoryFilter 
    ? allProducts.filter(p => p.category === categoryFilter)
    : [...allProducts];

  displayedProducts = displayedProducts.sort((a, b) => {
    if (sortBy === "price-low") {
      return parseInt(a.price.replace(/[^0-9]/g, "")) - parseInt(b.price.replace(/[^0-9]/g, ""));
    } else if (sortBy === "price-high") {
      return parseInt(b.price.replace(/[^0-9]/g, "")) - parseInt(a.price.replace(/[^0-9]/g, ""));
    } else if (sortBy === "newest") {
      return b.id - a.id;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-gold selection:text-white">
      <TopBar />
      <Header />
      
      <main className="py-24 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-text-primary">
            {categoryFilter ? categoryFilter.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase()) : "All Products"}
          </h1>
          <div className="w-24 h-[2px] bg-accent-gold mx-auto"></div>
          <p className="mt-6 text-text-primary/70 max-w-2xl mx-auto font-light">
            Explore our curated collection of artisan-crafted luxury handbags.
          </p>
        </motion.div>

        {/* Filters and Sorting (Professional UI) */}
        <div className="sticky top-20 z-40 bg-bg-primary/95 backdrop-blur-sm pt-4 pb-6 mb-12 border-b border-text-primary/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Category Filters */}
            <div className="w-full lg:w-auto overflow-x-auto no-scrollbar pb-2 lg:pb-0">
              <div className="flex items-center gap-8 min-w-max text-xs sm:text-sm font-medium tracking-widest uppercase text-text-primary/60">
                <Link href="/shop" className={`relative pb-2 transition-colors duration-300 ${!categoryFilter ? 'text-accent-gold' : 'hover:text-text-primary'}`}>
                  All Collections
                  {!categoryFilter && <motion.div layoutId="activeCat" className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-gold" />}
                </Link>
                <Link href="/shop?category=bramble-bags" className={`relative pb-2 transition-colors duration-300 ${categoryFilter === 'bramble-bags' ? 'text-accent-gold' : 'hover:text-text-primary'}`}>
                  Bramble
                  {categoryFilter === 'bramble-bags' && <motion.div layoutId="activeCat" className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-gold" />}
                </Link>
                <Link href="/shop?category=cotton-bags" className={`relative pb-2 transition-colors duration-300 ${categoryFilter === 'cotton-bags' ? 'text-accent-gold' : 'hover:text-text-primary'}`}>
                  Cotton
                  {categoryFilter === 'cotton-bags' && <motion.div layoutId="activeCat" className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-gold" />}
                </Link>
                <Link href="/shop?category=leather-bags" className={`relative pb-2 transition-colors duration-300 ${categoryFilter === 'leather-bags' ? 'text-accent-gold' : 'hover:text-text-primary'}`}>
                  Leather
                  {categoryFilter === 'leather-bags' && <motion.div layoutId="activeCat" className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-gold" />}
                </Link>
                <Link href="/shop?category=pu-leather-bags" className={`relative pb-2 transition-colors duration-300 ${categoryFilter === 'pu-leather-bags' ? 'text-accent-gold' : 'hover:text-text-primary'}`}>
                  PU Leather
                  {categoryFilter === 'pu-leather-bags' && <motion.div layoutId="activeCat" className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-gold" />}
                </Link>
                <Link href="/shop?category=purse" className={`relative pb-2 transition-colors duration-300 ${categoryFilter === 'purse' ? 'text-accent-gold' : 'hover:text-text-primary'}`}>
                  Purses
                  {categoryFilter === 'purse' && <motion.div layoutId="activeCat" className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-gold" />}
                </Link>
                <Link href="/shop?category=summer-bags" className={`relative pb-2 transition-colors duration-300 ${categoryFilter === 'summer-bags' ? 'text-accent-gold' : 'hover:text-text-primary'}`}>
                  Summer
                  {categoryFilter === 'summer-bags' && <motion.div layoutId="activeCat" className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-gold" />}
                </Link>
              </div>
            </div>

            {/* Sorting Dropdown */}
            <div className="w-full lg:w-auto flex justify-between lg:justify-end items-center gap-4 text-sm font-medium tracking-widest uppercase text-text-primary/70">
              <div className="flex items-center gap-2 lg:hidden">
                <Filter className="w-4 h-4 text-accent-gold" />
                <span>Filter</span>
              </div>
              <div className="relative flex items-center group">
                <span className="mr-3 text-text-primary/50">Sort By:</span>
                <div className="relative">
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="pl-4 pr-10 py-2.5 bg-surface text-text-primary border border-text-primary/10 rounded-sm outline-none cursor-pointer appearance-none hover:border-accent-gold transition-colors duration-300 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/50"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest Arrivals</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-text-primary/50 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-accent-gold transition-colors" />
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {displayedProducts.map((product, index) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: (index % 4) * 0.1, ease: "easeOut" as any } }
                  }}
                  className="group cursor-pointer bg-bg-primary/50 rounded-none overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(74,14,78,0.1)] transition-all duration-700 hover:-translate-y-3 border border-text-primary/5 relative"
                >
                  <div className="relative h-96 overflow-hidden bg-gray-100">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <button className="w-full bg-bg-primary text-text-primary py-4 rounded-none font-medium tracking-widest uppercase text-sm hover:bg-accent-gold hover:text-white transition-colors duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="p-8 text-center bg-surface">
                    <h3 className="text-2xl font-serif font-semibold mb-3 text-text-primary group-hover:text-accent-gold transition-colors duration-300">{product.name}</h3>
                    <p className="text-text-primary/70 font-medium tracking-wider">{product.price}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-serif font-medium text-text-primary/70">No products found in this category.</h3>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
