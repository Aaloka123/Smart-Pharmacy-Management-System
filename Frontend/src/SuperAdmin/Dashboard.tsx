import React from "react";
import { Users, Pill, Store, BarChart3 } from "lucide-react";

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Super Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-blue-500 text-white p-6 rounded-xl shadow">
          <Users size={32} />
          <h2 className="text-lg mt-2">Total Admins</h2>
          <p className="text-2xl font-bold">12</p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-xl shadow">
          <Store size={32} />
          <h2 className="text-lg mt-2">Pharmacies</h2>
          <p className="text-2xl font-bold">8</p>
        </div>

        <div className="bg-purple-500 text-white p-6 rounded-xl shadow">
          <Pill size={32} />
          <h2 className="text-lg mt-2">Medicines</h2>
          <p className="text-2xl font-bold">320</p>
        </div>

        <div className="bg-orange-500 text-white p-6 rounded-xl shadow">
          <BarChart3 size={32} />
          <h2 className="text-lg mt-2">Sales</h2>
          <p className="text-2xl font-bold">Rs 150K</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
