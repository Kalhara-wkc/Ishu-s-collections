"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Users, DollarSign, TrendingUp, Package, ArrowUpRight } from "lucide-react";
import { useAdmin } from "../context/AdminContext";

export default function AdminDashboard() {
  const { products, orders } = useAdmin();

  const totalRevenueLKR = orders
    .filter(o => o.status === "Delivered" || o.status === "Shipped" || o.status === "Processing")
    .reduce((sum, o) => sum + parseFloat(o.total.replace(/[^0-9.-]+/g, "")), 0);

  const activeProducts = products.filter(p => p.status === "Active").length;

  const stats = [
    { name: "Total Revenue", value: `LKR ${totalRevenueLKR.toLocaleString()}`, change: "+20.1%", icon: DollarSign },
    { name: "Total Orders", value: orders.length.toString(), change: "+12.5%", icon: ShoppingBag },
    { name: "Active Products", value: activeProducts.toString(), change: "+4.2%", icon: Package },
    { name: "Total Customers", value: new Set(orders.map(o => o.customer)).size.toString(), change: "+10.3%", icon: Users },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Welcome back. Here's what's happening with your store today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div 
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface p-6 rounded-xl border border-text-primary/10 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">{stat.name}</p>
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                </div>
                <div className="p-2 bg-bg-primary rounded-lg">
                  <Icon className="w-5 h-5 text-text-primary" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-emerald-500 font-medium">{stat.change}</span>
                <span className="text-text-primary/50 ml-2">from last month</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Activity Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-surface rounded-xl border border-text-primary/10 shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Revenue Overview</h2>
          <div className="h-64 bg-surface rounded-lg flex items-center justify-center border border-dashed border-text-primary/20">
            <p className="text-text-primary/50 font-medium">Chart visualization will appear here</p>
          </div>
        </div>
        
        <div className="bg-surface rounded-xl border border-text-primary/10 shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Sales</h2>
          <div className="space-y-6">
            {orders.slice(0, 4).map((order) => (
              <div key={order.id} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600">
                  {order.customer.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{order.customer}</p>
                  <p className="text-xs text-gray-500">{order.date}</p>
                </div>
                <div className="text-sm font-bold text-gray-900">
                  +{order.total}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
