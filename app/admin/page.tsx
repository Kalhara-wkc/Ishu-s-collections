"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react";

const stats = [
  { name: "Total Revenue", value: "$45,231.89", change: "+20.1%", icon: DollarSign },
  { name: "Orders", value: "+350", change: "+15.2%", icon: ShoppingBag },
  { name: "Active Customers", value: "+2,340", change: "+12.4%", icon: Users },
  { name: "Conversion Rate", value: "3.24%", change: "+4.1%", icon: TrendingUp },
];

export default function AdminDashboard() {
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
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">{stat.name}</p>
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                </div>
                <div className="p-2 bg-[#F4F0F7] rounded-lg">
                  <Icon className="w-5 h-5 text-[#4A0E4E]" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-emerald-500 font-medium">{stat.change}</span>
                <span className="text-gray-400 ml-2">from last month</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Activity Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Revenue Overview</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center border border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">Chart visualization will appear here</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Sales</h2>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600">
                  {`C${i}`}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Customer {i}</p>
                  <p className="text-xs text-gray-500">customer{i}@example.com</p>
                </div>
                <div className="text-sm font-bold text-gray-900">
                  +${(Math.random() * 500 + 100).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
