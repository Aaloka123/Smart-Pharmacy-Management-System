import React from "react";
import { Link } from "react-router-dom";
import {
  Package,
  AlertTriangle,
  DollarSign,
  Trash2,
  ArrowRight,
  Plus,
  BarChart3,
  ShoppingCart,
} from "lucide-react";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";

interface KPICardProps {
  title: string;
  value: string;
  color: string;
  bg: string;
  icon: React.ReactNode;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, color, bg, icon }) => (
  <div className="relative bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
    <div className="absolute -top-3 -right-3 opacity-10 text-6xl">{icon}</div>
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className={`text-3xl font-bold ${color}`}>{value}</h2>
    <div className={`${bg} w-10 h-1 rounded-full mt-3`} />
  </div>
);

const ActionCard = ({ title, desc, link, color, icon }: any) => (
  <Link
    to={link}
    className={`rounded-xl p-6 text-white ${color} hover:opacity-90 transition-all hover:-translate-y-1 shadow-lg flex justify-between items-center`}
  >
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm opacity-90">{desc}</p>
    </div>
    <div className="text-3xl opacity-80">{icon}</div>
  </Link>
);

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 to-slate-200">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto p-6 space-y-8">
        {/* Hero */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">PharmaCare Dashboard 💊</h1>
            <p className="opacity-90 mt-1">Smart pharmacy management system</p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-80">System Status</p>
            <p className="font-bold text-green-300">All services running</p>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Total Medicines"
            value="245"
            color="text-blue-600"
            bg="bg-blue-500"
            icon={<Package />}
          />
          <KPICard
            title="Low Stock"
            value="18"
            color="text-yellow-600"
            bg="bg-yellow-500"
            icon={<AlertTriangle />}
          />
          <KPICard
            title="Today's Sales"
            value="Rs 12,450"
            color="text-green-600"
            bg="bg-green-500"
            icon={<DollarSign />}
          />
          <KPICard
            title="Expired Items"
            value="3"
            color="text-red-600"
            bg="bg-red-500"
            icon={<Trash2 />}
          />
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <ActionCard
              title="Add Medicine"
              desc="Register new products"
              link="/add-product"
              color="bg-blue-600"
              icon={<Plus />}
            />
            <ActionCard
              title="New Sale"
              desc="Create invoice"
              link="/sales"
              color="bg-green-600"
              icon={<ShoppingCart />}
            />
            <ActionCard
              title="Reports"
              desc="View analytics"
              link="/reports"
              color="bg-purple-600"
              icon={<BarChart3 />}
            />
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

          <div className="space-y-5 relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-200" />

            <ActivityItem
              color="bg-green-500"
              text="Paracetamol sold (10 units)"
              time="2 mins ago"
            />
            <ActivityItem
              color="bg-yellow-500"
              text="Stock low for Amoxicillin"
              time="1 hour ago"
            />
            <ActivityItem
              color="bg-blue-500"
              text="New medicine added: Vitamin C"
              time="Today"
            />
            <ActivityItem
              color="bg-red-500"
              text="2 items expired"
              time="Today"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const ActivityItem = ({ color, text, time }: any) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <span className={`w-3 h-3 rounded-full ${color}`} />
      <p className="text-sm">{text}</p>
    </div>
    <span className="text-xs text-gray-400">{time}</span>
  </div>
);

export default Home;
