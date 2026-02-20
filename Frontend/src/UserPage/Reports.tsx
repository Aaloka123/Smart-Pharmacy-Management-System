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

/* ---------- Stat Card ---------- */

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
  <div className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-xl overflow-hidden transition-all duration-500 hover:scale-[1.06] hover:-translate-y-3 hover:shadow-2xl">
    <div
      className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${gradient} opacity-20 rounded-full blur-2xl`}
    />
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className="text-3xl font-bold mt-1">{value}</h2>
    <div
      className={`mt-5 w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-r ${gradient} transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg`}
    >
      {icon}
    </div>
  </div>
);

/* ---------- Main Component ---------- */

const Reports: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 opacity-20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400 opacity-20 blur-3xl rounded-full animate-pulse" />

      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full p-6 space-y-12 relative z-10">
        {/* 🔥 Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl p-10 text-white shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-3xl">
          <div className="absolute right-10 top-10 opacity-10 text-[140px]">
            <TrendingUp />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            <div>
              <h1 className="text-4xl font-bold">Reports & Analytics</h1>
              <p className="opacity-90 mt-3 text-lg">
                Advanced monitoring of pharmacy sales and performance metrics.
              </p>
            </div>

            <button className="flex items-center gap-3 bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold shadow-lg transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-2xl">
              <Download size={20} />
              Export Report
            </button>
          </div>
        </div>

        {/* 🔎 Glass Filter Panel */}
        <div className="bg-white/70 backdrop-blur-lg shadow-xl rounded-3xl p-6 flex flex-wrap gap-6 items-center border border-white/50 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl">
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

          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl transition-all duration-500 hover:bg-blue-700 hover:scale-110 hover:-translate-y-1 hover:shadow-xl">
            Apply Filters
          </button>
        </div>

        {/* 📊 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* 📋 Modern Table */}
        <div className="bg-white rounded-3xl shadow-xl p-8 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-6">Sales Transactions</h2>

          <div className="overflow-x-auto rounded-2xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 bg-gray-50">
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
                    className="even:bg-gray-50 transition-all duration-500 hover:bg-blue-50 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-md"
                  >
                    <td className="p-4">{row[0]}</td>
                    <td className="p-4 font-medium">{row[1]}</td>
                    <td className="p-4 text-center">{row[2]}</td>
                    <td className="p-4 text-right font-semibold">{row[3]}</td>
                    <td className="p-4 text-center">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                        {row[4]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 📈 Premium Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Top Selling",
              value: "Paracetamol",
              width: "80%",
              gradient: "from-green-400 to-green-600",
            },
            {
              title: "Least Selling",
              value: "Insulin",
              width: "25%",
              gradient: "from-red-400 to-red-600",
            },
            {
              title: "Stock Health",
              value: "Good",
              width: "70%",
              gradient: "from-blue-400 to-blue-600",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-xl p-6 transition-all duration-500 hover:scale-[1.06] hover:-translate-y-3 hover:shadow-2xl"
            >
              <h3 className="font-semibold mb-3">{item.title}</h3>
              <p className="text-xl font-bold">{item.value}</p>

              <div className="w-full bg-gray-200 h-3 rounded-full mt-4 overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${item.gradient} h-3 rounded-full transition-all duration-1000`}
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
