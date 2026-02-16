import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield } from "lucide-react";

const Header: React.FC = () => {
  const location = useLocation();

  const navLinkClass = (path: string) =>
    location.pathname === path
      ? "text-white font-semibold border-b-2 border-white pb-1"
      : "text-blue-100 hover:text-white transition";

  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">💊</span>
          <h1 className="text-xl font-bold">PharmaCare</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm items-center">
          <Link to="/" className={navLinkClass("/")}>
            Home
          </Link>
          <Link to="/medicines" className={navLinkClass("/medicines")}>
            Medicines
          </Link>
          <Link to="/inventory" className={navLinkClass("/inventory")}>
            Inventory
          </Link>
          <Link to="/sales" className={navLinkClass("/sales")}>
            Sales
          </Link>
          <Link to="/reports" className={navLinkClass("/reports")}>
            Reports
          </Link>

          {/* ADMIN BUTTON */}
          <Link
            to="/admin"
            className="flex items-center gap-2 ml-2 bg-gray-900 px-4 py-1.5 rounded-lg hover:bg-gray-800 transition"
          >
            <Shield size={14} />
            Admin
          </Link>

          {/* LOGIN BUTTON */}
          <Link
            to="/login"
            className="ml-2 bg-white text-blue-700 px-4 py-1.5 rounded font-semibold hover:bg-blue-100"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
