"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-[#F4F0F7] text-[#4A0E4E] selection:bg-[#D4AF37] selection:text-white">
      <TopBar />
      <Header />
      
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=2000" 
            alt="Our Story Hero" 
            fill 
            className="object-cover opacity-60 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F4F0F7] to-transparent"></div>
          <div className="relative z-10 text-center px-4 mt-20">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-serif font-bold mb-6 text-[#4A0E4E]"
            >
              Our Heritage
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-24 h-[2px] bg-[#D4AF37] mx-auto"
            ></motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-serif font-bold mb-6 text-[#4A0E4E]">The Beginning</h2>
            <p className="text-lg text-[#4A0E4E]/80 font-light leading-relaxed mb-6">
              Founded in 2010, Ishu&apos;s Collections began with a simple yet profound vision: to create luxury handbags that celebrate traditional craftsmanship while embracing modern aesthetics. What started in a small artisan workshop has blossomed into a global symbol of elegance.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-serif font-bold mb-6 text-[#4A0E4E]">Our Craftsmanship</h2>
            <p className="text-lg text-[#4A0E4E]/80 font-light leading-relaxed mb-6">
              We believe that true luxury lies in the details. Every stitch, every fold, and every piece of hardware is carefully selected and meticulously applied. We source only the finest leathers from sustainable tanneries, ensuring that our products not only look beautiful but also respect the environment.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif font-bold mb-6 text-[#4A0E4E]">The Promise</h2>
            <p className="text-lg text-[#4A0E4E]/80 font-light leading-relaxed mb-6">
              When you hold an Ishu&apos;s Collections bag, you are holding a piece of art that is designed to last a lifetime. We stand behind our quality with our lifetime authenticity guarantee, promising you an accessory that will age gracefully alongside you.
            </p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
