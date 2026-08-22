"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Search, Edit2, Trash2, X } from "lucide-react";
import { useAdmin } from "../../context/AdminContext";

export default function AdminProducts() {
  const { products, addProduct, deleteProduct, toggleProductStatus } = useAdmin();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Tote Bags");
  const [stock, setStock] = useState("");
  
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct({
      name,
      price: `LKR ${parseFloat(price).toLocaleString()}`,
      category,
      stock: parseInt(stock),
      status: parseInt(stock) > 0 ? "Active" : "Out of Stock",
      image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=100" // Placeholder
    });
    setIsModalOpen(false);
    setName("");
    setPrice("");
    setStock("");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-500 mt-1">Manage your store's inventory and product details.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="bg-text-primary hover:bg-accent-gold text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors text-sm font-medium">
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
                  <td className="px-6 py-4 cursor-pointer" onClick={() => toggleProductStatus(product.id)}>
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
                      <button onClick={() => deleteProduct(product.id)} className="text-text-primary/50 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {products.length === 0 && (
            <div className="text-center py-12 text-gray-500">No products found.</div>
          )}
        </div>
      </div>

      {/* Add Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-surface w-full max-w-md rounded-xl p-6 relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold mb-6">Add New Product</h2>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input required type="text" value={name} onChange={e => setName(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 focus:ring-accent-gold focus:border-accent-gold outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price (LKR)</label>
                <input required type="number" value={price} onChange={e => setPrice(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 focus:ring-accent-gold focus:border-accent-gold outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select value={category} onChange={e => setCategory(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 focus:ring-accent-gold focus:border-accent-gold outline-none">
                  <option>Tote Bags</option>
                  <option>Clutches</option>
                  <option>Crossbody</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
                <input required type="number" value={stock} onChange={e => setStock(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 focus:ring-accent-gold focus:border-accent-gold outline-none" />
              </div>
              <button type="submit" className="w-full bg-text-primary text-white py-2 rounded-md hover:bg-accent-gold transition-colors mt-4">
                Save Product
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
