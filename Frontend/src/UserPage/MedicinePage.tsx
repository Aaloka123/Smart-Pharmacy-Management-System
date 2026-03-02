import React, { useState, useMemo } from "react";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";
import { useNavigate } from "react-router-dom";
import { Trash2, AlertTriangle, Package } from "lucide-react";

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

  const today = new Date();

  const filtered = useMemo(() => {
    return medicines.filter(
      (med) =>
        med.name.toLowerCase().includes(search.toLowerCase()) &&
        (categoryFilter === "All Categories" ||
          med.category === categoryFilter),
    );
  }, [medicines, search, categoryFilter]);

  const totalStock = medicines.reduce((sum, med) => sum + med.stock, 0);

  const deleteMedicine = (id: number) => {
    if (window.confirm("Are you sure you want to delete this medicine?")) {
      setMedicines(medicines.filter((med) => med.id !== id));
    }
  };

  const getExpiryStatus = (expiry: string) => {
    const expiryDate = new Date(expiry);
    const diffDays =
      (expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);

    if (diffDays < 0) return "Expired";
    if (diffDays <= 30) return "Expiring Soon";
    return "Valid";
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow p-6 space-y-6">
        {/* Title Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-blue-700">
              Medicines Inventory
            </h1>
            <p className="text-gray-600">
              Manage pharmacy medicines efficiently
            </p>
          </div>

          <button
            onClick={() => navigate("/add-medicine")}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            + Add Medicine
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-5 rounded-xl shadow flex items-center gap-4">
            <Package size={40} />
            <div>
              <p className="text-sm opacity-90">Total Medicines</p>
              <h2 className="text-2xl font-bold">{medicines.length}</h2>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-5 rounded-xl shadow flex items-center gap-4">
            <Package size={40} />
            <div>
              <p className="text-sm opacity-90">Total Stock Quantity</p>
              <h2 className="text-2xl font-bold">{totalStock}</h2>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white shadow rounded-lg p-4 flex flex-col md:flex-row gap-4">
          <input
            placeholder="Search medicine..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded w-full md:w-1/2 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border px-4 py-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option>All Categories</option>
            <option>Tablet</option>
            <option>Capsule</option>
            <option>Syrup</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Stock</th>
                <th className="p-3 text-left">Expiry</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((med, i) => {
                const status = getExpiryStatus(med.expiry);

                return (
                  <tr
                    key={med.id}
                    className={`border-b ${
                      i % 2 === 0 ? "bg-blue-50" : ""
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="p-3 font-medium">{med.name}</td>
                    <td className="p-3">{med.category}</td>
                    <td className="p-3">Rs {med.price}</td>

                    <td className="p-3">
                      {med.stock < 20 ? (
                        <span className="text-red-600 font-semibold flex items-center gap-1">
                          <AlertTriangle size={14} /> {med.stock} (Low)
                        </span>
                      ) : (
                        med.stock
                      )}
                    </td>

                    <td className="p-3">{med.expiry}</td>

                    <td className="p-3">
                      {status === "Expired" && (
                        <span className="text-red-600 font-semibold">
                          Expired
                        </span>
                      )}
                      {status === "Expiring Soon" && (
                        <span className="text-orange-600 font-semibold">
                          Expiring Soon
                        </span>
                      )}
                      {status === "Valid" && (
                        <span className="text-green-600 font-semibold">
                          Valid
                        </span>
                      )}
                    </td>

                    <td className="p-3">
                      <button
                        onClick={() => deleteMedicine(med.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center p-6 text-gray-500">
                    No medicines found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Medicines;
