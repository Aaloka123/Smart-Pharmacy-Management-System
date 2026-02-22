import React, { useState } from "react";
import {
  Pill,
  Hash,
  Package,
  Calendar,
  DollarSign,
  Save,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";

const AddMedicine: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    batch: "",
    quantity: "",
    expiry: "",
    price: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.quantity || !form.price) {
      alert("Please fill all required fields!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      alert("Medicine added successfully!");

      setForm({
        name: "",
        batch: "",
        quantity: "",
        expiry: "",
        price: "",
        category: "",
      });

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200">
      <Header />

      <main className="flex-1 w-full px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Page Header Card */}
          <div className="bg-white rounded-3xl shadow-xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-green-100 text-green-600 rounded-2xl">
                <Pill size={28} />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Add New Medicine</h1>
                <p className="text-gray-500 text-sm">
                  Enter medicine details to add to inventory
                </p>
              </div>
            </div>

            <Link
              to="/admin"
              className="flex items-center gap-2 text-sm bg-gray-900 text-white px-4 py-2 rounded-xl hover:scale-105 transition"
            >
              <ArrowLeft size={16} />
              Back
            </Link>
          </div>

          {/* Form Card */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-2xl p-10 space-y-8"
          >
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                icon={<Pill />}
                label="Medicine Name"
                name="name"
                placeholder="Paracetamol"
                value={form.name}
                onChange={handleChange}
              />

              <InputField
                icon={<Hash />}
                label="Batch Number"
                name="batch"
                placeholder="BCH-1023"
                value={form.batch}
                onChange={handleChange}
              />

              <InputField
                icon={<Package />}
                label="Quantity"
                name="quantity"
                type="number"
                placeholder="100"
                value={form.quantity}
                onChange={handleChange}
              />

              <InputField
                icon={<Calendar />}
                label="Expiry Date"
                name="expiry"
                type="date"
                value={form.expiry}
                onChange={handleChange}
              />

              <InputField
                icon={<DollarSign />}
                label="Price (Rs)"
                name="price"
                type="number"
                placeholder="25"
                value={form.price}
                onChange={handleChange}
              />

              <InputField
                icon={<Package />}
                label="Category"
                name="category"
                placeholder="Tablet / Syrup"
                value={form.category}
                onChange={handleChange}
              />
            </div>

            {/* Divider */}
            <div className="border-t pt-6">
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-2xl flex items-center justify-center gap-2 font-semibold text-white shadow-lg transition-all duration-300
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-[1.03]"
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Saving Medicine...
                  </>
                ) : (
                  <>
                    <Save size={18} />
                    Save Medicine
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

/* ---------- Reusable Input ---------- */

interface InputProps {
  icon: React.ReactNode;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

const InputField: React.FC<InputProps> = ({
  icon,
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) => (
  <div>
    <label className="text-sm font-medium text-gray-600">{label}</label>
    <div className="flex items-center mt-2 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-200 transition">
      <span className="text-gray-400">{icon}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none px-3 text-sm"
        required
      />
    </div>
  </div>
);

export default AddMedicine;
