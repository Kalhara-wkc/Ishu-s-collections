"use client";

import { Search, Eye } from "lucide-react";
import { useAdmin } from "../../context/AdminContext";

export default function AdminOrders() {
  const { orders, updateOrderStatus } = useAdmin();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <p className="text-gray-500 mt-1">View and manage customer orders and fulfillments.</p>
      </div>

      <div className="bg-surface border border-text-primary/20 rounded-xl shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-text-primary/20 flex justify-between items-center bg-surface/50">
          <div className="relative">
            <Search className="w-4 h-4 text-text-primary/50 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search orders..." 
              className="pl-9 pr-4 py-2 border border-text-primary/20 rounded-md text-sm focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-[#D4AF37] w-64"
            />
          </div>
          <div className="flex gap-2">
            <select className="border border-text-primary/20 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-accent-gold">
              <option>All Statuses</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-text-primary/20 bg-surface text-xs uppercase tracking-wider text-gray-500">
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Items</th>
                <th className="px-6 py-4 font-medium">Total</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-surface transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.items}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.total}</td>
                  <td className="px-6 py-4">
                    <select
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent-gold cursor-pointer border-transparent ${
                        order.status === "Processing" ? "bg-blue-100 text-blue-800" : 
                        order.status === "Shipped" ? "bg-purple-100 text-purple-800" :
                        order.status === "Delivered" ? "bg-green-100 text-green-800" :
                        "bg-red-100 text-red-800"
                      }`}
                    >
                      <option value="Processing" className="bg-white text-gray-900">Processing</option>
                      <option value="Shipped" className="bg-white text-gray-900">Shipped</option>
                      <option value="Delivered" className="bg-white text-gray-900">Delivered</option>
                      <option value="Cancelled" className="bg-white text-gray-900">Cancelled</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-text-primary hover:text-accent-gold text-sm font-medium flex items-center justify-end gap-1 ml-auto transition-colors">
                      <Eye className="w-4 h-4" /> View
                    </button>
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
