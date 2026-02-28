import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Medicines", path: "/medicines" },
    { name: "Inventory", path: "/inventory" },
    { name: "Sales", path: "/sales" },
    { name: "Reports", path: "/reports" },
  ];

  const navLinkClass = (path: string) =>
    location.pathname === path
      ? "text-white font-semibold border-b-2 border-white pb-1"
      : "text-blue-100 hover:text-white transition duration-200";

  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">💊</span>
          <h1 className="text-xl font-bold tracking-wide">PharmaCare</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm items-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={navLinkClass(item.path)}
            >
              {item.name}
            </Link>
          ))}

          {/* Admin Button */}
          <Link
            to="/admin"
            className="flex items-center gap-2 ml-2 bg-gray-900 px-4 py-1.5 rounded-lg hover:bg-gray-800 transition duration-200"
          >
            <Shield size={14} />
            Admin
          </Link>

          {/* Login Button */}
          <Link
            to="/login"
            className="ml-2 bg-white text-blue-700 px-4 py-1.5 rounded font-semibold hover:bg-blue-100 transition duration-200"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 px-6 pb-4 space-y-3 text-sm">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-blue-100 hover:text-white transition"
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/admin"
            onClick={() => setIsOpen(false)}
            className="block bg-gray-900 px-4 py-2 rounded-lg text-white hover:bg-gray-800 transition"
          >
            Admin Panel
          </Link>

          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block bg-white text-blue-700 px-4 py-2 rounded font-semibold hover:bg-blue-100 transition"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
