import React, { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
};

const ManageUsers = () => {
  const [users, setUsers] = useState<User[]>([
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
      role: "Pharmacist",
      status: "Active",
    },
    {
      id: 3,
      name: "Ram Sharma",
      email: "ram@gmail.com",
      role: "Customer",
      status: "Blocked",
    },
  ]);

  const [search, setSearch] = useState("");

  const handleDelete = (id: number) => {
    if (window.confirm("Delete this user?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-4">👥 Manage Users</h2>

        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4 w-72 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-gray-500">
                    No users found
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3">{user.id}</td>
                    <td className="p-3 font-medium">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">
                      <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                        {user.role}
                      </span>
                    </td>
                    <td className="p-3">
                      <span
                        className={`font-semibold ${
                          user.status === "Active"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
