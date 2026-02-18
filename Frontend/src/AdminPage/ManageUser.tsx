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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto p-6">
        <div className="flex items-center gap-3 mb-6">
          <Users className="text-blue-600" />
          <h1 className="text-3xl font-bold">Manage Users</h1>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3 flex gap-3">
                    <button className="text-blue-600 hover:underline flex items-center gap-1">
                      <Edit size={16} />
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline flex items-center gap-1">
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ManageUsers;
