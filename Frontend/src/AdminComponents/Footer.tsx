import React from "react";
import { Github, Linkedin, Twitter, Mail, ShieldCheck } from "lucide-react";

const AdminFooter: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="text-blue-500" size={24} />
            <h3 className="text-white font-bold text-xl">PharmaCare Admin</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Secure and efficient pharmacy management platform. Monitor users,
            medicines, and analytics from a single, centralized admin dashboard.
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
            <Mail size={18} />
            support@pharmacare.com
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {[
              { name: "Manage Users", link: "/admin/users" },
              { name: "System Settings", link: "/admin/settings" },
              { name: "Audit Logs", link: "/admin/logs" },
              { name: "Reports", link: "/reports" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:text-white hover:translate-x-2 transition-all duration-200 inline-block"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social / Connect */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold text-lg">Connect With Us</h3>
          <div className="flex items-center gap-4">
            {[
              {
                icon: <Github size={22} />,
                link: "https://github.com",
                color: "hover:bg-gray-700",
              },
              {
                icon: <Linkedin size={22} />,
                link: "https://linkedin.com",
                color: "hover:bg-blue-600",
              },
              {
                icon: <Twitter size={22} />,
                link: "https://twitter.com",
                color: "hover:bg-sky-500",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={`p-3 bg-gray-800 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg ${item.color} flex items-center justify-center`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-400 bg-gray-900">
        © {new Date().getFullYear()} PharmaCare. All rights reserved. | Made
        with ❤️ for healthcare.
      </div>
    </footer>
  );
};

export default AdminFooter;
