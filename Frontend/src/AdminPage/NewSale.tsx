import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

interface Item {
  name: string;
  price: number;
  quantity: number;
}

const NewSale: React.FC = () => {
  const [customer, setCustomer] = useState("");
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
      [field]: field === "name" ? value : Number(value),
    };
    setItems(updated);
  };

  const addItem = () => {
    setItems([...items, { name: "", price: 0, quantity: 1 }]);
  };

  const removeItem = (index: number) => {
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-gray-200 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
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
          <div className="transition-all duration-500 hover:scale-[1.01]">
            <label className="block text-sm font-semibold mb-2">
              Customer Name
            </label>
            <input
              type="text"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              required
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none shadow-sm"
              placeholder="Enter customer name"
            />
          </div>

          {/* Customer Email */}
          <div className="transition-all duration-500 hover:scale-[1.01]">
            <label className="block text-sm font-semibold mb-2">
              Customer Email
            </label>
            <input
              type="email"
              placeholder="Enter customer email"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none shadow-sm"
            />
          </div>

          {/* Items Table */}
          <div className="transition-all duration-500 hover:scale-[1.01]">
            <h2 className="text-xl font-semibold mb-4">Invoice Items</h2>

            <div className="overflow-x-auto">
              <table className="w-full border rounded-xl overflow-hidden">
                <thead className="bg-gray-100 text-gray-600 text-sm">
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
                    <tr
                      key={index}
                      className="border-t transition-all duration-300 hover:bg-gray-50 hover:scale-[1.01]"
                    >
                      <td className="p-3">
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) =>
                            handleItemChange(index, "name", e.target.value)
                          }
                          required
                          className="w-full p-2 border rounded-lg"
                        />
                      </td>

                      <td className="p-3">
                        <input
                          type="number"
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
                          onClick={() => removeItem(index)}
                          className="text-red-500 hover:text-red-700 transition"
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
              className="mt-4 flex items-center gap-2 text-green-600 font-medium transition-all duration-300 hover:scale-105 hover:text-green-800"
            >
              <Plus size={18} /> Add Item
            </button>
          </div>

          {/* Summary Section */}
          <div className="bg-gray-50 rounded-2xl p-6 space-y-3 shadow-inner transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
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

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white py-3 rounded-xl text-lg font-semibold shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl"
          >
            Generate Invoice
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewSale;
