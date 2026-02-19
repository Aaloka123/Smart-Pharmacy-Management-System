import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Package,
  BarChart3,
  Settings,
  ShieldCheck,
  Activity,
  Database,
  Server,
  Cloud,
  AlertCircle,
} from "lucide-react";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto p-6 space-y-10">
        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-700 rounded-3xl p-10 text-white shadow-2xl transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute right-10 top-10 opacity-10 text-[120px]">
            <ShieldCheck />
          </div>

          <h1 className="text-4xl font-bold flex items-center gap-3">
            <ShieldCheck className="text-green-400 animate-pulse transition-transform duration-700" />
            Admin Control Panel
          </h1>
          <p className="opacity-80 mt-2">
            System-level management & monitoring dashboard
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <QuickStat
            label="Pending Approvals"
            value="5"
            icon={<AlertCircle />}
            color="bg-yellow-100 text-yellow-700"
          />
          <QuickStat
            label="Active Staff"
            value="12"
            icon={<Users />}
            color="bg-blue-100 text-blue-700"
          />
          <QuickStat
            label="System Alerts"
            value="3"
            icon={<AlertCircle />}
            color="bg-red-100 text-red-700"
          />
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AdminCard
            title="Total Users"
            value="52"
            icon={<Users />}
            gradient="from-blue-500 to-blue-700"
          />
          <AdminCard
            title="Medicines"
            value="245"
            icon={<Package />}
            gradient="from-green-500 to-green-700"
          />
          <AdminCard
            title="Daily Sales"
            value="Rs 12,450"
            icon={<BarChart3 />}
            gradient="from-purple-500 to-purple-700"
          />
          <AdminCard
            title="System Logs"
            value="128"
            icon={<Activity />}
            gradient="from-red-500 to-red-700"
          />
        </div>

        {/* 🔥 NEW CLICKABLE CELLS */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Navigation</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <DashboardCell
              title="Add Medicine"
              desc="Create new medicine entry"
              icon={<Package />}
              link="/admin/add-medicine"
              gradient="from-green-500 to-emerald-600"
            />

            <DashboardCell
              title="View Reports"
              desc="Check sales & analytics"
              icon={<BarChart3 />}
              link="/admin/reports"
              gradient="from-purple-500 to-indigo-600"
            />

            <DashboardCell
              title="Manage Inventory"
              desc="Stock control system"
              icon={<Database />}
              link="/admin/inventory"
              gradient="from-blue-500 to-cyan-600"
            />

            <DashboardCell
              title="System Monitoring"
              desc="Server & logs overview"
              icon={<Server />}
              link="/admin/monitoring"
              gradient="from-red-500 to-rose-600"
            />
          </div>
        </div>

        {/* System Health */}
        <div className="bg-white rounded-3xl shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">System Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <HealthItem
              icon={<Database />}
              label="Database"
              status="Healthy"
              color="green"
            />
            <HealthItem
              icon={<Server />}
              label="API Server"
              status="Running"
              color="green"
            />
            <HealthItem
              icon={<Cloud />}
              label="Cloud Backup"
              status="Synced Today"
              color="blue"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

/* ---------- Components ---------- */

const QuickStat = ({ label, value, icon, color }: any) => (
  <div
    className={`flex items-center justify-between rounded-2xl p-4 shadow bg-white ${color} transition hover:scale-105 hover:shadow-xl`}
  >
    <div>
      <p className="text-sm font-medium">{label}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
    <div className="text-3xl opacity-70">{icon}</div>
  </div>
);

const AdminCard = ({ title, value, icon, gradient }: any) => (
  <div className="relative bg-white rounded-3xl p-6 shadow-lg overflow-hidden transition hover:scale-105 hover:shadow-2xl">
    <div
      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradient} opacity-20 rounded-bl-full`}
    />
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className="text-3xl font-bold mt-1">{value}</h2>
    <div
      className={`mt-4 w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-r ${gradient}`}
    >
      {icon}
    </div>
  </div>
);

const DashboardCell = ({ title, desc, icon, link, gradient }: any) => (
  <Link
    to={link}
    className="group relative bg-white rounded-3xl p-6 shadow-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
  >
    <div
      className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition duration-500`}
    />

    <div className="relative z-10 flex flex-col gap-3">
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r ${gradient} text-white transition group-hover:rotate-12 group-hover:scale-110`}
      >
        {icon}
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  </Link>
);

const HealthItem = ({ icon, label, status, color }: any) => {
  const colorMap: any = {
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    red: "bg-red-100 text-red-700",
    yellow: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="border rounded-2xl p-5 flex justify-between items-center hover:shadow-lg transition">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gray-100 rounded-lg">{icon}</div>
        <p className="font-medium">{label}</p>
      </div>
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${colorMap[color]}`}
      >
        {status}
      </span>
    </div>
  );
};

export default AdminDashboard;
