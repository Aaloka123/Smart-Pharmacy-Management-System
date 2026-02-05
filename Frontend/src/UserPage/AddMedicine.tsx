import React, { useState } from "react";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";
import { useNavigate } from "react-router-dom";

const AddMedicine: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    expiry: "",
    supplier: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Medicine added successfully!");
    navigate("/medicines");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-gray-100">
      <Header />

      <main className="flex-grow flex justify-center items-center p-8">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8">
          {/* Title */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-blue-700">
              Add New Medicine
            </h1>
            <p className="text-gray-500">
              Enter medicine information carefully
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <div>
              <label className="text-sm text-gray-600">Medicine Name</label>
              <input
                name="name"
                placeholder="Paracetamol"
                onChange={handleChange}
                className="border w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Category</label>
              <select
                name="category"
                onChange={handleChange}
                className="border w-full px-4 py-2 rounded-lg"
                required
              >
                <option value="">Select</option>
                <option>Tablet</option>
                <option>Capsule</option>
                <option>Syrup</option>
                <option>Injection</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">Price (Rs)</label>
              <input
                name="price"
                type="number"
                placeholder="50"
                onChange={handleChange}
                className="border w-full px-4 py-2 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Stock Quantity</label>
              <input
                name="stock"
                type="number"
                placeholder="100"
                onChange={handleChange}
                className="border w-full px-4 py-2 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Expiry Date</label>
              <input
                name="expiry"
                type="date"
                onChange={handleChange}
                className="border w-full px-4 py-2 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Supplier</label>
              <input
                name="supplier"
                placeholder="ABC Pharma Pvt Ltd"
                onChange={handleChange}
                className="border w-full px-4 py-2 rounded-lg"
              />
            </div>

            {/* Buttons */}
            <div className="col-span-2 flex justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={() => navigate("/medicines")}
                className="px-6 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow"
              >
                Save Medicine
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AddMedicine;
