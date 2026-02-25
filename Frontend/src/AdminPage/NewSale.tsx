import React, { useState, useMemo } from "react";
import { Plus, Trash2 } from "lucide-react";

interface Item {
  name: string;
  price: number;
  quantity: number;
}

const medicineData: { name: string; price: number }[] = [
  { name: "Paracetamol", price: 20 },
  { name: "Amoxicillin", price: 35 },
  { name: "Ibuprofen", price: 25 },
  { name: "Cough Syrup", price: 80 },
  { name: "Vitamin C", price: 15 },
];

const NewSale: React.FC = () => {
  const [customer, setCustomer] = useState("");
  const [email, setEmail] = useState("");
  const [items, setItems] = useState<Item[]>([
    { name: "", price: 0, quantity: 1 },
  ]);

  // Stable invoice number
  const invoiceNumber = useMemo(
    () => `INV-${Math.floor(1000 + Math.random() * 9000)}`,
    [],
  );

  const today = new Date().toLocaleDateString();

  const handleItemChange = (
    index: number,
    field: keyof Item,
    value: string | number,
  ) => {
    const updated = [...items];

    if (field === "name") {
      const selectedMed = medicineData.find((med) => med.name === value);
      updated[index] = {
        ...updated[index],
        name: value as string,
        price: selectedMed ? selectedMed.price : 0, // auto-fill price
      };
    } else {
      updated[index] = {
        ...updated[index],
        [field]: Math.max(0, Number(value)),
      };
    }

    setItems(updated);
  };

  const addItem = () => {
    setItems([...items, { name: "", price: 0, quantity: 1 }]);
  };

  const removeItem = (index: number) => {
    if (items.length === 1) return;
    setItems(items.filter((_, i) => i !== index));
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const tax = subtotal * 0.13;
  const total = subtotal + tax;

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const clearInvoice = () => {
    setCustomer("");
    setEmail("");
    setItems([{ name: "", price: 0, quantity: 1 }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Invoice Created Successfully!");
    clearInvoice();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-gray-200 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-8">
          <h1 className="text-3xl font-bold">New Sales Invoice</h1>
          <div className="flex justify-between mt-4 text-sm opacity-90">
            <span>Invoice No: {invoiceNumber}</span>
            <span>Date: {today}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Customer Info */}
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

          <div>
            <label className="block text-sm font-semibold mb-2">
              Customer Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Enter customer email"
            />
          </div>

          {/* Items */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Invoice Items ({totalItems} items)
            </h2>

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
                        {medicineData.map((med) => (
                          <option key={med.name} value={med.name}>
                            {med.name}
                          </option>
                        ))}
                      </select>
                    </td>

                    <td className="p-3">
                      <input
                        type="number"
                        value={item.price}
                        readOnly
                        className="w-full p-2 border rounded-lg bg-gray-100"
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
                        className="text-red-500 hover:text-red-700 disabled:text-gray-300"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

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

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-green-600 to-emerald-700 text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Generate Invoice
            </button>

            <button
              type="button"
              onClick={clearInvoice}
              className="flex-1 bg-gray-300 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-400 transition"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewSale;
