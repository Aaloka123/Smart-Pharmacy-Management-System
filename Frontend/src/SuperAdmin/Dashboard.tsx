import React from "react";
import { Users, Pill, Store, BarChart3 } from "lucide-react";

const Dashboard: React.FC = () => {
  const today = new Date().toLocaleDateString();

  const cards = [
    {
      title: "Total Admins",
      value: "12",
      icon: <Users size={30} />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Pharmacies",
      value: "8",
      icon: <Store size={30} />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Medicines",
      value: "320",
      icon: <Pill size={30} />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Total Sales",
      value: "Rs 150K",
      icon: <BarChart3 size={30} />,
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Super Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Monitor pharmacies, medicines and sales overview
        </p>

        <p className="text-sm text-gray-400 mt-1">Today: {today}</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${card.color} text-white p-6 rounded-2xl shadow-lg 
            hover:shadow-2xl hover:ring-2 hover:ring-white/40 
            hover:brightness-110
            transform hover:-translate-y-1 hover:scale-105 
            transition-all duration-300`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm opacity-90">{card.title}</p>
                <h2 className="text-3xl font-bold mt-2">{card.value}</h2>
              </div>

              <div className="bg-white/20 p-3 rounded-full">{card.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t mt-10 pt-4"></div>

      {/* Footer */}
      <div className="text-sm text-gray-500">
        Last updated: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Dashboard;
