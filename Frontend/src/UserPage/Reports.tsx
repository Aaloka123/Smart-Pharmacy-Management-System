import React from "react";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";
import {
  Download,
  TrendingUp,
  ShoppingCart,
  AlertTriangle,
  Calendar,
} from "lucide-react";

const StatCard = ({
  title,
  value,
  icon,
  color,
  bg,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
}) => (
  <div
    className={`rounded-xl p-5 flex justify-between items-center shadow-md 
    hover:scale-[1.02] transition transform border-l-4 ${bg}`}
  >
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className={`text-2xl font-bold ${color}`}>{value}</h2>
    </div>
    <div className="opacity-70">{icon}</div>
  </div>
);

const Reports: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full p-6 space-y-8">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white flex justify-between items-center shadow-lg">
          <div>
            <h1 className="text-3xl font-bold">Reports & Analytics</h1>
            <p className="opacity-90">
              Monitor pharmacy performance in real-time.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">
            <Download size={18} />
            Export PDF
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white shadow rounded-xl p-4 flex flex-wrap gap-4 items-center sticky top-4 z-10">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>From</span>
            <input type="date" className="border rounded px-2 py-1" />
          </div>
          <div className="flex items-center gap-2">
            <span>To</span>
            <input type="date" className="border rounded px-2 py-1" />
          </div>
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
            Apply
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Revenue"
            value="Rs 245,000"
            color="text-green-700"
            bg="border-green-500 bg-white"
            icon={<TrendingUp size={32} className="text-green-500" />}
          />
          <StatCard
            title="Total Orders"
            value="1,245"
            color="text-blue-700"
            bg="border-blue-500 bg-white"
            icon={<ShoppingCart size={32} className="text-blue-500" />}
          />
          <StatCard
            title="Low Stock"
            value="18"
            color="text-yellow-700"
            bg="border-yellow-500 bg-white"
            icon={<AlertTriangle size={32} className="text-yellow-500" />}
          />
          <StatCard
            title="Expired"
            value="3"
            color="text-red-700"
            bg="border-red-500 bg-white"
            icon={<AlertTriangle size={32} className="text-red-500" />}
          />
        </div>

        {/* Sales Table */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Sales Transactions</h2>

          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Medicine</th>
                <th className="p-3 text-center">Qty</th>
                <th className="p-3 text-right">Amount</th>
                <th className="p-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["2026-02-06", "Paracetamol", 10, "Rs 500", "Completed"],
                ["2026-02-06", "Amoxicillin", 5, "Rs 750", "Completed"],
                ["2026-02-05", "Vitamin C", 20, "Rs 1,000", "Completed"],
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 border-b">
                  <td className="p-3">{row[0]}</td>
                  <td className="p-3 font-medium">{row[1]}</td>
                  <td className="p-3 text-center">{row[2]}</td>
                  <td className="p-3 text-right font-semibold">{row[3]}</td>
                  <td className="p-3 text-center">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                      {row[4]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-xl p-5">
            <h3 className="font-semibold mb-2">Top Selling</h3>
            <p className="text-lg font-bold">Paracetamol</p>
            <div className="w-full bg-gray-200 h-2 rounded mt-2">
              <div className="bg-green-500 h-2 rounded w-[80%]" />
            </div>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <h3 className="font-semibold mb-2">Least Selling</h3>
            <p className="text-lg font-bold">Insulin</p>
            <div className="w-full bg-gray-200 h-2 rounded mt-2">
              <div className="bg-red-500 h-2 rounded w-[25%]" />
            </div>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <h3 className="font-semibold mb-2">Stock Health</h3>
            <p className="text-green-600 font-bold text-lg">Good</p>
            <div className="w-full bg-gray-200 h-2 rounded mt-2">
              <div className="bg-green-600 h-2 rounded w-[70%]" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reports;
