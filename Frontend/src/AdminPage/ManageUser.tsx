import React from "react";
import { Users, Trash2, Edit } from "lucide-react";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";

const ManageUsers: React.FC = () => {
  const users = [
    { id: 1, name: "Niki Bhasima", email: "niki@example.com", role: "Admin" },
    {
      id: 2,
      name: "Aaloka Poudel",
      email: "aaloka@example.com",
      role: "Staff",
    },
    { id: 3, name: "Suman Karki", email: "suman@example.com", role: "Staff" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 flex flex-col">
      <Header />

      <main className="flex-1 w-full px-6 py-10">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <Users size={28} />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Manage Users</h1>
                <p className="text-gray-500 text-sm">
                  View, edit and manage system users
                </p>
              </div>
            </div>

            <button className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
              + Add User
            </button>
          </div>

          {/* Table Card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <table className="w-full">
              {/* Table Head */}
              <thead className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wide">
                <tr>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Role</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-4 font-medium">{user.name}</td>
                    <td className="p-4 text-gray-600">{user.email}</td>

                    {/* Role Badge */}
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          user.role === "Admin"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="p-4">
                      <div className="flex justify-center gap-3">
                        <button className="flex items-center gap-1 px-3 py-1.5 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition">
                          <Edit size={16} />
                          Edit
                        </button>

                        <button className="flex items-center gap-1 px-3 py-1.5 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition">
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ManageUsers;
