"use client";

import { Search, Eye } from "lucide-react";

const orders = [
  { id: "#ORD-001", customer: "Sophia L.", date: "Today, 10:23 AM", total: "$1,450.00", status: "Processing", items: 1 },
  { id: "#ORD-002", customer: "Emily R.", date: "Yesterday, 3:45 PM", total: "$890.00", status: "Shipped", items: 1 },
  { id: "#ORD-003", customer: "Michael K.", date: "Aug 17, 2026", total: "$2,350.00", status: "Delivered", items: 2 },
  { id: "#ORD-004", customer: "Isabella M.", date: "Aug 15, 2026", total: "$1,250.00", status: "Delivered", items: 1 },
  { id: "#ORD-005", customer: "James W.", date: "Aug 14, 2026", total: "$3,650.00", status: "Cancelled", items: 3 },
];

export default function AdminOrders() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <p className="text-gray-500 mt-1">View and manage customer orders and fulfillments.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search orders..." 
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] w-64"
            />
          </div>
          <div className="flex gap-2">
            <select className="border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-[#D4AF37]">
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
              <tr className="border-b border-gray-200 bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
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
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.items}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.total}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === "Processing" ? "bg-blue-100 text-blue-800" : 
                      order.status === "Shipped" ? "bg-purple-100 text-purple-800" :
                      order.status === "Delivered" ? "bg-green-100 text-green-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[#4A0E4E] hover:text-[#D4AF37] text-sm font-medium flex items-center justify-end gap-1 ml-auto transition-colors">
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
