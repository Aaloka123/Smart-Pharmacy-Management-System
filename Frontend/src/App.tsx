import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./UserPage/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User pages */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
