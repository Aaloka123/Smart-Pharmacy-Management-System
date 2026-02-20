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
  gradient,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  gradient: string;
}) => (
  <div className="relative bg-white rounded-3xl p-6 shadow-lg overflow-hidden transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 hover:shadow-2xl">
    <div
      className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${gradient} opacity-20 rounded-bl-full`}
    />
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className="text-3xl font-bold mt-1">{value}</h2>
    <div
      className={`mt-4 w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-r ${gradient} transition group-hover:rotate-12`}
    >
      {icon}
    </div>
  </div>
);

const Reports: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full p-6 space-y-10">
        {/* 🔥 Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl p-8 text-white shadow-2xl transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute right-8 top-8 opacity-10 text-[120px]">
            <TrendingUp />
          </div>

          <div className="relative z-10 flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">Reports & Analytics</h1>
              <p className="opacity-90 mt-2">
                Monitor pharmacy performance in real-time.
              </p>
            </div>

            <button className="flex items-center gap-2 bg-white text-blue-700 px-5 py-2 rounded-xl font-semibold shadow-md hover:scale-105 hover:bg-gray-100 transition">
              <Download size={18} />
              Export PDF
            </button>
          </div>
        </div>

        {/* 🔎 Glass Filter Section */}
        <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-3xl p-6 flex flex-wrap gap-6 items-center transition hover:shadow-2xl">
          <div className="flex items-center gap-3">
            <Calendar size={18} />
            <span className="font-medium">From</span>
            <input
              type="date"
              className="border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="font-medium">To</span>
            <input
              type="date"
              className="border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 hover:scale-105 transition">
            Apply Filters
          </button>
        </div>

        {/* 📊 Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Revenue"
            value="Rs 245,000"
            gradient="from-green-500 to-emerald-600"
            icon={<TrendingUp size={28} />}
          />
          <StatCard
            title="Total Orders"
            value="1,245"
            gradient="from-blue-500 to-cyan-600"
            icon={<ShoppingCart size={28} />}
          />
          <StatCard
            title="Low Stock"
            value="18"
            gradient="from-yellow-500 to-orange-500"
            icon={<AlertTriangle size={28} />}
          />
          <StatCard
            title="Expired"
            value="3"
            gradient="from-red-500 to-rose-600"
            icon={<AlertTriangle size={28} />}
          />
        </div>

        {/* 📋 Enhanced Table */}
        <div className="bg-white rounded-3xl shadow-xl p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-6">Sales Transactions</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 border-b">
                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Medicine</th>
                  <th className="p-4 text-center">Qty</th>
                  <th className="p-4 text-right">Amount</th>
                  <th className="p-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["2026-02-06", "Paracetamol", 10, "Rs 500", "Completed"],
                  ["2026-02-06", "Amoxicillin", 5, "Rs 750", "Completed"],
                  ["2026-02-05", "Vitamin C", 20, "Rs 1,000", "Completed"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="hover:bg-gray-50 hover:scale-[1.01] transition-all duration-300 border-b"
                  >
                    <td className="p-4">{row[0]}</td>
                    <td className="p-4 font-medium">{row[1]}</td>
                    <td className="p-4 text-center">{row[2]}</td>
                    <td className="p-4 text-right font-semibold">{row[3]}</td>
                    <td className="p-4 text-center">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {row[4]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 📈 Insights Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Top Selling",
              value: "Paracetamol",
              width: "80%",
              color: "bg-green-500",
            },
            {
              title: "Least Selling",
              value: "Insulin",
              width: "25%",
              color: "bg-red-500",
            },
            {
              title: "Stock Health",
              value: "Good",
              width: "70%",
              color: "bg-blue-500",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg p-6 transition hover:scale-[1.05] hover:shadow-2xl"
            >
              <h3 className="font-semibold mb-3">{item.title}</h3>
              <p className="text-xl font-bold">{item.value}</p>

              <div className="w-full bg-gray-200 h-3 rounded-full mt-4 overflow-hidden">
                <div
                  className={`${item.color} h-3 rounded-full transition-all duration-700`}
                  style={{ width: item.width }}
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reports;
