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
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Invoice Created Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-8">
        <h1 className="text-3xl font-bold mb-6">Create New Invoice</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
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

          {/* Items Table */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Invoice Items</h2>

            <div className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center"
                >
                  <input
                    type="text"
                    placeholder="Medicine Name"
                    value={item.name}
                    onChange={(e) =>
                      handleItemChange(index, "name", e.target.value)
                    }
                    required
                    className="p-3 border rounded-xl"
                  />

                  <input
                    type="number"
                    placeholder="Price"
                    value={item.price}
                    onChange={(e) =>
                      handleItemChange(index, "price", e.target.value)
                    }
                    required
                    className="p-3 border rounded-xl"
                  />

                  <input
                    type="number"
                    placeholder="Quantity"
                    value={item.quantity}
                    onChange={(e) =>
                      handleItemChange(index, "quantity", e.target.value)
                    }
                    required
                    className="p-3 border rounded-xl"
                  />

                  <div className="font-semibold">
                    Rs {item.price * item.quantity}
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 />
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addItem}
              className="mt-4 flex items-center gap-2 text-green-600 hover:text-green-800"
            >
              <Plus size={18} /> Add Item
            </button>
          </div>

          {/* Total Section */}
          <div className="flex justify-between items-center border-t pt-4">
            <h2 className="text-xl font-bold">Total:</h2>
            <h2 className="text-2xl font-bold text-green-600">
              Rs {total.toFixed(2)}
            </h2>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition text-lg font-semibold"
          >
            Generate Invoice
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewSale;
