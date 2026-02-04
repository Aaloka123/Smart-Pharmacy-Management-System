import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./UserPage/Home";
import Medicines from "./UserPage/MedicinePage";
import Login from "./UserPage/Loginpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User pages */}
        <Route path="/" element={<Home />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
