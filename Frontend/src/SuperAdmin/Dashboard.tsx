import React from "react";
import { Users, Pill, Store, BarChart3 } from "lucide-react";

const Dashboard: React.FC = () => {
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
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Super Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${card.color} text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300`}
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
    </div>
  );
};

export default Dashboard;
