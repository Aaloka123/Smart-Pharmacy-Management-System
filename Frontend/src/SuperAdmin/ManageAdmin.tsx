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

  const [search, setSearch] = useState("");

  // Delete Admin with confirmation
  const removeAdmin = (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this admin?",
    );
    if (confirmDelete) {
      setAdmins(admins.filter((admin) => admin.id !== id));
    }
  };

  // Filter admins by name or email
  const filteredAdmins = admins.filter(
    (admin) =>
      admin.name.toLowerCase().includes(search.toLowerCase()) ||
      admin.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Manage Admins</h1>

        {/* Admin Count */}
        <p className="text-gray-600 mb-4">
          Total Admins: <span className="font-semibold">{admins.length}</span>
        </p>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search admins..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Admin List or Empty State */}
        {filteredAdmins.length === 0 ? (
          <div className="bg-white p-6 text-center rounded-lg shadow">
            <p className="text-gray-500">No admins available</p>
          </div>
        ) : (
          filteredAdmins.map((admin) => (
            <div
              key={admin.id}
              className="flex items-center justify-between bg-white p-4 mb-4 border rounded-lg shadow-sm hover:shadow-md hover:border-blue-400 transition"
            >
              {/* Avatar + Admin Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-semibold">
                  {admin.name.charAt(0)}
                </div>

                <div>
                  <h2 className="font-semibold text-gray-800">{admin.name}</h2>
                  <p className="text-sm text-gray-500">{admin.email}</p>
                </div>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => removeAdmin(admin.id)}
                className="text-red-500 hover:bg-red-100 p-2 rounded transition"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))
        )}

        {/* Add Admin Button */}
        <div className="flex justify-end mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition group">
            <Plus
              size={18}
              className="group-hover:rotate-90 transition-transform"
            />
            Add Admin
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Pharmacy Management System • Super Admin Panel
        </p>
      </div>
    </div>
  );
};

export default ManageAdmins;
