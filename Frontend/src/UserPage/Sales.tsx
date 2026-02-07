import React, { useState } from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";

interface Medicine {
  id: number;
  name: string;
  price: number;
  stock: number;
}

const mockMedicines: Medicine[] = [
  { id: 1, name: "Paracetamol", price: 20, stock: 120 },
  { id: 2, name: "Amoxicillin", price: 50, stock: 60 },
  { id: 3, name: "Vitamin C", price: 30, stock: 90 },
  { id: 4, name: "Ibuprofen", price: 40, stock: 45 },
];

const Sales: React.FC = () => {
  const [cart, setCart] = useState<(Medicine & { qty: number })[]>([]);

  const addToCart = (med: Medicine) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === med.id);
      if (found) {
        return prev.map((i) =>
          i.id === med.id ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [...prev, { ...med, qty: 1 }];
    });
  };

  const updateQty = (id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0),
    );
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product List */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Available Medicines</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mockMedicines.map((med) => (
              <div
                key={med.id}
                className="border rounded-xl p-4 flex justify-between items-center hover:shadow transition"
              >
                <div>
                  <h3 className="font-semibold">{med.name}</h3>
                  <p className="text-sm text-gray-500">
                    Rs {med.price} | Stock: {med.stock}
                  </p>
                </div>
                <button
                  onClick={() => addToCart(med)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Cart</h2>

          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">No items added</p>
          ) : (
            <div className="space-y-4 flex-grow">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Rs {item.price} × {item.qty}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="p-1 bg-gray-200 rounded"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="font-semibold">{item.qty}</span>

                    <button
                      onClick={() => updateQty(item.id, 1)}
                      className="p-1 bg-gray-200 rounded"
                    >
                      <Plus size={16} />
                    </button>

                    <button
                      onClick={() => updateQty(item.id, -item.qty)}
                      className="text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Summary */}
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between mb-2">
              <span>Total</span>
              <span className="font-bold">Rs {total}</span>
            </div>

            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
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
