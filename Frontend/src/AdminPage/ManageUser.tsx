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
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Manage Users</h2>

      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", marginBottom: "1rem", width: "300px" }}
      />

      <table width="100%" border={1} cellPadding={10}>
        <thead>
          <tr style={{ background: "#f4f4f4" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.length === 0 ? (
            <tr>
              <td colSpan={6} align="center">
                No users found
              </td>
            </tr>
          ) : (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user.id)}
                    style={{
                      background: "red",
                      color: "white",
                      border: "none",
                      padding: "6px 10px",
                      cursor: "pointer",
                    }}
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
  );
};

export default ManageUsers;
