import React from "react";
import { Facebook, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-800 text-white mt-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* System Info */}
        <div>
          <h2 className="text-xl font-bold tracking-wide">PharmaCare</h2>
          <p className="text-sm text-blue-100 mt-3 leading-relaxed">
            Smart Pharmacy Management System designed for efficient inventory,
            sales tracking, and real-time reporting.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            {["Home", "Medicines", "Inventory", "Sales", "Reports"].map(
              (item, index) => (
                <li
                  key={index}
                  className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Contact & System Info */}
        <div>
          <h3 className="font-semibold mb-3">Contact & Info</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li className="flex items-center gap-2 hover:text-white transition">
              <Mail size={16} />
              support@pharmacare.com
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <Phone size={16} />
              +977-9800000000
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <Facebook size={16} />
              PharmaCare Official
            </li>
            <li className="mt-2">Version: 1.0.1</li>
            <li>Status: Live</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-600 text-center text-sm py-4 text-blue-100">
        © {currentYear} PharmaCare | Developed by Aaloka Poudel | All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
