import React from "react";
import { Github, Linkedin, Twitter, Mail, ShieldCheck } from "lucide-react";

const AdminFooter: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-gray-300 mt-20 shadow-inner backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="text-blue-500" size={26} />
            <h3 className="text-white font-bold text-xl tracking-wide">
              PharmaCare Admin
            </h3>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Secure and efficient pharmacy management platform designed to
            monitor users, medicines, orders, and analytics from one centralized
            dashboard.
          </p>

          <div className="flex items-center gap-2 text-gray-400 text-sm mt-2 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
            <Mail size={18} />
            support@pharmacare.com
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            {[
              { name: "Manage Users", link: "/admin/users" },
              { name: "System Settings", link: "/admin/settings" },
              { name: "Audit Logs", link: "/admin/logs" },
              { name: "Reports", link: "/reports" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="relative inline-block hover:text-white transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
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
                label: "Github",
              },
              {
                icon: <Linkedin size={22} />,
                link: "https://linkedin.com",
                color: "hover:bg-blue-600",
                label: "LinkedIn",
              },
              {
                icon: <Twitter size={22} />,
                link: "https://twitter.com",
                color: "hover:bg-sky-500",
                label: "Twitter",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className={`p-3 bg-gray-800 rounded-full hover:scale-110 transition-all duration-300 shadow-md ${item.color} flex items-center justify-center`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-500 bg-gray-950 tracking-wide">
        © {year} PharmaCare. All rights reserved. | Made with ❤️ for healthcare.
      </div>
    </footer>
  );
};

export default AdminFooter;
