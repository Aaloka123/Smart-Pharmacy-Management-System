import React, { useState } from "react";
import { BarChart3, TrendingUp, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";

const Reports: React.FC = () => {
  const [filter, setFilter] = useState("This Month");

  const reportData = {
    monthlySales: "Rs 2,45,000",
    todayRevenue: "Rs 12,450",
    transactions: "158",
    growth: "+12%",
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 to-gray-200">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto p-6 space-y-8">
        {/* Back Button */}
        <Link
          to="/admin"
          className="flex items-center gap-2 text-blue-600 font-medium hover:underline"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-3xl p-8 shadow-xl flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <BarChart3 />
              Sales & Reports Overview
            </h1>
            <p className="opacity-80 mt-2">
              Monitor sales performance and analytics insights
            </p>
          </div>

          {/* Filter Dropdown */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white text-gray-700 px-4 py-2 rounded-xl shadow-md"
          >
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>

        {/* Report Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ReportCard
            title="Monthly Sales"
            value={reportData.monthlySales}
            extra={reportData.growth}
            icon={<TrendingUp />}
            gradient="from-green-500 to-emerald-600"
          />

          <ReportCard
            title="Today's Revenue"
            value={reportData.todayRevenue}
            icon={<Calendar />}
            gradient="from-blue-500 to-cyan-600"
          />

          <ReportCard
            title="Total Transactions"
            value={reportData.transactions}
            icon={<BarChart3 />}
            gradient="from-purple-500 to-indigo-600"
          />
        </div>

        {/* Chart Placeholder */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-xl font-semibold mb-4">
            Sales Performance Chart ({filter})
          </h2>

          <div className="h-64 flex items-center justify-center text-gray-400 border-2 border-dashed rounded-2xl">
            Chart Visualization Coming Soon...
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

/* ---------- Report Card Component ---------- */

interface ReportCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  gradient: string;
  extra?: string;
}

const ReportCard: React.FC<ReportCardProps> = ({
  title,
  value,
  icon,
  gradient,
  extra,
}) => (
  <div className="relative bg-white rounded-3xl p-6 shadow-lg overflow-hidden transition hover:scale-105 hover:shadow-2xl">
    <div
      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradient} opacity-20 rounded-bl-full`}
    />
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className="text-3xl font-bold mt-1">{value}</h2>

    {extra && (
      <p className="text-green-600 text-sm mt-1 font-medium">{extra} Growth</p>
    )}

    <div
      className={`mt-4 w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-r ${gradient}`}
    >
      {icon}
    </div>
  </div>
);

export default Reports;
