import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./UserPage/Home";
import Medicines from "./UserPage/MedicinePage";
import Login from "./UserPage/Loginpage";
import AddMedicine from "./UserPage/AddMedicine";
import Inventory from "./UserPage/Inventory";
import Reports from "./UserPage/Reports";
import Sales from "./UserPage/Sales";
import AdminDashboard from "./AdminPage/AdminDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User pages */}
        <Route path="/" element={<Home />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-medicine" element={<AddMedicine />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
