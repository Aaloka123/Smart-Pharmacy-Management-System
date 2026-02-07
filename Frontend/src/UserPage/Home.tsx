import React from "react";
import { Link } from "react-router-dom";
import {
  Package,
  AlertTriangle,
  DollarSign,
  Trash2,
  ArrowRight,
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
  <div className="bg-white rounded-2xl p-5 flex items-center justify-between shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className={`text-3xl font-bold ${color}`}>{value}</h2>
    </div>
    <div className={`${bg} p-3 rounded-full text-white`}>{icon}</div>
  </div>
);

const ActionCard = ({ title, desc, link, color }: any) => (
  <Link
    to={link}
    className={`rounded-xl p-5 text-white ${color} hover:opacity-90 transition flex flex-col justify-between`}
  >
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm opacity-90 mt-1">{desc}</p>
    </div>
    <div className="flex items-center mt-4">
      Go <ArrowRight size={18} className="ml-2" />
    </div>
  </Link>
);

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200">
      <Header />

      <main className="flex-grow p-6 space-y-8 max-w-7xl mx-auto w-full">
        {/* Welcome */}
        <div className="bg-white/70 backdrop-blur-md border border-white rounded-2xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-blue-600">
            PharmaCare Dashboard 💊
          </h1>
          <p className="mt-2 text-gray-600">
            Real-time overview of your pharmacy system.
          </p>
        </div>

        {/* KPI Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Total Medicines"
            value="245"
            color="text-blue-600"
            bg="bg-blue-500"
            icon={<Package size={28} />}
          />
          <KPICard
            title="Low Stock"
            value="18"
            color="text-yellow-600"
            bg="bg-yellow-500"
            icon={<AlertTriangle size={28} />}
          />
          <KPICard
            title="Today's Sales"
            value="Rs 12,450"
            color="text-green-600"
            bg="bg-green-500"
            icon={<DollarSign size={28} />}
          />
          <KPICard
            title="Expired Items"
            value="3"
            color="text-red-600"
            bg="bg-red-500"
            icon={<Trash2 size={28} />}
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
            />
            <ActionCard
              title="New Sale"
              desc="Create invoice"
              link="/sales"
              color="bg-green-600"
            />
            <ActionCard
              title="Reports"
              desc="View analytics"
              link="/reports"
              color="bg-purple-600"
            />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center justify-between">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                Paracetamol sold (10 units)
              </span>
              <span className="text-gray-400">2 mins ago</span>
            </li>

            <li className="flex items-center justify-between">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                Stock low for Amoxicillin
              </span>
              <span className="text-gray-400">1 hour ago</span>
            </li>

            <li className="flex items-center justify-between">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                New medicine added: Vitamin C
              </span>
              <span className="text-gray-400">Today</span>
            </li>

            <li className="flex items-center justify-between text-red-600">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3" />2 items
                expired
              </span>
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
