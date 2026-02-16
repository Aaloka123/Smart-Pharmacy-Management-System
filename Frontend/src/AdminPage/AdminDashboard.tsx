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
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-700 rounded-3xl p-10 text-white shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
          <div className="absolute right-10 top-10 opacity-10 text-[120px]">
            <ShieldCheck />
          </div>

          <h1 className="text-4xl font-bold flex items-center gap-3">
            <ShieldCheck className="text-green-400 animate-pulse" />
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

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AdminCard
            title="Total Users"
            value="52"
            icon={<Users />}
            gradient="from-blue-500 to-blue-700"
            trend="↑ 5% since last week"
          />
          <AdminCard
            title="Medicines"
            value="245"
            icon={<Package />}
            gradient="from-green-500 to-green-700"
            trend="↑ 2 new today"
          />
          <AdminCard
            title="Daily Sales"
            value="Rs 12,450"
            icon={<BarChart3 />}
            gradient="from-purple-500 to-purple-700"
            trend="↑ 8% since yesterday"
          />
          <AdminCard
            title="System Logs"
            value="128"
            icon={<Activity />}
            gradient="from-red-500 to-red-700"
            trend="5 new alerts"
          />
        </div>

        {/* Admin Actions */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Administrative Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <AdminAction
              title="Manage Users"
              desc="Staff accounts & permissions"
              link="/admin/users"
              icon={<Users />}
              color="bg-blue-600"
            />
            <AdminAction
              title="System Settings"
              desc="Roles, backups, configs"
              link="/admin/settings"
              icon={<Settings />}
              color="bg-gray-800"
            />
            <AdminAction
              title="Audit Logs"
              desc="Track every system event"
              link="/admin/logs"
              icon={<Activity />}
              color="bg-red-600"
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

        {/* Recent Activity */}
        <div className="bg-white rounded-3xl shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-4">
            <ActivityItem
              text="Paracetamol sold (10 units)"
              time="2 mins ago"
              color="green"
            />
            <ActivityItem
              text="Stock low for Amoxicillin"
              time="1 hour ago"
              color="yellow"
            />
            <ActivityItem
              text="New user added: Niki Bhasima"
              time="Today"
              color="blue"
            />
            <ActivityItem text="2 items expired" time="Today" color="red" />
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

/* ---------- Components ---------- */

const QuickStat = ({ label, value, icon, color }: any) => (
  <div
    className={`flex items-center justify-between rounded-2xl p-4 shadow bg-white ${color} transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-[1deg]`}
  >
    <div>
      <p className="text-sm font-medium">{label}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
    <div className="text-3xl opacity-70 hover:rotate-[15deg] hover:shadow-lg transition-all">
      {icon}
    </div>
  </div>
);

const AdminCard = ({ title, value, icon, gradient, trend }: any) => (
  <div className="relative bg-white rounded-3xl p-6 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-[1.05] hover:shadow-3xl hover:-translate-y-1">
    <div
      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradient} opacity-20 rounded-bl-full`}
    />
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className="text-3xl font-bold mt-1">{value}</h2>
    {trend && <p className="text-xs text-gray-400 mt-1">{trend}</p>}
    <div
      className={`mt-4 w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-r ${gradient} transform transition-all hover:rotate-12 hover:scale-110`}
    >
      {icon}
    </div>
  </div>
);

const AdminAction = ({ title, desc, link, icon, color }: any) => (
  <Link
    to={link}
    className={`rounded-2xl p-6 text-white ${color} flex justify-between items-center transform transition-all duration-500 hover:scale-[1.05] hover:shadow-3xl hover:-translate-y-1 hover:rotate-[1deg]`}
  >
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm opacity-90 mt-1">{desc}</p>
    </div>
    <div className="text-3xl opacity-80 hover:rotate-12 transition-all">
      {icon}
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
    <div className="border rounded-2xl p-5 flex justify-between items-center hover:shadow-lg hover:scale-[1.02] transition">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gray-100 rounded-lg hover:scale-110 transition-all">
          {icon}
        </div>
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

const ActivityItem = ({ text, time, color }: any) => {
  const colorMap: any = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
  };
  return (
    <li className="flex justify-between items-center transform transition-all hover:scale-[1.02] hover:bg-gray-50 rounded-lg p-2">
      <div className="flex items-center gap-3">
        <span className={`w-3 h-3 rounded-full ${colorMap[color]}`} />
        <p className="text-sm">{text}</p>
      </div>
      <span className="text-xs text-gray-400">{time}</span>
    </li>
  );
};

export default AdminDashboard;
