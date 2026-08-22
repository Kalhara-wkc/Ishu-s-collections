"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { cartTotal: subtotal } = useCart();
  const shipping = subtotal > 15000 || subtotal === 0 ? 0 : 500;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order processing
    router.push("/checkout/success");
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-gold selection:text-white">
      <TopBar />
      <Header />
      
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link href="/cart" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-text-primary/70 hover:text-accent-gold mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Cart
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-16"
        >
          {/* Checkout Form */}
          <div className="w-full lg:w-2/3">
            <h1 className="text-3xl font-serif font-bold mb-8">Checkout</h1>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Contact Information */}
              <div className="bg-surface p-8 border border-text-primary/5">
                <h2 className="text-xl font-serif font-semibold mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-text-primary/70">First Name</label>
                    <input required type="text" className="w-full bg-bg-primary/50 border border-text-primary/20 p-3 outline-none focus:border-accent-gold transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-text-primary/70">Last Name</label>
                    <input required type="text" className="w-full bg-bg-primary/50 border border-text-primary/20 p-3 outline-none focus:border-accent-gold transition-colors" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-text-primary/70">Email Address</label>
                    <input required type="email" className="w-full bg-bg-primary/50 border border-text-primary/20 p-3 outline-none focus:border-accent-gold transition-colors" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-text-primary/70">Phone Number</label>
                    <input required type="tel" className="w-full bg-bg-primary/50 border border-text-primary/20 p-3 outline-none focus:border-accent-gold transition-colors" />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-surface p-8 border border-text-primary/5">
                <h2 className="text-xl font-serif font-semibold mb-6">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-text-primary/70">Street Address</label>
                    <input required type="text" className="w-full bg-bg-primary/50 border border-text-primary/20 p-3 outline-none focus:border-accent-gold transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-text-primary/70">City</label>
                    <input required type="text" className="w-full bg-bg-primary/50 border border-text-primary/20 p-3 outline-none focus:border-accent-gold transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-text-primary/70">Postal Code</label>
                    <input required type="text" className="w-full bg-bg-primary/50 border border-text-primary/20 p-3 outline-none focus:border-accent-gold transition-colors" />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-surface p-8 border border-text-primary/5">
                <h2 className="text-xl font-serif font-semibold mb-6">Payment Method</h2>
                <div className="border border-accent-gold bg-accent-gold/5 p-4 flex items-center gap-4 cursor-pointer">
                  <input type="radio" id="cod" name="payment" value="cod" defaultChecked className="w-4 h-4 accent-accent-gold" />
                  <label htmlFor="cod" className="cursor-pointer text-sm font-medium tracking-wide">Cash on Delivery (COD)</label>
                </div>
                <p className="text-xs text-text-primary/60 mt-4 font-light">
                  Pay with cash upon delivery. No advance payment required.
                </p>
              </div>

              <button type="submit" className="w-full bg-text-primary hover:bg-accent-gold text-white py-5 flex items-center justify-center gap-3 uppercase tracking-widest text-sm font-medium transition-colors duration-300">
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-surface p-8 border border-text-primary/5 sticky top-32">
              <h2 className="text-2xl font-serif font-semibold mb-6 pb-4 border-b border-text-primary/10">Order Summary</h2>
              
              <div className="space-y-4 mb-6 text-sm font-light">
                <div className="flex justify-between">
                  <span className="text-text-primary/70">Subtotal</span>
                  <span>LKR {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-primary/70">Shipping</span>
                  <span>{shipping === 0 ? 'Complimentary' : `LKR ${shipping.toLocaleString()}`}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8 pt-4 border-t border-text-primary/10">
                <span className="text-lg font-medium">Estimated Total</span>
                <span className="text-2xl font-serif font-bold text-accent-gold">LKR {total.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-text-primary/60 uppercase tracking-wider mt-6 border-t border-text-primary/10 pt-6">
                <ShieldCheck className="w-4 h-4 text-accent-gold" /> Secure Checkout
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
