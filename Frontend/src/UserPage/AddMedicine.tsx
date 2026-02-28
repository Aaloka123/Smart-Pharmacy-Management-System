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
  AlertTriangle,
  RefreshCcw,
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

  const handleReset = () => {
    setForm({
      name: "",
      category: "",
      price: "",
      stock: "",
      expiry: "",
      supplier: "",
    });
  };

  const isFormValid =
    form.name && form.category && form.price && form.stock && form.expiry;

  const isLowStock = Number(form.stock) > 0 && Number(form.stock) < 10;

  const isNearExpiry = () => {
    if (!form.expiry) return false;
    const today = new Date();
    const expiryDate = new Date(form.expiry);
    const diffTime = expiryDate.getTime() - today.getTime();
    const diffDays = diffTime / (1000 * 3600 * 24);
    return diffDays <= 30;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setSuccess(true);

    setTimeout(() => {
      navigate("/medicines");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200">
      <Header />

      <main className="flex-grow p-6 max-w-6xl mx-auto w-full">
        {/* Page Header */}
        <div className="bg-white rounded-2xl p-6 shadow mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-3 text-blue-600">
            <Pill />
            Add New Medicine
          </h1>
          <p className="text-gray-600 mt-1">
            Enter product details carefully before saving.
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
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Pill size={18} /> Basic Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  name="name"
                  value={form.name}
                  placeholder="Medicine Name"
                  onChange={handleChange}
                  className="border px-4 py-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />

                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="border px-4 py-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
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

            {/* Pricing */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <DollarSign size={18} /> Stock & Pricing
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  name="price"
                  type="number"
                  value={form.price}
                  placeholder="Price (Rs)"
                  onChange={handleChange}
                  className="border px-4 py-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />

                <input
                  name="stock"
                  type="number"
                  value={form.stock}
                  placeholder="Stock Quantity"
                  onChange={handleChange}
                  className="border px-4 py-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
            </div>

            {/* Supplier */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Truck size={18} /> Supplier & Expiry
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  name="expiry"
                  type="date"
                  value={form.expiry}
                  onChange={handleChange}
                  className="border px-4 py-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />

                <input
                  name="supplier"
                  value={form.supplier}
                  placeholder="Supplier Name"
                  onChange={handleChange}
                  className="border px-4 py-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Right Summary */}
          <div className="bg-white rounded-2xl shadow-xl p-6 h-fit sticky top-24">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="text-green-600" />
              Live Preview
            </h2>

            <ul className="text-sm space-y-2 text-gray-600">
              <li>
                <b>Name:</b> {form.name || "—"}
              </li>
              <li>
                <b>Category:</b> {form.category || "—"}
              </li>
              <li>
                <b>Price:</b> {form.price ? `Rs ${form.price}` : "—"}
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

            {isLowStock && (
              <div className="mt-4 flex items-center gap-2 text-yellow-600 text-sm">
                <AlertTriangle size={16} />
                Warning: Low stock level!
              </div>
            )}

            {isNearExpiry() && (
              <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                <AlertTriangle size={16} />
                Warning: Expiry within 30 days!
              </div>
            )}

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
                onClick={handleReset}
                className="w-full flex items-center justify-center gap-2 border py-2 rounded-xl hover:bg-gray-50 transition"
              >
                <RefreshCcw size={14} />
                Clear Form
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
