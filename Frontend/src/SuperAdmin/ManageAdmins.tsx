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
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Manage Admins</h1>

      {admins.map((admin) => (
        <div
          key={admin.id}
          className="flex justify-between bg-white p-4 mb-3 shadow rounded"
        >
          <div>
            <h2>{admin.name}</h2>
            <p className="text-gray-500">{admin.email}</p>
          </div>

          <button
            onClick={() => removeAdmin(admin.id)}
            className="text-red-500"
          >
            <Trash2 />
          </button>
        </div>
      ))}

      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2">
        <Plus size={18} /> Add Admin
      </button>
    </div>
  );
};

export default ManageAdmins;
