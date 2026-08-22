"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Search, Edit2, Trash2 } from "lucide-react";

const initialProducts = [
  { id: 1, name: "The Classic Elegance", price: "LKR 1,250", category: "Tote Bags", stock: 15, status: "Active", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=100" },
  { id: 2, name: "Midnight Clutch", price: "LKR 890", category: "Clutches", stock: 8, status: "Active", image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=100" },
  { id: 3, name: "Champagne Tote", price: "LKR 1,450", category: "Tote Bags", stock: 0, status: "Out of Stock", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=100" },
  { id: 4, name: "Onyx Crossbody", price: "LKR 1,100", category: "Crossbody", stock: 24, status: "Active", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=100" },
];

export default function AdminProducts() {
  const [products] = useState(initialProducts);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-500 mt-1">Manage your store's inventory and product details.</p>
        </div>
        <button className="bg-text-primary hover:bg-accent-gold text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors text-sm font-medium">
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      <div className="bg-surface border border-text-primary/20 rounded-xl shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-text-primary/20 flex justify-between items-center bg-surface/50">
          <div className="relative">
            <Search className="w-4 h-4 text-text-primary/50 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="pl-9 pr-4 py-2 border border-text-primary/20 rounded-md text-sm focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-[#D4AF37] w-64"
            />
          </div>
          <div className="flex gap-2">
            <select className="border border-text-primary/20 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-accent-gold">
              <option>All Categories</option>
              <option>Tote Bags</option>
              <option>Clutches</option>
              <option>Crossbody</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-text-primary/20 bg-surface text-xs uppercase tracking-wider text-gray-500">
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Price</th>
                <th className="px-6 py-4 font-medium">Stock</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-surface transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-md overflow-hidden border border-text-primary/20 bg-gray-100">
                        <Image src={product.image} alt={product.name} fill className="object-cover" />
                      </div>
                      <span className="font-medium text-gray-900">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{product.price}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.stock}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      product.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-text-primary/50 hover:text-accent-gold transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="text-text-primary/50 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
