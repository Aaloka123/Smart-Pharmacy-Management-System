import React from "react";
import { Link } from "react-router-dom";
import { Package, AlertTriangle, DollarSign, Trash2 } from "lucide-react";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";

interface KPICardProps {
  title: string;
  value: string;
  color: string;
  icon: React.ReactNode;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, color, icon }) => (
  <div className="bg-white shadow-md rounded-xl p-5 flex items-center justify-between hover:shadow-lg transition">
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className={`text-2xl font-bold ${color}`}>{value}</h2>
    </div>
    <div className="text-gray-400">{icon}</div>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-grow p-6 space-y-8 max-w-7xl mx-auto w-full">
        {/* Welcome */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl p-6 shadow">
          <h1 className="text-3xl font-bold">Welcome to PharmaCare 💊</h1>
          <p className="mt-2 opacity-90">
            Manage inventory, sales, and reports in one place.
          </p>
        </div>

        {/* KPI Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Total Medicines"
            value="245"
            color="text-blue-600"
            icon={<Package size={36} />}
          />
          <KPICard
            title="Low Stock"
            value="18"
            color="text-yellow-600"
            icon={<AlertTriangle size={36} />}
          />
          <KPICard
            title="Today's Sales"
            value="Rs 12,450"
            color="text-green-600"
            icon={<DollarSign size={36} />}
          />
          <KPICard
            title="Expired Items"
            value="3"
            color="text-red-600"
            icon={<Trash2 size={36} />}
          />
        </div>

        {/* Quick Actions */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/add-product"
              className="bg-blue-600 text-white py-3 rounded-lg text-center font-medium hover:bg-blue-700"
            >
              + Add Medicine
            </Link>

            <Link
              to="/sales"
              className="bg-green-600 text-white py-3 rounded-lg text-center font-medium hover:bg-green-700"
            >
              New Sale
            </Link>

            <Link
              to="/reports"
              className="bg-purple-600 text-white py-3 rounded-lg text-center font-medium hover:bg-purple-700"
            >
              Generate Report
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between">
              <span>Paracetamol sold (10 units)</span>
              <span className="text-gray-400">2 mins ago</span>
            </li>
            <li className="flex justify-between">
              <span>Stock low for Amoxicillin</span>
              <span className="text-gray-400">1 hour ago</span>
            </li>
            <li className="flex justify-between">
              <span>New medicine added: Vitamin C</span>
              <span className="text-gray-400">Today</span>
            </li>
            <li className="flex justify-between text-red-600">
              <span>2 items expired</span>
              <span>Today</span>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
