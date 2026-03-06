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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addAdmin = () => {
    if (!name || !email) return;

    const newAdmin: Admin = {
      id: Date.now(),
      name,
      email,
    };

    setAdmins([...admins, newAdmin]);
    setName("");
    setEmail("");
  };

  const removeAdmin = (id: number) => {
    setAdmins(admins.filter((admin) => admin.id !== id));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Manage Admins</h1>

      {/* Add Admin Form */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Add New Admin</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Admin Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          onClick={addAdmin}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
        >
          <Plus size={18} />
          Add Admin
        </button>
      </div>

      {/* Admin List */}
      <div className="space-y-4">
        {admins.map((admin) => (
          <div
            key={admin.id}
            className="flex justify-between items-center bg-white p-4 shadow-md rounded-xl hover:shadow-lg transition"
          >
            <div>
              <h2 className="font-semibold text-gray-800">{admin.name}</h2>
              <p className="text-gray-500 text-sm">{admin.email}</p>
            </div>

            <button
              onClick={() => removeAdmin(admin.id)}
              className="text-red-500 hover:text-red-700 transition"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAdmins;
