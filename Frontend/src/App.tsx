import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./UserPage/Home";
import Medicines from "./UserPage/MedicinePage";
import Login from "./UserPage/Loginpage";
import AddMedicine from "./UserPage/AddMedicine";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User pages */}
        <Route path="/" element={<Home />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-medicine" element={<AddMedicine />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
