import React, { useState } from "react";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";

interface InventoryItem {
  id: number;
  name: string;
  category: string;
  stock: number;
  minStock: number;
  supplier: string;
  lastUpdated: string;
}

const Inventory: React.FC = () => {
  const [inventory] = useState<InventoryItem[]>([
    {
      id: 1,
      name: "Paracetamol",
      category: "Tablet",
      stock: 120,
      minStock: 50,
      supplier: "ABC Pharma",
      lastUpdated: "2026-01-10",
    },
    {
      id: 2,
      name: "Amoxicillin",
      category: "Capsule",
      stock: 25,
      minStock: 40,
      supplier: "LifeCare",
      lastUpdated: "2026-01-08",
    },
    {
      id: 3,
      name: "Cough Syrup",
      category: "Syrup",
      stock: 10,
      minStock: 30,
      supplier: "MedPlus",
      lastUpdated: "2026-01-07",
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow p-6 space-y-8">
        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold text-blue-700">Inventory</h1>
          <p className="text-gray-600">Monitor and control stock levels</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-blue-600">
            <p className="text-gray-500">Total Products</p>
            <h2 className="text-2xl font-bold">{inventory.length}</h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-green-600">
            <p className="text-gray-500">In Stock</p>
            <h2 className="text-2xl font-bold">
              {inventory.filter((i) => i.stock > i.minStock).length}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-red-600">
            <p className="text-gray-500">Low Stock</p>
            <h2 className="text-2xl font-bold">
              {inventory.filter((i) => i.stock <= i.minStock).length}
            </h2>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-blue-200">
          <table className="min-w-full text-sm">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Medicine</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Stock</th>
                <th className="px-4 py-3 text-left">Min Stock</th>
                <th className="px-4 py-3 text-left">Supplier</th>
                <th className="px-4 py-3 text-left">Last Updated</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {inventory.map((item, index) => (
                <tr
                  key={item.id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-blue-50" : "bg-white"
                  } hover:bg-blue-100 transition`}
                >
                  <td className="px-4 py-3 font-semibold">{item.name}</td>
                  <td className="px-4 py-3">{item.category}</td>
                  <td className="px-4 py-3 font-bold">{item.stock}</td>
                  <td className="px-4 py-3">{item.minStock}</td>
                  <td className="px-4 py-3">{item.supplier}</td>
                  <td className="px-4 py-3">{item.lastUpdated}</td>
                  <td className="px-4 py-3">
                    {item.stock > item.minStock ? (
                      <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs">
                        Healthy
                      </span>
                    ) : (
                      <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-xs">
                        Reorder
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Inventory;
