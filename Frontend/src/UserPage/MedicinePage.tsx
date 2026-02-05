import React, { useState } from "react";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";
import { useNavigate } from "react-router-dom";

interface Medicine {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  expiry: string;
}

const Medicines: React.FC = () => {
  const navigate = useNavigate();

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

  const filtered = medicines.filter(
    (med) =>
      med.name.toLowerCase().includes(search.toLowerCase()) &&
      (categoryFilter === "All Categories" || med.category === categoryFilter),
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-blue-700">Medicines</h1>
            <p className="text-gray-600">Manage pharmacy medicines</p>
          </div>

          <button
            onClick={() => navigate("/add-medicine")}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            + Add Medicine
          </button>
        </div>

        <div className="bg-white shadow rounded p-4 flex gap-4">
          <input
            placeholder="Search medicine..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded w-1/2"
          />

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border px-4 py-2 rounded"
          >
            <option>All Categories</option>
            <option>Tablet</option>
            <option>Capsule</option>
            <option>Syrup</option>
          </select>
        </div>

        <div className="bg-white shadow-xl rounded overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Stock</th>
                <th className="p-3 text-left">Expiry</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((med, i) => (
                <tr key={med.id} className={i % 2 === 0 ? "bg-blue-50" : ""}>
                  <td className="p-3">{med.name}</td>
                  <td className="p-3">{med.category}</td>
                  <td className="p-3">Rs {med.price}</td>
                  <td className="p-3">{med.stock}</td>
                  <td className="p-3">{med.expiry}</td>
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

export default Medicines;
