"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Placeholder data for all products
const allProducts = [
  { id: 1, name: "Luxury Collection Bag 1", price: "LKR 1,250", image: "/bags/bag-8.jpg", category: "tote-bags" },
  { id: 2, name: "Luxury Collection Bag 2", price: "LKR 890", image: "/bags/bag-9.jpg", category: "clutches" },
  { id: 3, name: "Luxury Collection Bag 3", price: "LKR 1,450", image: "/bags/bag-10.jpg", category: "tote-bags" },
  { id: 4, name: "Luxury Collection Bag 4", price: "LKR 1,100", image: "/bags/bag-11.jpg", category: "crossbody" },
  { id: 5, name: "Luxury Collection Bag 5", price: "LKR 950", image: "/bags/bag-12.jpg", category: "clutches" },
  { id: 7, name: "Luxury Collection Bag 7", price: "LKR 1,150", image: "/bags/bag-5.jpg", category: "crossbody" },
  { id: 8, name: "Luxury Collection Bag 8", price: "LKR 850", image: "/bags/bag-6.jpg", category: "tote-bags" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
};

export default function ShopPage() {
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
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-text-primary">All Products</h1>
          <div className="w-24 h-[2px] bg-accent-gold mx-auto"></div>
          <p className="mt-6 text-text-primary/70 max-w-2xl mx-auto font-light">
            Explore our complete collection of artisan-crafted luxury handbags.
          </p>
        </motion.div>

        {/* Filters placeholder */}
        <div className="flex justify-between items-center mb-10 border-y border-text-primary/10 py-4">
          <div className="flex gap-6 text-sm font-medium tracking-widest uppercase text-text-primary/70">
            <button className="text-accent-gold">All</button>
            <button className="hover:text-accent-gold transition-colors">Tote Bags</button>
            <button className="hover:text-accent-gold transition-colors">Crossbody</button>
            <button className="hover:text-accent-gold transition-colors">Clutches</button>
          </div>
          <div className="text-sm font-medium tracking-widest uppercase text-text-primary/70">
            Sort by: <span className="text-text-primary ml-2 cursor-pointer">Featured</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {allProducts.map((product, index) => (
            <Link href={`/product/LKR {product.id}`} key={product.id}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1, ease: "easeOut" as any } }
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
      </main>

      <Footer />
    </div>
  );
}
