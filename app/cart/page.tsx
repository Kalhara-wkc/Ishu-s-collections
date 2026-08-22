"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ArrowRight, ShieldCheck } from "lucide-react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const initialCartItems = [
  { 
    id: 1, 
    name: "The Classic Elegance", 
    price: 1250, 
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800",
    quantity: 1,
    color: "Cognac"
  },
  { 
    id: 3, 
    name: "Champagne Tote", 
    price: 1450, 
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800",
    quantity: 1,
    color: "Champagne"
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items => items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-gold selection:text-white">
      <TopBar />
      <Header />
      
      <main className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-text-primary">Shopping Bag</h1>
          <p className="text-text-primary/70 font-light tracking-wide mb-12">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your bag
          </p>

          {cartItems.length === 0 ? (
            <div className="text-center py-20 bg-surface border border-text-primary/10">
              <p className="text-xl font-light text-text-primary/70 mb-8">Your bag is currently empty.</p>
              <Link href="/shop" className="bg-text-primary text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-accent-gold transition-colors">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Cart Items */}
              <div className="w-full lg:w-2/3 space-y-6">
                {cartItems.map((item, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    key={item.id} 
                    className="flex flex-col sm:flex-row gap-6 bg-surface p-6 border border-text-primary/5 relative group"
                  >
                    <div className="relative w-full sm:w-40 h-48 sm:h-40 bg-bg-primary shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between py-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-serif font-semibold mb-1 hover:text-accent-gold transition-colors">
                            <Link href={`/product/LKR {item.id}`}>{item.name}</Link>
                          </h3>
                          <p className="text-sm text-text-primary/60 font-light mb-4">Color: {item.color}</p>
                        </div>
                        <p className="text-lg font-medium">LKR {item.price.toLocaleString()}</p>
                      </div>

                      <div className="flex justify-between items-center mt-auto">
                        <div className="flex items-center border border-text-primary/20">
                          <button 
                            suppressHydrationWarning
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-bg-primary transition-colors text-text-primary/70 hover:text-text-primary"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            suppressHydrationWarning
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-bg-primary transition-colors text-text-primary/70 hover:text-text-primary"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <button 
                          suppressHydrationWarning
                          onClick={() => removeItem(item.id)}
                          className="text-sm uppercase tracking-widest text-text-primary/50 hover:text-red-500 transition-colors flex items-center gap-2"
                        >
                          <Trash2 className="w-4 h-4" /> <span className="hidden sm:inline">Remove</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Order Summary */}
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
                      <span>{shipping === 0 ? 'Complimentary' : `$LKR {shipping}`}</span>
                    </div>
                    <div className="flex justify-between text-text-primary/50 text-xs">
                      <span>Taxes calculated at checkout</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-8 pt-4 border-t border-text-primary/10">
                    <span className="text-lg font-medium">Estimated Total</span>
                    <span className="text-2xl font-serif font-bold text-accent-gold">LKR {total.toLocaleString()}</span>
                  </div>

                  <Link href="/checkout" suppressHydrationWarning className="w-full bg-text-primary hover:bg-accent-gold text-white py-4 flex items-center justify-center gap-3 uppercase tracking-widest text-sm font-medium transition-colors duration-300 mb-4">
                    Proceed to Checkout <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="flex items-center justify-center gap-2 text-xs text-text-primary/60 uppercase tracking-wider mt-6">
                    <ShieldCheck className="w-4 h-4 text-accent-gold" /> Secure Checkout
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
