"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const collections = [
  { id: 1, name: "Bramble Bags", slug: "bramble-bags", description: "Eco-friendly, stylish bramble bags that combine durability with a unique natural aesthetic for your everyday needs.", image: "/images/bags/Bramble bags/brambel1.jpg" },
  { id: 2, name: "PU Leather Bags", slug: "pu-leather-bags", description: "Sleek and modern PU leather bags offering premium looks and exceptional durability for any occasion.", image: "/images/bags/PU leather bags/pu1.jpg" },
  { id: 3, name: "Cotton Bags", slug: "cotton-bags", description: "Lightweight, breathable, and vibrant cotton bags perfect for casual outings and sustainable shopping.", image: "/images/bags/cotton bags/Gemini_Generated_Image_69zh969zh969zh96.jpg" },
  { id: 4, name: "Leather Bags", slug: "leather-bags", description: "Timeless elegance meets supreme craftsmanship in our genuine leather bags designed to age beautifully.", image: "/images/bags/leather bags/leather1.jpg" },
  { id: 5, name: "Purses", slug: "purse", description: "Chic, compact, and highly functional purses that keep your essentials organized while elevating your style.", image: "/images/bags/purse/Gemini_Generated_Image_1zuf2t1zuf2t1zuf.jpg" },
  { id: 6, name: "Summer Bags", slug: "summer-bags", description: "Vibrant and airy designs perfectly crafted to complement your sunny adventures and beach getaways.", image: "/images/bags/summer bags/summer1.jpg" },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-gold selection:text-white">
      <TopBar />
      <Header />
      
      <main className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-accent-gold font-medium tracking-widest uppercase text-sm mb-4 block">Curated For You</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-text-primary">Our Collections</h1>
          <div className="w-24 h-[2px] bg-accent-gold mx-auto"></div>
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
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-text-primary">{collection.name}</h2>
                <p className="text-lg text-text-primary/70 font-light leading-relaxed mb-8">
                  {collection.description}
                </p>
                <Link href={`/shop?category=${collection.slug}`} className="inline-block border-b-2 border-accent-gold text-text-primary hover:text-accent-gold pb-2 font-medium tracking-widest uppercase transition-colors duration-300 text-sm">
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
