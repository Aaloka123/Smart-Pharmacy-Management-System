import React, { useState } from "react";
import {
  Users,
  Search,
  Edit,
  Trash2,
  Shield,
  UserCheck,
  UserX,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";

const ManageUsers: React.FC = () => {
  const [search, setSearch] = useState("");

  const users = [
    {
      id: 1,
      name: "Aaloka Poudel",
      email: "aaloka@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Niki Bhasima",
      email: "niki@gmail.com",
      role: "Staff",
      status: "Active",
    },
    {
      id: 3,
      name: "Ramesh Karki",
      email: "ramesh@gmail.com",
      role: "Staff",
      status: "Inactive",
    },
  ];

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Users className="text-blue-600 animate-pulse" />
            Manage Users
          </h1>
          <Link
            to="/admin"
            className="flex items-center gap-2 text-sm bg-gray-800 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl shadow p-4 mb-6 flex items-center gap-3">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Role</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-t hover:bg-gray-50">
                  <td className="p-4 font-medium">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4 flex items-center gap-1">
                    <Shield size={14} /> {user.role}
                  </td>
                  <td className="p-4">
                    {user.status === "Active" ? (
                      <span className="flex items-center gap-1 text-green-600">
                        <UserCheck size={14} /> Active
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-red-600">
                        <UserX size={14} /> Inactive
                      </span>
                    )}
                  </td>
                  <td className="p-4 flex justify-center gap-3">
                    <button className="text-blue-600 hover:scale-110">
                      <Edit size={16} />
                    </button>
                    <button className="text-red-600 hover:scale-110">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-gray-400">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ManageUsers;
