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

  const [search, setSearch] = useState("");

  const filtered = inventory.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-blue-700">Inventory</h1>
            <p className="text-gray-600">Track stock and reorder levels</p>
          </div>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 shadow">
            + Add Stock
          </button>
        </div>

        {/* Search */}
        <div className="bg-white shadow rounded-lg p-4">
          <input
            type="text"
            placeholder="Search medicine..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded px-4 py-2 w-full md:w-1/3"
          />
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <Card title="Total Products" value={inventory.length} color="blue" />
          <Card
            title="Healthy Stock"
            value={inventory.filter((i) => i.stock > i.minStock).length}
            color="green"
          />
          <Card
            title="Low Stock"
            value={inventory.filter((i) => i.stock <= i.minStock).length}
            color="red"
          />
          <Card title="Suppliers" value={3} color="purple" />
        </div>

        {/* Table */}
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border">
          <table className="min-w-full text-sm">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Medicine</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Stock</th>
                <th className="px-4 py-3 text-left">Progress</th>
                <th className="px-4 py-3 text-left">Supplier</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((item, index) => {
                const percent = Math.min(
                  100,
                  Math.round((item.stock / item.minStock) * 100),
                );

                return (
                  <tr
                    key={item.id}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-blue-50" : "bg-white"
                    } hover:bg-blue-100`}
                  >
                    <td className="px-4 py-3 font-semibold">{item.name}</td>
                    <td className="px-4 py-3">{item.category}</td>
                    <td className="px-4 py-3 font-bold">{item.stock}</td>

                    {/* Progress Bar */}
                    <td className="px-4 py-3">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            percent > 100
                              ? "bg-green-600"
                              : percent > 70
                                ? "bg-green-500"
                                : percent > 40
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                          }`}
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                    </td>

                    <td className="px-4 py-3">{item.supplier}</td>

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

                    <td className="px-4 py-3">
                      <button className="text-blue-700 hover:underline">
                        Update
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="text-center py-6 text-gray-500">
              No inventory found.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

/* Reusable KPI Card */
const Card = ({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: string;
}) => (
  <div
    className={`bg-white shadow rounded-xl p-5 border-l-4 border-${color}-600`}
  >
    <p className="text-gray-500">{title}</p>
    <h2 className="text-2xl font-bold">{value}</h2>
  </div>
);

export default Inventory;
