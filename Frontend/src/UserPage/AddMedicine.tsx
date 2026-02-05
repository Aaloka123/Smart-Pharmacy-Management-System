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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow flex justify-center items-center p-6">
        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">
            Add New Medicine
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Medicine Name"
              onChange={handleChange}
              className="border w-full px-4 py-2 rounded"
              required
            />
            <select
              name="category"
              onChange={handleChange}
              className="border w-full px-4 py-2 rounded"
              required
            >
              <option value="">Select Category</option>
              <option>Tablet</option>
              <option>Capsule</option>
              <option>Syrup</option>
            </select>
            <input
              name="price"
              type="number"
              placeholder="Price"
              onChange={handleChange}
              className="border w-full px-4 py-2 rounded"
              required
            />
            <input
              name="stock"
              type="number"
              placeholder="Stock"
              onChange={handleChange}
              className="border w-full px-4 py-2 rounded"
              required
            />
            <input
              name="expiry"
              type="date"
              onChange={handleChange}
              className="border w-full px-4 py-2 rounded"
              required
            />

            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Save Medicine
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AddMedicine;
