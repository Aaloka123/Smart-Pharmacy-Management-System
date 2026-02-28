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

interface MedicineForm {
  name: string;
  category: string;
  price: string;
  stock: string;
  expiry: string;
  supplier: string;
}

const AddMedicine: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<MedicineForm>({
    name: "",
    category: "",
    price: "",
    stock: "",
    expiry: "",
    supplier: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFormValid =
    form.name && form.category && form.price && form.stock && form.expiry;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) return;

    setSuccess(true);

    // Reset form after success
    setForm({
      name: "",
      category: "",
      price: "",
      stock: "",
      expiry: "",
      supplier: "",
    });

    // Redirect after 1.5s
    setTimeout(() => {
      navigate("/medicines");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200">
      <Header />

      <main className="flex-grow p-6 max-w-6xl mx-auto w-full">
        {/* Page Header */}
        <div className="bg-white/80 backdrop-blur-md border rounded-2xl p-6 shadow mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-3 text-blue-600">
            <Pill />
            Add New Medicine
          </h1>
          <p className="text-gray-600 mt-1">
            Fill in the details below to register a new product.
          </p>
        </div>

        {success && (
          <div className="bg-green-100 text-green-700 p-4 rounded-xl mb-6 flex items-center gap-2">
            <CheckCircle size={18} />
            Medicine added successfully!
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Left Section */}
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
                    value={form.name}
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
                    value={form.category}
                    onChange={handleChange}
                    className="border w-full pl-10 pr-4 py-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
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
                    value={form.price}
                    placeholder="Price (Rs)"
                    onChange={handleChange}
                    className="border w-full pl-10 pr-4 py-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>

                <div className="relative">
                  <Boxes className="absolute left-3 top-3 text-gray-400" />
                  <input
                    name="stock"
                    type="number"
                    value={form.stock}
                    placeholder="Stock Quantity"
                    onChange={handleChange}
                    className="border w-full pl-10 pr-4 py-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
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
                    value={form.expiry}
                    onChange={handleChange}
                    className="border w-full pl-10 pr-4 py-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>

                <div className="relative">
                  <Truck className="absolute left-3 top-3 text-gray-400" />
                  <input
                    name="supplier"
                    value={form.supplier}
                    placeholder="Supplier Name"
                    onChange={handleChange}
                    className="border w-full pl-10 pr-4 py-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
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
                disabled={!isFormValid}
                className={`w-full py-3 rounded-xl text-white shadow transition ${
                  isFormValid
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Save Medicine
              </button>

              <button
                type="button"
                onClick={() => navigate("/medicines")}
                className="w-full border py-2 rounded-xl hover:bg-gray-50 transition"
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
