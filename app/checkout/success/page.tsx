"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import { useEffect } from "react";
import { useCart } from "../../context/CartContext";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-gold selection:text-white flex flex-col">
      <TopBar />
      <Header />
      
      <main className="flex-1 py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-surface p-12 shadow-sm border border-text-primary/5 rounded-none flex flex-col items-center w-full"
        >
          <CheckCircle2 className="w-20 h-20 text-accent-gold mb-6" />
          <h1 className="text-4xl font-serif font-bold mb-4 text-text-primary">Order Confirmed!</h1>
          <p className="text-lg text-text-primary/70 font-light mb-8 max-w-md">
            Thank you for shopping with Ishu&apos;s Collections. Your order has been placed successfully and will be delivered soon via Cash on Delivery.
          </p>
          
          <Link href="/shop" className="bg-text-primary text-white hover:bg-accent-gold transition-colors py-4 px-10 uppercase tracking-widest text-sm font-medium">
            Continue Shopping
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
