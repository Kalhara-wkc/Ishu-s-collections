"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { ArrowLeft, ShoppingBag, Heart, Truck, ShieldCheck } from "lucide-react";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const allProducts = [
  { id: 1, name: "The Classic Elegance", price: "LKR 1,250", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800", description: "A timeless masterpiece crafted from full-grain calf leather. Perfect for any occasion that demands sophistication." },
  { id: 2, name: "Midnight Clutch", price: "LKR 890", image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=800", description: "Sleek and mysterious. This clutch is the ultimate companion for your evening gala, featuring gold-plated hardware." },
  { id: 3, name: "Champagne Tote", price: "LKR 1,450", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800", description: "Spacious and elegant. The Champagne Tote fits your essentials while maintaining a graceful silhouette." },
  { id: 4, name: "Onyx Crossbody", price: "LKR 1,100", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800", description: "Hands-free luxury. The Onyx Crossbody is designed for the dynamic woman who refuses to compromise on style." },
];

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const productId = parseInt(unwrappedParams.id);
  const product = allProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif text-text-primary mb-4">Product Not Found</h1>
        <Link href="/shop" className="border-b border-accent-gold text-accent-gold uppercase tracking-widest text-sm">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-gold selection:text-white">
      <TopBar />
      <Header />
      
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link href="/shop" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-text-primary/70 hover:text-accent-gold mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/5] bg-surface p-4 shadow-sm">
              <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-light text-accent-gold mb-8">{product.price}</p>
            
            <p className="text-lg text-text-primary/80 font-light leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 border-b border-text-primary/10 pb-4">
                <Truck className="w-5 h-5 text-accent-gold" />
                <span className="text-sm tracking-wide font-light">Complimentary Global Shipping</span>
              </div>
              <div className="flex items-center gap-4 border-b border-text-primary/10 pb-4">
                <ShieldCheck className="w-5 h-5 text-accent-gold" />
                <span className="text-sm tracking-wide font-light">Lifetime Authenticity Guarantee</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Link href="/cart" className="flex-1 bg-text-primary hover:bg-accent-gold text-white py-5 px-8 flex items-center justify-center gap-3 uppercase tracking-widest text-sm font-medium transition-colors duration-300">
                  <ShoppingBag className="w-5 h-5" /> Add to Cart
                </Link>
                <button className="p-5 border border-text-primary/20 hover:border-accent-gold hover:text-accent-gold transition-colors duration-300 flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </button>
              </div>
              <Link href="/cart" className="w-full bg-surface border border-text-primary hover:bg-bg-primary text-text-primary py-5 px-8 flex items-center justify-center gap-3 uppercase tracking-widest text-sm font-medium transition-colors duration-300">
                Shop Now (Cash on Delivery)
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
