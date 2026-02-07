import React, { useState } from "react";
import { Trash2, Plus, Minus, Search, ShoppingCart, Check } from "lucide-react";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";

interface Medicine {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
}

const mockMedicines: Medicine[] = [
  { id: 1, name: "Paracetamol", price: 20, stock: 120, category: "Pain" },
  { id: 2, name: "Amoxicillin", price: 50, stock: 60, category: "Antibiotic" },
  { id: 3, name: "Vitamin C", price: 30, stock: 90, category: "Supplement" },
  { id: 4, name: "Ibuprofen", price: 40, stock: 45, category: "Pain" },
  { id: 5, name: "Cough Syrup", price: 70, stock: 0, category: "Cold" },
];

const Sales: React.FC = () => {
  const [cart, setCart] = useState<(Medicine & { qty: number })[]>([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [addedId, setAddedId] = useState<number | null>(null);

  const categories = ["All", "Pain", "Antibiotic", "Supplement", "Cold"];

  const filtered = mockMedicines.filter(
    (m) =>
      (activeCategory === "All" || m.category === activeCategory) &&
      m.name.toLowerCase().includes(search.toLowerCase()),
  );

  const addToCart = (med: Medicine) => {
    if (med.stock === 0) return;

    setCart((prev) => {
      const found = prev.find((i) => i.id === med.id);
      if (found) {
        return prev.map((i) =>
          i.id === med.id ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [...prev, { ...med, qty: 1 }];
    });

    setAddedId(med.id);
    setTimeout(() => setAddedId(null), 800);
  };

  const updateQty = (id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0),
    );
  };

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Products */}
        <div className="lg:col-span-3 space-y-4">
          {/* Search */}
          <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
            <Search size={18} className="text-gray-400" />
            <input
              placeholder="Search medicine..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1 rounded-full text-sm border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow"
                    : "bg-white hover:bg-gray-100 hover:scale-105"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((med) => (
              <div
                key={med.id}
                className="bg-white rounded-2xl shadow hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 p-5 flex flex-col justify-between relative"
              >
                {/* Stock Badge */}
                {med.stock === 0 && (
                  <span className="absolute top-3 right-3 text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                    Out of Stock
                  </span>
                )}

                <div>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {med.category}
                  </span>

                  <h3 className="text-lg font-semibold mt-2">{med.name}</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Stock: {med.stock}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-green-600">
                    Rs {med.price}
                  </span>

                  <button
                    disabled={med.stock === 0}
                    onClick={() => addToCart(med)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      med.stock === 0
                        ? "bg-gray-300 cursor-not-allowed"
                        : addedId === med.id
                          ? "bg-green-600 text-white"
                          : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
                    }`}
                  >
                    {addedId === med.id ? (
                      <>
                        <Check size={16} /> Added
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={16} /> Add
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart */}
        <div className="bg-white rounded-2xl shadow-xl p-5 flex flex-col sticky top-24 h-fit">
          <h2 className="text-xl font-semibold mb-4">Cart</h2>

          {cart.length === 0 ? (
            <p className="text-gray-400 text-center">No items selected</p>
          ) : (
            <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center hover:bg-gray-50 p-2 rounded transition"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Rs {item.price}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="p-1 bg-gray-200 rounded hover:bg-gray-300 transition hover:scale-110"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="font-semibold">{item.qty}</span>

                    <button
                      onClick={() => updateQty(item.id, 1)}
                      className="p-1 bg-gray-200 rounded hover:bg-gray-300 transition hover:scale-110"
                    >
                      <Plus size={14} />
                    </button>

                    <button
                      onClick={() => updateQty(item.id, -item.qty)}
                      className="text-red-500 hover:scale-125 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Summary */}
          <div className="border-t mt-4 pt-4">
            <div className="flex justify-between font-semibold mb-3">
              <span>Total</span>
              <span className="text-green-600">Rs {total}</span>
            </div>

            <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 hover:scale-105 transition-all">
              Complete Sale
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sales;
