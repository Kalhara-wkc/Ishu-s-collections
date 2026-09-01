"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, ArrowRight, Star, ShieldCheck, Truck, CreditCard, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { allProducts } from "./data/products";

const featuredProducts = [
  allProducts[0],
  allProducts[11],
  allProducts[17],
  allProducts[32]
];

const categories = [
  { id: 1, name: "Bramble Bags", slug: "bramble-bags", image: "/images/bags/Bramble bags/brambel1.jpg" },
  { id: 2, name: "PU Leather Bags", slug: "pu-leather-bags", image: "/images/bags/PU leather bags/pu1.jpg" },
  { id: 3, name: "Cotton Bags", slug: "cotton-bags", image: "/images/bags/cotton bags/Gemini_Generated_Image_69zh969zh969zh96.jpg" },
  { id: 4, name: "Leather Bags", slug: "leather-bags", image: "/images/bags/leather bags/leather1.jpg" },
  { id: 5, name: "Purses", slug: "purse", image: "/images/bags/purse/Gemini_Generated_Image_1zuf2t1zuf2t1zuf.jpg" },
  { id: 6, name: "Summer Bags", slug: "summer-bags", image: "/images/bags/summer bags/summer1.jpg" },
];

const testimonials = [
  { id: 1, name: "Sophia L.", review: "Absolutely in love with my Champagne Tote. The craftsmanship is unparalleled and it elevates every outfit I wear." },
  { id: 2, name: "Emily R.", review: "The leather quality is incredible. It feels so luxurious and the attention to detail is evident in every stitch." },
  { id: 3, name: "Isabella M.", review: "A true investment piece. Customer service was excellent, and the packaging made the unboxing experience so special." },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
};

