import React, { useState } from "react";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";
import { useNavigate } from "react-router-dom";
import {
  Pill,
  Tag,
  DollarSign,
  Boxes,
  Calendar,
  Truck,
  CheckCircle,
} from "lucide-react";

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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200">
      <Header />

      <main className="flex-grow p-6 max-w-6xl mx-auto w-full">
        {/* Glass Header */}
        <div className="bg-white/70 backdrop-blur-md border border-white rounded-2xl p-6 shadow mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-3 text-blue-600">
            <Pill />
            Add New Medicine
          </h1>
          <p className="text-gray-600 mt-1">
            Fill in the details to register a new product.
          </p>
        </div>

        {/* Step Layout */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Left Steps */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-lg font-semibold mb-4">
                1. Basic Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <Pill className="absolute left-3 top-3 text-gray-400" />
                  <input
                    name="name"
                    placeholder="Medicine Name"
                    onChange={handleChange}
                    className="border w-full pl-10 pr-4 py-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>

                <div className="relative">
                  <Tag className="absolute left-3 top-3 text-gray-400" />
                  <select
                    name="category"
                    onChange={handleChange}
                    className="border w-full pl-10 pr-4 py-2 rounded-xl"
                    required
                  >
                    <option value="">Select Category</option>
                    <option>Tablet</option>
                    <option>Capsule</option>
                    <option>Syrup</option>
                    <option>Injection</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-lg font-semibold mb-4">2. Stock & Pricing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 text-gray-400" />
                  <input
                    name="price"
                    type="number"
                    placeholder="Price (Rs)"
                    onChange={handleChange}
                    className="border w-full pl-10 pr-4 py-2 rounded-xl"
                    required
                  />
                </div>

                <div className="relative">
                  <Boxes className="absolute left-3 top-3 text-gray-400" />
                  <input
                    name="stock"
                    type="number"
                    placeholder="Stock Quantity"
                    onChange={handleChange}
                    className="border w-full pl-10 pr-4 py-2 rounded-xl"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Supplier */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-lg font-semibold mb-4">
                3. Supplier & Expiry
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400" />
                  <input
                    name="expiry"
                    type="date"
                    onChange={handleChange}
                    className="border w-full pl-10 pr-4 py-2 rounded-xl"
                    required
                  />
                </div>

                <div className="relative">
                  <Truck className="absolute left-3 top-3 text-gray-400" />
                  <input
                    name="supplier"
                    placeholder="Supplier Name"
                    onChange={handleChange}
                    className="border w-full pl-10 pr-4 py-2 rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Summary */}
          <div className="bg-white rounded-2xl shadow-xl p-6 h-fit sticky top-24">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="text-green-600" />
              Summary
            </h2>

            <ul className="text-sm space-y-2 text-gray-600">
              <li>
                <b>Name:</b> {form.name || "—"}
              </li>
              <li>
                <b>Category:</b> {form.category || "—"}
              </li>
              <li>
                <b>Price:</b> {form.price || "—"}
              </li>
              <li>
                <b>Stock:</b> {form.stock || "—"}
              </li>
              <li>
                <b>Expiry:</b> {form.expiry || "—"}
              </li>
              <li>
                <b>Supplier:</b> {form.supplier || "—"}
              </li>
            </ul>

            <div className="border-t mt-4 pt-4 space-y-3">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 shadow"
              >
                Save Medicine
              </button>

              <button
                type="button"
                onClick={() => navigate("/medicines")}
                className="w-full border py-2 rounded-xl hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default AddMedicine;
