import React, { useState } from "react";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";
import { Package, AlertTriangle, Search } from "lucide-react";

/* ---------- Stock Card ---------- */

const StockCard = ({
  title,
  value,
  gradient,
  icon,
}: {
  title: string;
  value: string;
  gradient: string;
  icon: React.ReactNode;
}) => (
  <div className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-xl overflow-hidden transition-all duration-500 hover:scale-[1.06] hover:-translate-y-3 hover:shadow-2xl hover:ring-2 hover:ring-green-400/40">
    {/* Glow Effect */}
    <div
      className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${gradient} opacity-20 rounded-full blur-2xl transition-all duration-500 group-hover:opacity-40`}
    />

    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className="text-3xl font-bold mt-1">{value}</h2>

    <div
      className={`mt-5 w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-r ${gradient} transition-all duration-500 group-hover:rotate-12 group-hover:scale-125 shadow-lg`}
    >
      {icon}
    </div>
  </div>
);

/* ---------- Main Component ---------- */

const ManagerInventory: React.FC = () => {
  const [search, setSearch] = useState("");

  const medicines = [
    { name: "Paracetamol", stock: 120, price: "Rs 50", status: "In Stock" },
    { name: "Amoxicillin", stock: 25, price: "Rs 150", status: "Low Stock" },
    { name: "Vitamin C", stock: 200, price: "Rs 30", status: "In Stock" },
    { name: "Insulin", stock: 5, price: "Rs 500", status: "Critical" },
  ];

  const filtered = medicines.filter((med) =>
    med.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full p-6 space-y-12">
        {/* 🔥 Hero Section */}
        <div className="relative bg-gradient-to-r from-green-700 to-emerald-700 rounded-3xl p-10 text-white shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl hover:brightness-110">
          <div className="absolute right-10 top-10 opacity-10 text-[140px] transition-transform duration-700 hover:rotate-6">
            <Package />
          </div>

          <div className="relative z-10">
            <h1 className="text-4xl font-bold tracking-wide">
              Inventory Management
            </h1>
            <p className="opacity-90 mt-3 text-lg">
              Monitor stock levels and manage medicines efficiently.
            </p>
          </div>
        </div>

        {/* 📊 Stock Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <StockCard
            title="Total Medicines"
            value="245"
            gradient="from-blue-500 to-cyan-600"
            icon={<Package size={28} />}
          />
          <StockCard
            title="Low Stock Items"
            value="18"
            gradient="from-yellow-500 to-orange-500"
            icon={<AlertTriangle size={28} />}
          />
          <StockCard
            title="Out of Stock"
            value="3"
            gradient="from-red-500 to-rose-600"
            icon={<AlertTriangle size={28} />}
          />
        </div>

        {/* 📋 Inventory Table */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 transition-all duration-500 hover:shadow-3xl hover:-translate-y-1">
          {/* Header + Search */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <h2 className="text-2xl font-semibold tracking-wide">
              Medicine Inventory
            </h2>

            <div className="flex items-center gap-2 border rounded-xl px-4 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-green-500 hover:shadow-md hover:border-green-400">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search medicine..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="outline-none bg-transparent"
              />
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 bg-gray-50">
                  <th className="p-4 text-left">Medicine</th>
                  <th className="p-4 text-center">Stock</th>
                  <th className="p-4 text-right">Price</th>
                  <th className="p-4 text-center">Status</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((med, i) => (
                  <tr
                    key={i}
                    className="even:bg-gray-50 hover:bg-green-50 hover:scale-[1.01] hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <td className="p-4 font-medium">{med.name}</td>
                    <td className="p-4 text-center">{med.stock}</td>
                    <td className="p-4 text-right font-semibold">
                      {med.price}
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md ${
                          med.status === "In Stock"
                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                            : med.status === "Low Stock"
                              ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                              : "bg-red-100 text-red-700 hover:bg-red-200"
                        }`}
                      >
                        {med.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ManagerInventory;
