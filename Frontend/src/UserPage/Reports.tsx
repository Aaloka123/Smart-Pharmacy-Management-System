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
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}) => (
  <div className="bg-white shadow-sm rounded-xl p-5 flex justify-between items-center hover:shadow-md transition">
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className={`text-2xl font-bold ${color}`}>{value}</h2>
    </div>
    <div className="text-gray-400">{icon}</div>
  </div>
);

const Reports: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Reports & Analytics</h1>
            <p className="text-gray-500">
              Monitor performance and generate pharmacy reports.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Download size={18} />
            Export PDF
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white shadow-sm rounded-xl p-4 flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2 text-gray-500">
            <Calendar size={18} />
            <span>From</span>
            <input type="date" className="border rounded px-2 py-1" />
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <span>To</span>
            <input type="date" className="border rounded px-2 py-1" />
          </div>
          <button className="bg-gray-800 text-white px-4 py-1 rounded hover:bg-black">
            apply
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Revenue"
            value="Rs 245,000"
            color="text-green-600"
            icon={<TrendingUp size={32} />}
          />
          <StatCard
            title="Total Orders"
            value="1,245"
            color="text-blue-600"
            icon={<ShoppingCart size={32} />}
          />
          <StatCard
            title="Low Stock"
            value="18"
            color="text-yellow-600"
            icon={<AlertTriangle size={32} />}
          />
          <StatCard
            title="Expired"
            value="3"
            color="text-red-600"
            icon={<AlertTriangle size={32} />}
          />
        </div>

        {/* Sales Table */}
        <div className="bg-white shadow-sm rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Sales Transactions</h2>

          <table className="w-full text-sm border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="border p-3 text-left">Date</th>
                <th className="border p-3 text-left">Medicine</th>
                <th className="border p-3 text-center">Quantity</th>
                <th className="border p-3 text-right">Amount</th>
                <th className="border p-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["2026-02-06", "Paracetamol", 10, "Rs 500", "Completed"],
                ["2026-02-06", "Amoxicillin", 5, "Rs 750", "Completed"],
                ["2026-02-05", "Vitamin C", 20, "Rs 1,000", "Completed"],
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="border p-3">{row[0]}</td>
                  <td className="border p-3">{row[1]}</td>
                  <td className="border p-3 text-center">{row[2]}</td>
                  <td className="border p-3 text-right">{row[3]}</td>
                  <td className="border p-3 text-center">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
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
          <div className="bg-white shadow-sm rounded-xl p-5">
            <h3 className="font-semibold mb-2">Top Selling</h3>
            <p>Paracetamol</p>
          </div>
          <div className="bg-white shadow-sm rounded-xl p-5">
            <h3 className="font-semibold mb-2">Least Selling</h3>
            <p>Insulin</p>
          </div>
          <div className="bg-white shadow-sm rounded-xl p-5">
            <h3 className="font-semibold mb-2">Stock Health</h3>
            <p className="text-green-600">good</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reports;
