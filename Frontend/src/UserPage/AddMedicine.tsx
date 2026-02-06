import React, { useState } from "react";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";
import { useNavigate } from "react-router-dom";
import { Pill, Tag, DollarSign, Boxes, Calendar, Truck } from "lucide-react";

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
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-grow p-6 max-w-5xl mx-auto w-full">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Pill className="text-blue-600" />
              Add New Medicine
            </h1>
            <p className="text-gray-500">
              Register new medicine into inventory system.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white shadow-sm rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <Pill className="absolute left-3 top-3 text-gray-400" />
                  <input
                    name="name"
                    placeholder="Medicine Name"
                    onChange={handleChange}
                    className="border w-full pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="relative">
                  <Tag className="absolute left-3 top-3 text-gray-400" />
                  <select
                    name="category"
                    onChange={handleChange}
                    className="border w-full pl-10 pr-4 py-2 rounded-lg"
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

            {/* Stock & Pricing */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Stock & Pricing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 text-gray-400" />
                  <input
                    name="price"
                    type="number"
                    placeholder="Price (Rs)"
                    onChange={handleChange}
                    className="border w-full pl-10 pr-4 py-2 rounded-lg"
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
                    className="border w-full pl-10 pr-4 py-2 rounded-lg"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Supplier & Expiry */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Supplier Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400" />
                  <input
                    name="expiry"
                    type="date"
                    onChange={handleChange}
                    className="border w-full pl-10 pr-4 py-2 rounded-lg"
                    required
                  />
                </div>

                <div className="relative">
                  <Truck className="absolute left-3 top-3 text-gray-400" />
                  <input
                    name="supplier"
                    placeholder="Supplier Name"
                    onChange={handleChange}
                    className="border w-full pl-10 pr-4 py-2 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex justify-end gap-4 pt-6 border-t">
              <button
                type="button"
                onClick={() => navigate("/medicines")}
                className="px-6 py-2 rounded-lg border hover:bg-gray-50"
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
