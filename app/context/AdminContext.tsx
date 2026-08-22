"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface AdminProduct {
  id: number;
  name: string;
  price: string;
  category: string;
  stock: number;
  status: string;
  image: string;
}

export interface AdminOrder {
  id: string;
  customer: string;
  date: string;
  total: string;
  status: string;
  items: number;
}

interface AdminContextType {
  products: AdminProduct[];
  orders: AdminOrder[];
  addProduct: (product: Omit<AdminProduct, "id">) => void;
  deleteProduct: (id: number) => void;
  toggleProductStatus: (id: number) => void;
  updateOrderStatus: (id: string, status: string) => void;
}

const initialProducts: AdminProduct[] = [
  { id: 1, name: "The Classic Elegance", price: "LKR 12,500", category: "Tote Bags", stock: 15, status: "Active", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=100" },
  { id: 2, name: "Midnight Clutch", price: "LKR 8,900", category: "Clutches", stock: 8, status: "Active", image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=100" },
  { id: 3, name: "Champagne Tote", price: "LKR 14,500", category: "Tote Bags", stock: 0, status: "Out of Stock", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=100" },
  { id: 4, name: "Onyx Crossbody", price: "LKR 11,000", category: "Crossbody", stock: 24, status: "Active", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=100" },
];

const initialOrders: AdminOrder[] = [
  { id: "#ORD-001", customer: "Sophia L.", date: "Today, 10:23 AM", total: "LKR 14,500.00", status: "Processing", items: 1 },
  { id: "#ORD-002", customer: "Emily R.", date: "Yesterday, 3:45 PM", total: "LKR 8,900.00", status: "Shipped", items: 1 },
  { id: "#ORD-003", customer: "Michael K.", date: "Aug 17, 2026", total: "LKR 23,500.00", status: "Delivered", items: 2 },
  { id: "#ORD-004", customer: "Isabella M.", date: "Aug 15, 2026", total: "LKR 12,500.00", status: "Delivered", items: 1 },
  { id: "#ORD-005", customer: "James W.", date: "Aug 14, 2026", total: "LKR 36,500.00", status: "Cancelled", items: 3 },
];

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<AdminProduct[]>(initialProducts);
  const [orders, setOrders] = useState<AdminOrder[]>(initialOrders);

  const addProduct = (product: Omit<AdminProduct, "id">) => {
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    setProducts([{ ...product, id: newId }, ...products]);
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const toggleProductStatus = (id: number) => {
    setProducts(products.map(p => {
      if (p.id === id) {
        return { ...p, status: p.status === "Active" ? "Out of Stock" : "Active" };
      }
      return p;
    }));
  };

  const updateOrderStatus = (id: string, status: string) => {
    setOrders(orders.map(o => {
      if (o.id === id) {
        return { ...o, status };
      }
      return o;
    }));
  };

  return (
    <AdminContext.Provider value={{ products, orders, addProduct, deleteProduct, toggleProductStatus, updateOrderStatus }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
}
