import React, { useState } from "react";
import { Trash2, Plus } from "lucide-react";

interface Admin {
  id: number;
  name: string;
  email: string;
}

const ManageAdmins: React.FC = () => {
  const [admins, setAdmins] = useState<Admin[]>([
    { id: 1, name: "Admin One", email: "admin1@gmail.com" },
    { id: 2, name: "Admin Two", email: "admin2@gmail.com" },
  ]);

  const removeAdmin = (id: number) => {
    setAdmins(admins.filter((admin) => admin.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Manage Admins</h1>

        {admins.map((admin) => (
          <div
            key={admin.id}
            className="flex items-center justify-between bg-white p-4 mb-4 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div>
              <h2 className="font-semibold text-gray-800">{admin.name}</h2>
              <p className="text-sm text-gray-500">{admin.email}</p>
            </div>

            <button
              onClick={() => removeAdmin(admin.id)}
              className="text-red-500 hover:bg-red-100 p-2 rounded transition"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}

        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition">
          <Plus size={18} /> Add Admin
        </button>
      </div>
    </div>
  );
};

export default ManageAdmins;
