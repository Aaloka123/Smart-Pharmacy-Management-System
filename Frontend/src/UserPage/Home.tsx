import React from "react";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Main content */}
      <main className="flex-grow p-6 space-y-6">
        {/* Welcome Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-3xl font-bold text-blue-700">
            Welcome to PharmaCare
          </h1>
          <p className="text-gray-600 mt-2">
            Smart Pharmacy Management System for efficient inventory, sales, and
            reporting.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-white shadow rounded-lg p-4">
            <p className="text-gray-500 text-sm">Total Medicines</p>
            <h2 className="text-2xl font-bold">245</h2>
          </div>

          <div className="bg-white shadow rounded-lg p-4">
            <p className="text-gray-500 text-sm">Low Stock</p>
            <h2 className="text-2xl font-bold text-yellow-600">18</h2>
          </div>

          <div className="bg-white shadow rounded-lg p-4">
            <p className="text-gray-500 text-sm">Today Sales</p>
            <h2 className="text-2xl font-bold text-green-600">Rs 12,450</h2>
          </div>

          <div className="bg-white shadow rounded-lg p-4">
            <p className="text-gray-500 text-sm">Expired Items</p>
            <h2 className="text-2xl font-bold text-red-600">3</h2>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
              + Add Medicine
            </button>
            <button className="bg-green-600 text-white py-3 rounded hover:bg-green-700">
              New Sale
            </button>
            <button className="bg-purple-600 text-white py-3 rounded hover:bg-purple-700">
              Generate Report
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <ul className="space-y-2 text-sm">
            <li>🟢 10 units of Paracetamol sold</li>
            <li>🟡 Stock low for Amoxicillin</li>
            <li>🔵 New medicine added: Vitamin C</li>
            <li>🔴 2 items expired today</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
