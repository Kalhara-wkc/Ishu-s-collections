"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingBag, Package, Users, Settings, LogOut } from "lucide-react";
import Image from "next/image";

const menuItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { name: "Customers", href: "#", icon: Users },
  { name: "Settings", href: "#", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#4A0E4E] text-white flex flex-col h-screen fixed left-0 top-0">
      {/* Brand */}
      <div className="h-20 flex items-center gap-3 px-6 border-b border-white/10">
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#D4AF37]/50">
          <Image src="/logo.jpeg" alt="Logo" fill className="object-cover" />
        </div>
        <span className="font-serif font-bold text-lg tracking-wider text-[#E5D3B3]">
          Admin Panel
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-8 px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                isActive 
                  ? "bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30" 
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium text-sm tracking-wide">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/10">
        <Link 
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-md text-white/70 hover:bg-white/5 hover:text-white transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium text-sm tracking-wide">Exit to Store</span>
        </Link>
      </div>
    </aside>
  );
}
