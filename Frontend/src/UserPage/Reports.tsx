import React from "react";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";
import { FileText, Download, TrendingUp, AlertTriangle } from "lucide-react";

const Reports: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-grow p-6 max-w-7xl mx-auto space-y-8">
        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <p className="text-gray-500">
            View pharmacy performance and generate reports.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow rounded-xl p-5">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Sales</p>
                <h2 className="text-2xl font-bold text-green-600">
                  Rs 245,000
                </h2>
              </div>
              <TrendingUp />
            </div>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Orders</p>
                <h2 className="text-2xl font-bold">1,245</h2>
              </div>
              <FileText />
            </div>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">Low Stock</p>
                <h2 className="text-2xl font-bold text-yellow-600">18 Items</h2>
              </div>
              <AlertTriangle />
            </div>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">Expired</p>
                <h2 className="text-2xl font-bold text-red-600">3 Items</h2>
              </div>
              <AlertTriangle />
            </div>
          </div>
        </div>

        {/* Report Table */}
        <div className="bg-white shadow rounded-xl p-6">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">Sales Report</h2>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              <Download size={18} />
              Download PDF
            </button>
          </div>

          <table className="w-full text-sm border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Date</th>
                <th className="border p-2">Medicine</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">2026-02-06</td>
                <td className="border p-2">Paracetamol</td>
                <td className="border p-2">10</td>
                <td className="border p-2">Rs 500</td>
              </tr>
              <tr>
                <td className="border p-2">2026-02-06</td>
                <td className="border p-2">Amoxicillin</td>
                <td className="border p-2">5</td>
                <td className="border p-2">Rs 750</td>
              </tr>
              <tr>
                <td className="border p-2">2026-02-05</td>
                <td className="border p-2">Vitamin C</td>
                <td className="border p-2">20</td>
                <td className="border p-2">Rs 1,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Inventory Summary */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-3">Inventory Status</h2>
          <ul className="space-y-2 text-sm">
            <li>🟡 18 medicines are low in stock</li>
            <li>🔴 3 medicines are expired</li>
            <li>🟢 224 medicines are available</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reports;
