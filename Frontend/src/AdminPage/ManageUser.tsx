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
    <div style={{ padding: "2rem", background: "#f3f6fb", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          background: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>👥 Manage Users</h2>

        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px 14px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            width: "300px",
            marginBottom: "1.5rem",
          }}
        />

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#2563eb", color: "white" }}>
              <th style={th}>ID</th>
              <th style={th}>Name</th>
              <th style={th}>Email</th>
              <th style={th}>Role</th>
              <th style={th}>Status</th>
              <th style={th}>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  style={{ textAlign: "center", padding: "1rem" }}
                >
                  No users found
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={td}>{user.id}</td>
                  <td style={td}>{user.name}</td>
                  <td style={td}>{user.email}</td>
                  <td style={td}>
                    <span
                      style={{
                        background: "#e0e7ff",
                        padding: "4px 10px",
                        borderRadius: "20px",
                        fontSize: "13px",
                      }}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td style={td}>
                    <span
                      style={{
                        color: user.status === "Active" ? "green" : "red",
                        fontWeight: "bold",
                      }}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td style={td}>
                    <button
                      onClick={() => handleDelete(user.id)}
                      style={{
                        background: "#ef4444",
                        color: "white",
                        border: "none",
                        padding: "6px 14px",
                        borderRadius: "6px",
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
    </div>
  );
};

const th = { padding: "12px", textAlign: "left" };
const td = { padding: "12px" };

export default ManageUsers;
