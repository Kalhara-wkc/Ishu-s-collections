"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const allProducts = [
  { id: 1, name: "The Classic Elegance", price: "LKR 1,250", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800", category: "tote-bags" },
  { id: 2, name: "Midnight Clutch", price: "LKR 890", image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=800", category: "clutches" },
  { id: 3, name: "Champagne Tote", price: "LKR 1,450", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800", category: "tote-bags" },
  { id: 4, name: "Onyx Crossbody", price: "LKR 1,100", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800", category: "crossbody" },
];

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap params using React.use()
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;
  const categoryName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const categoryProducts = allProducts.filter(p => p.category === slug);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-gold selection:text-white">
      <TopBar />
      <Header />
      
      <main className="py-24 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent-gold font-medium tracking-widest uppercase text-sm mb-4 block">Category</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-text-primary">{categoryName}</h1>
          <div className="w-24 h-[2px] bg-accent-gold mx-auto"></div>
        </motion.div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {categoryProducts.map((product, index) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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
            <p className="text-xl font-light text-text-primary/70">No products found in this category.</p>
            <Link href="/shop" className="mt-8 inline-block border-b-2 border-accent-gold text-text-primary hover:text-accent-gold pb-2 font-medium tracking-widest uppercase transition-colors duration-300 text-sm">
              Return to Shop
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
