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

  const [loading, setLoading] = useState(false); // ✅ new state

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Updated: validation + loading + reset
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!form.name || !form.quantity || !form.price) {
      alert("Please fill all required fields!");
      return;
    }

    setLoading(true);

    // fake API delay
    setTimeout(() => {
      console.log("Medicine Added:", form);
      alert("Medicine added successfully!");

      // Reset form
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

      <main className="flex-grow max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Pill className="text-green-600 animate-pulse" />
            Add New Medicine
          </h1>
          <Link
            to="/admin"
            className="flex items-center gap-2 text-sm bg-gray-800 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-8 space-y-6"
        >
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

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all shadow-lg
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 text-white hover:scale-[1.03]"
              }`}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save />
                Save Medicine
              </>
            )}
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

/* ---------- Reusable Input ---------- */

const InputField = ({
  icon,
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: any) => (
  <div>
    <label className="text-sm font-medium text-gray-600">{label}</label>
    <div className="flex items-center mt-1 bg-gray-100 rounded-xl px-3 py-2 focus-within:ring-2 ring-green-400 transition">
      <span className="text-gray-500">{icon}</span>
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
