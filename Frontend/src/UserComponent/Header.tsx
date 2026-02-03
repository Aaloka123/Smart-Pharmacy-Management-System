import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  // Highlight active link
  const navLinkClass = (path: string) =>
    location.pathname === path
      ? "text-white font-semibold border-b-2 border-white pb-1"
      : "text-blue-100 hover:text-white transition";

  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Branding */}
        <div className="flex items-center gap-2">
          <span className="text-2xl"></span>
          <h1 className="text-xl font-bold">PharmaCare</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm">
          <Link to="/" className={navLinkClass("/")}>
            Dashboard
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
        </nav>

        {/* User Info */}
        <div className="flex items-center gap-4 text-sm">
          <div className="text-right hidden sm:block">
            <p className="font-semibold">Admin</p>
            <p className="text-blue-200 text-xs">Pharmacist</p>
          </div>

          <div className="w-9 h-9 bg-white text-blue-700 rounded-full flex items-center justify-center font-bold">
            A
          </div>

          <button className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-xs">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
