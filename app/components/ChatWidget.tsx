"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  sender: "user" | "admin";
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can we help you today?", sender: "admin" }
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newUserMsg: Message = { id: Date.now(), text: inputText, sender: "user" };
    setMessages(prev => [...prev, newUserMsg]);
    setInputText("");

    // Simulate admin auto-reply
    setTimeout(() => {
      const adminReply: Message = { 
        id: Date.now() + 1, 
        text: "Thanks for your message! Our admin will get back to you shortly.", 
        sender: "admin" 
      };
      setMessages(prev => [...prev, adminReply]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 h-[400px] bg-bg-primary border border-text-primary/10 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-text-primary text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="font-medium tracking-wide">Customer Support</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-accent-gold transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`max-w-[80%] p-3 text-sm ${msg.sender === 'user' ? 'bg-accent-gold text-text-primary self-end' : 'bg-surface border border-text-primary/10 text-text-primary self-start'}`}>
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="border-t border-text-primary/10 p-3 bg-surface flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-text-primary/50 text-text-primary px-2"
              />
              <button 
                suppressHydrationWarning
                type="submit" 
                disabled={!inputText.trim()}
                className="p-2 text-text-primary hover:text-accent-gold disabled:opacity-50 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        suppressHydrationWarning
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-text-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent-gold hover:scale-105 transition-all duration-300"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
