import React from "react";
import Table from "./Table";

const App = () => {
  const columns = ["Name", "Email", "Role"];
  const data = [
    { Name: "Aaloka Poudel", Email: "aaloka@example.com", Role: "Admin" },
    { Name: "Niki Bhasima", Email: "niki@example.com", Role: "User" },
    { Name: "Animesh Regmi", Email: "animesh@example.com", Role: "Manager" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Employee Table</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default App;
