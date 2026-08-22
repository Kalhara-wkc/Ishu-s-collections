"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AccountPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-gold selection:text-white">
      <TopBar />
      <Header />
      
      <main className="py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[70vh]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="bg-surface border border-text-primary/10 shadow-2xl relative overflow-hidden">
            {/* Tabs */}
            <div className="flex w-full border-b border-text-primary/10">
              <button 
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-4 text-sm font-medium tracking-widest uppercase transition-colors ${
                  isLogin ? "bg-surface text-text-primary border-b-2 border-accent-gold" : "bg-surface text-text-primary/50 hover:text-text-primary"
                }`}
              >
                Sign In
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-4 text-sm font-medium tracking-widest uppercase transition-colors ${
                  !isLogin ? "bg-surface text-text-primary border-b-2 border-accent-gold" : "bg-surface text-text-primary/50 hover:text-text-primary"
                }`}
              >
                Register
              </button>
            </div>

            <div className="p-10 relative">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-bg-primary rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
              
              <div className="text-center mb-10 relative z-10">
                <div className="w-16 h-16 bg-bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-8 h-8 text-accent-gold" />
                </div>
                <h1 className="text-3xl font-serif font-bold text-text-primary mb-2">
                  {isLogin ? "Welcome Back" : "Create Account"}
                </h1>
                <p className="text-text-primary/60 text-sm font-light">
                  {isLogin ? "Sign in to access your exclusive benefits." : "Join us for an exclusive luxury experience."}
                </p>
              </div>

              <form className="space-y-6 relative z-10">
                {!isLogin && (
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-widest text-text-primary/70">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-bg-primary/50 border border-text-primary/10 px-4 py-3 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                )}
                
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-widest text-text-primary/70">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-bg-primary/50 border border-text-primary/10 px-4 py-3 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-medium uppercase tracking-widest text-text-primary/70">Password</label>
                    {isLogin && (
                      <a href="#" className="text-xs text-accent-gold hover:underline">Forgot password?</a>
                    )}
                  </div>
                  <input 
                    type="password" 
                    className="w-full bg-bg-primary/50 border border-text-primary/10 px-4 py-3 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                    placeholder="••••••••"
                  />
                </div>

                <button 
                  type="button" 
                  className="w-full bg-text-primary hover:bg-accent-gold text-white py-4 mt-8 flex items-center justify-center gap-3 uppercase tracking-widest text-sm font-medium transition-colors duration-300"
                >
                  {isLogin ? "Sign In" : "Register"} <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
