import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-text-primary text-[#E5D3B3] pt-24 pb-12 rounded-t-[3rem] mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-4xl font-serif font-bold text-white mb-6">Ishu&apos;s Collections</h3>
            <p className="text-[#E5D3B3]/70 mb-10 max-w-md text-lg font-light leading-relaxed">
              Elevating everyday style with our meticulously crafted luxury handbags. Where timeless elegance meets modern sophistication.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-[#E5D3B3]/30 flex items-center justify-center hover:bg-accent-gold hover:border-accent-gold hover:text-text-primary transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-[#E5D3B3]/30 flex items-center justify-center hover:bg-accent-gold hover:border-accent-gold hover:text-text-primary transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-[#E5D3B3]/30 flex items-center justify-center hover:bg-accent-gold hover:border-accent-gold hover:text-text-primary transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-8 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-5 text-[#E5D3B3]/70 font-light">
              <li><Link href="/shop" className="hover:text-white hover:translate-x-1 transition-all inline-block">New Arrivals</Link></li>
              <li><Link href="/shop" className="hover:text-white hover:translate-x-1 transition-all inline-block">Best Sellers</Link></li>
              <li><Link href="/collections" className="hover:text-white hover:translate-x-1 transition-all inline-block">Gift Guide</Link></li>
              <li><Link href="/track-order" className="hover:text-white hover:translate-x-1 transition-all inline-block">Track Order</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-8 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-[#E5D3B3]/70 mb-6 text-sm font-light leading-relaxed">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex border-b border-[#E5D3B3]/30 pb-3 focus-within:border-accent-gold transition-colors">
              <input 
                suppressHydrationWarning
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-none w-full text-white placeholder:text-[#E5D3B3]/40 text-sm font-light"
              />
              <button suppressHydrationWarning className="text-accent-gold hover:text-white font-medium uppercase tracking-wider text-xs transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#E5D3B3]/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#E5D3B3]/50 gap-6 font-light uppercase tracking-widest">
          <p>&copy; 2026 Ishu&apos;s Collections. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
