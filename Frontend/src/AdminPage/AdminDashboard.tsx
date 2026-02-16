import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Package,
  BarChart3,
  Settings,
  ShieldCheck,
  Activity,
} from "lucide-react";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto p-6 space-y-8">
        {/* Admin Hero */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-8 text-white shadow-xl">
          <h1 className="text-4xl font-bold flex items-center gap-2">
            <ShieldCheck /> Admin Control Panel
          </h1>
          <p className="opacity-80 mt-1">
            System-level management & monitoring
          </p>
        </div>

        {/* Admin KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AdminCard
            title="Total Users"
            value="52"
            icon={<Users />}
            color="bg-blue-600"
          />
          <AdminCard
            title="Medicines"
            value="245"
            icon={<Package />}
            color="bg-green-600"
          />
          <AdminCard
            title="Daily Sales"
            value="Rs 12,450"
            icon={<BarChart3 />}
            color="bg-purple-600"
          />
          <AdminCard
            title="System Logs"
            value="128"
            icon={<Activity />}
            color="bg-red-600"
          />
        </div>

        {/* Admin Actions */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Admin Actions</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <AdminAction
              title="Manage Users"
              desc="Add / remove staff accounts"
              link="/admin/users"
              color="bg-blue-600"
            />
            <AdminAction
              title="System Settings"
              desc="Roles, permissions, backup"
              link="/admin/settings"
              color="bg-gray-800"
            />
            <AdminAction
              title="Audit Logs"
              desc="View system activities"
              link="/admin/logs"
              color="bg-red-600"
            />
          </div>
        </div>

        {/* System Health */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">System Health</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <HealthItem label="Database" status="Healthy" color="green" />
            <HealthItem label="API Server" status="Running" color="green" />
            <HealthItem label="Backup" status="Last: Today" color="blue" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

/* Components */

const AdminCard = ({ title, value, icon, color }: any) => (
  <div className="bg-white rounded-2xl p-5 shadow hover:shadow-xl transition flex justify-between items-center">
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-3xl font-bold">{value}</h2>
    </div>
    <div className={`${color} p-3 rounded-full text-white text-xl`}>{icon}</div>
  </div>
);

const AdminAction = ({ title, desc, link, color }: any) => (
  <Link
    to={link}
    className={`rounded-xl p-6 text-white ${color} hover:opacity-90 transition shadow-lg`}
  >
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm opacity-90 mt-1">{desc}</p>
  </Link>
);

const HealthItem = ({ label, status, color }: any) => (
  <div className="border rounded-xl p-4 flex justify-between items-center">
    <p className="font-medium">{label}</p>
    <span
      className={`px-3 py-1 rounded-full text-xs bg-${color}-100 text-${color}-700`}
    >
      {status}
    </span>
  </div>
);

export default AdminDashboard;
