"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const collections = [
  { id: 1, name: "The Summer Breeze Collection", description: "Lightweight, vibrant, and ready for your summer adventures.", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=1200" },
  { id: 2, name: "Midnight Elegance", description: "Sophisticated dark tones and metallic accents for your evening galas.", image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=1200" },
  { id: 3, name: "Everyday Classics", description: "Timeless designs that never go out of style, perfect for daily use.", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=1200" },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-[#F4F0F7] text-[#4A0E4E] selection:bg-[#D4AF37] selection:text-white">
      <TopBar />
      <Header />
      
      <main className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm mb-4 block">Curated For You</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-[#4A0E4E]">Our Collections</h1>
          <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="space-y-32">
          {collections.map((collection, index) => (
            <motion.div 
              key={collection.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}
            >
              <div className="w-full md:w-1/2 relative h-[500px] overflow-hidden group">
                <Image 
                  src={collection.image} 
                  alt={collection.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-[#4A0E4E]">{collection.name}</h2>
                <p className="text-lg text-[#4A0E4E]/70 font-light leading-relaxed mb-8">
                  {collection.description}
                </p>
                <Link href="/shop" className="inline-block border-b-2 border-[#D4AF37] text-[#4A0E4E] hover:text-[#D4AF37] pb-2 font-medium tracking-widest uppercase transition-colors duration-300 text-sm">
                  Explore Collection
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