export default function Home() {
  const heroVideos = [
    "/new/bagvideo2.mp4",
    "/new/bagvideo3.mp4",
    "/new/bagvideo4.mp4",
    "/new/bagvideo5.mp4",
  ];
  const [currentHeroVideoIndex, setCurrentHeroVideoIndex] = useState(0);

  const handleHeroVideoEnded = () => {
    setCurrentHeroVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-gold selection:text-white overflow-x-hidden">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="relative h-[85vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <video 
            key={currentHeroVideoIndex}
            src={heroVideos[currentHeroVideoIndex]} 
            autoPlay 
            muted 
            playsInline
            onEnded={handleHeroVideoEnded}
            className="w-full h-full object-cover opacity-80 saturate-150 contrast-110 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F4F0F7] via-transparent to-[#F4F0F7]/20"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" as any }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold mb-6 leading-[1.1] text-text-primary">
              Artisan Bags <br className="hidden md:block"/> Modern Style
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-base sm:text-lg md:text-2xl mb-12 text-text-primary/80 max-w-2xl mx-auto font-light"
          >
            Discover our exclusive collection of luxury women&apos;s handbags, crafted from the finest materials for the modern sophisticate.
          </motion.p>
          <Link href="/shop">
            <motion.button 
              suppressHydrationWarning
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="group bg-accent-gold hover:bg-[#E5D3B3] text-text-primary px-10 py-5 rounded-none font-medium tracking-widest uppercase transition-all duration-300 flex items-center gap-4 mx-auto shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              Shop Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Infinite Marquee */}
      <div className="bg-text-primary text-accent-gold py-6 overflow-hidden border-y border-accent-gold/20 shadow-inner">
        <div className="flex whitespace-nowrap">
          <motion.div 
            className="flex gap-12 text-sm md:text-lg font-serif italic tracking-wider"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            <span>✦ Premium Craftsmanship</span>
            <span>✦ 100% Genuine Leather</span>
            <span>✦ Exclusive Designs</span>
            <span>✦ Global Shipping</span>
            <span>✦ Premium Craftsmanship</span>
            <span>✦ 100% Genuine Leather</span>
            <span>✦ Exclusive Designs</span>
            <span>✦ Global Shipping</span>
            <span>✦ Premium Craftsmanship</span>
            <span>✦ 100% Genuine Leather</span>
            <span>✦ Exclusive Designs</span>
            <span>✦ Global Shipping</span>
          </motion.div>
        </div>
      </div>

      {/* Service Benefits */}
      <section className="py-16 px-4 bg-bg-primary border-b border-text-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex flex-col items-center">
              <Truck className="w-10 h-10 text-accent-gold mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-2">Global Shipping</h3>
              <p className="text-text-primary/70 font-light">Complimentary delivery on all international orders.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex flex-col items-center">
              <ShieldCheck className="w-10 h-10 text-accent-gold mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-2">Authenticity Guarantee</h3>
              <p className="text-text-primary/70 font-light">100% genuine premium leather with certificate.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex flex-col items-center">
              <CreditCard className="w-10 h-10 text-accent-gold mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-2">Secure Payments</h3>
              <p className="text-text-primary/70 font-light">Encrypted checkout for your peace of mind.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-text-primary">Shop by Category</h2>
          <div className="w-24 h-[2px] bg-accent-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <Link href={`/shop?category=${cat.slug}`} key={cat.id}>
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.2 } }
                }}
                className="relative h-96 group overflow-hidden cursor-pointer"
              >
                <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-serif text-white font-bold tracking-wider group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">{cat.name}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto bg-surface/50 backdrop-blur-md my-10 rounded-3xl shadow-sm border border-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-20"
        >
          <span className="text-accent-gold font-medium tracking-widest uppercase text-sm mb-4 block">Handpicked for you</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-text-primary">Featured Collections</h2>
          <div className="w-32 h-[2px] bg-accent-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {featuredProducts.map((product, index) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.15, ease: "easeOut" as any } }
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
                    <button suppressHydrationWarning className="w-full bg-bg-primary text-text-primary py-4 rounded-none font-medium tracking-widest uppercase text-sm hover:bg-accent-gold hover:text-white transition-colors duration-300">
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
        
        <div className="mt-24 text-center">
          <button suppressHydrationWarning className="border-b-2 border-text-primary text-text-primary hover:text-accent-gold hover:border-accent-gold pb-2 font-medium tracking-widest uppercase transition-all duration-300 text-sm">
            View All Collections
          </button>
        </div>
      </section>

      {/* Our Philosophy (Craftsmanship) */}
      <section className="py-24 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="w-full lg:w-1/2 relative h-[500px]"
          >
            <video 
              src="/video1.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover rounded-tr-[4rem] rounded-bl-[4rem] shadow-xl" 
            />
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">The Art of Craftsmanship</h2>
            <div className="w-20 h-[2px] bg-accent-gold mb-8 mx-auto lg:mx-0"></div>
            <p className="text-lg text-text-primary/80 font-light leading-relaxed mb-6">
              At Ishu&apos;s Collections, every handbag tells a story of dedication and artistry. We source only the finest genuine leathers and hardware, carefully assembled by master artisans who have perfected their trade over generations.
            </p>
            <p className="text-lg text-text-primary/80 font-light leading-relaxed mb-10">
              Our designs are born from a desire to blend timeless elegance with modern functionality, ensuring that your bag isn&apos;t just an accessory, but a loyal companion for life.
            </p>
            <button suppressHydrationWarning className="text-accent-gold font-medium tracking-widest uppercase text-sm border border-accent-gold px-8 py-3 hover:bg-accent-gold hover:text-white transition-colors duration-300">
              Read Our Story
            </button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-text-primary text-bg-primary">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">Words of Adoration</h2>
          <div className="w-24 h-[2px] bg-accent-gold mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testi, i) => (
              <motion.div 
                key={testi.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-bg-primary/5 p-10 relative border border-accent-gold/20 hover:border-accent-gold transition-colors duration-300"
              >
                <Quote className="absolute top-6 left-6 w-12 h-12 text-accent-gold opacity-20" />
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-accent-gold fill-current" />
                  ))}
                </div>
                <p className="text-[#E5D3B3] font-light leading-relaxed mb-8 italic relative z-10">
                  &quot;{testi.review}&quot;
                </p>
                <h4 className="text-white font-serif tracking-widest uppercase text-sm">— {testi.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
