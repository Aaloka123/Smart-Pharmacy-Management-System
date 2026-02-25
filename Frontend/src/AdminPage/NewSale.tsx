import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

interface Item {
  name: string;
  price: number;
  quantity: number;
}

const medicineOptions = [
  "Paracetamol",
  "Amoxicillin",
  "Ibuprofen",
  "Cough Syrup",
  "Vitamin C",
];

const NewSale: React.FC = () => {
  const [customer, setCustomer] = useState("");
  const [email, setEmail] = useState("");
  const [items, setItems] = useState<Item[]>([
    { name: "", price: 0, quantity: 1 },
  ]);

  const invoiceNumber = `INV-${Math.floor(1000 + Math.random() * 9000)}`;
  const today = new Date().toLocaleDateString();

  const handleItemChange = (
    index: number,
    field: keyof Item,
    value: string | number,
  ) => {
    const updated = [...items];

    updated[index] = {
      ...updated[index],
      [field]: field === "name" ? value : Math.max(0, Number(value)), // prevent negative values
    };

    setItems(updated);
  };

  const addItem = () => {
    setItems([...items, { name: "", price: 0, quantity: 1 }]);
  };

  const removeItem = (index: number) => {
    if (items.length === 1) return; // prevent removing last row
    setItems(items.filter((_, i) => i !== index));
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.13;
  const total = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Invoice Created Successfully!");

    // Reset form
    setCustomer("");
    setEmail("");
    setItems([{ name: "", price: 0, quantity: 1 }]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-gray-200 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-8">
          <h1 className="text-3xl font-bold">New Sales Invoice</h1>
          <div className="flex justify-between mt-4 text-sm opacity-90">
            <span>Invoice No: {invoiceNumber}</span>
            <span>Date: {today}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Customer Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Customer Name
            </label>
            <input
              type="text"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              required
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Enter customer name"
            />
          </div>

          {/* Customer Email */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Customer Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter customer email"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Items */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Invoice Items</h2>

            <div className="overflow-x-auto">
              <table className="w-full border rounded-xl overflow-hidden">
                <thead className="bg-gray-100 text-sm">
                  <tr>
                    <th className="p-3 text-left">Medicine</th>
                    <th className="p-3 text-left">Price</th>
                    <th className="p-3 text-left">Qty</th>
                    <th className="p-3 text-left">Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index} className="border-t hover:bg-gray-50">
                      <td className="p-3">
                        <select
                          value={item.name}
                          onChange={(e) =>
                            handleItemChange(index, "name", e.target.value)
                          }
                          required
                          className="w-full p-2 border rounded-lg"
                        >
                          <option value="">Select Medicine</option>
                          {medicineOptions.map((med) => (
                            <option key={med} value={med}>
                              {med}
                            </option>
                          ))}
                        </select>
                      </td>

                      <td className="p-3">
                        <input
                          type="number"
                          min="0"
                          value={item.price}
                          onChange={(e) =>
                            handleItemChange(index, "price", e.target.value)
                          }
                          required
                          className="w-full p-2 border rounded-lg"
                        />
                      </td>

                      <td className="p-3">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            handleItemChange(index, "quantity", e.target.value)
                          }
                          required
                          className="w-full p-2 border rounded-lg"
                        />
                      </td>

                      <td className="p-3 font-semibold">
                        Rs {(item.price * item.quantity).toFixed(2)}
                      </td>

                      <td className="p-3 text-center">
                        <button
                          type="button"
                          disabled={items.length === 1}
                          onClick={() => removeItem(index)}
                          className={`${
                            items.length === 1
                              ? "text-gray-300 cursor-not-allowed"
                              : "text-red-500 hover:text-red-700"
                          } transition`}
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              type="button"
              onClick={addItem}
              className="mt-4 flex items-center gap-2 text-green-600 font-medium hover:text-green-800 transition"
            >
              <Plus size={18} /> Add Item
            </button>
          </div>

          {/* Summary */}
          <div className="bg-gray-50 rounded-2xl p-6 space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>VAT (13%)</span>
              <span>Rs {tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold text-green-700 border-t pt-3">
              <span>Grand Total</span>
              <span>Rs {total.toFixed(2)}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white py-3 rounded-xl text-lg font-semibold hover:scale-105 transition"
          >
            Generate Invoice
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewSale;
