import React, { useState } from "react";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";

interface Medicine {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  expiry: string;
}

const Medicines: React.FC = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([
    {
      id: 1,
      name: "Paracetamol",
      category: "Tablet",
      price: 20,
      stock: 120,
      expiry: "2026-03-10",
    },
    {
      id: 2,
      name: "Amoxicillin",
      category: "Capsule",
      price: 35,
      stock: 40,
      expiry: "2025-11-05",
    },
    {
      id: 3,
      name: "Cough Syrup",
      category: "Syrup",
      price: 90,
      stock: 15,
      expiry: "2024-08-20",
    },
  ]);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");

  // Filter by name and category
  const filtered = medicines.filter(
    (med) =>
      med.name.toLowerCase().includes(search.toLowerCase()) &&
      (categoryFilter === "All Categories" || med.category === categoryFilter),
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow p-6 space-y-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-blue-700">Medicines</h1>
            <p className="text-gray-600 mt-1">
              Manage and monitor pharmacy medicines
            </p>
          </div>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 shadow">
            + Add Medicine
          </button>
        </div>

        {/* Search + Filter */}
        <div className="bg-white shadow rounded-lg p-4 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by medicine name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded px-4 py-2 w-full md:w-1/2"
          />

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border rounded px-4 py-2 w-full md:w-1/4"
          >
            <option>All Categories</option>
            <option>Tablet</option>
            <option>Capsule</option>
            <option>Syrup</option>
          </select>
        </div>

        {/* Medicines Table */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-blue-200">
          <table className="min-w-full text-sm">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">Stock</th>
                <th className="px-4 py-3 text-left">Expiry</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((med, index) => (
                <tr
                  key={med.id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-blue-50" : "bg-white"
                  } hover:bg-blue-100 transition duration-200`}
                >
                  <td className="px-4 py-3 font-semibold text-gray-800">
                    {med.name}
                  </td>
                  <td className="px-4 py-3">{med.category}</td>
                  <td className="px-4 py-3">Rs {med.price}</td>
                  <td className="px-4 py-3 font-medium">{med.stock}</td>
                  <td className="px-4 py-3">{med.expiry}</td>

                  {/* Stock Status */}
                  <td className="px-4 py-3">
                    {med.stock > 50 && (
                      <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                        In Stock
                      </span>
                    )}
                    {med.stock <= 50 && med.stock > 0 && (
                      <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                        Low Stock
                      </span>
                    )}
                    {med.stock === 0 && (
                      <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">
                        Out of Stock
                      </span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3 flex gap-3">
                    <button className="text-blue-700 hover:text-blue-900 font-medium">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800 font-medium">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="text-center py-6 text-gray-500">
              No medicines found.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Medicines;
