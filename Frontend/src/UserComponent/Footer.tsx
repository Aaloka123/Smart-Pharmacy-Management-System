import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-700 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* System Info */}
        <div>
          <h2 className="text-lg font-bold">PharmaCare</h2>
          <p className="text-sm text-blue-100 mt-2">
            Smart Pharmacy Management System for efficient inventory, sales, and
            reporting.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-blue-100">
            <li className="hover:text-white cursor-pointer">Dashboard</li>
            <li className="hover:text-white cursor-pointer">Medicines</li>
            <li className="hover:text-white cursor-pointer">Inventory</li>
            <li className="hover:text-white cursor-pointer">Sales</li>
            <li className="hover:text-white cursor-pointer">Reports</li>
          </ul>
        </div>

        {/* Contact / Meta */}
        <div>
          <h3 className="font-semibold mb-2">System Info</h3>
          <ul className="space-y-1 text-sm text-blue-100">
            <li>Version: 1.0.0</li>
            <li>Status: Live</li>
            <li>Support: support@pharmacare.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-600 text-center text-sm py-3 text-blue-100">
        © {new Date().getFullYear()} PharmaCare | Developed by Aaloka Poudel |
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
