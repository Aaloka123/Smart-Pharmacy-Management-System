import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const AdminFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-2">
            PharmaCare Admin
          </h3>
          <p className="text-sm text-gray-400">
            Secure and efficient management for your pharmacy system. Monitor
            users, medicines, and analytics from a single panel.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-400">
            <li>
              <a href="/admin/users" className="hover:text-white transition">
                Manage Users
              </a>
            </li>
            <li>
              <a href="/admin/settings" className="hover:text-white transition">
                System Settings
              </a>
            </li>
            <li>
              <a href="/admin/logs" className="hover:text-white transition">
                Audit Logs
              </a>
            </li>
            <li>
              <a href="/reports" className="hover:text-white transition">
                Reports
              </a>
            </li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-2">Connect</h3>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-6 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PharmaCare. All rights reserved.
      </div>
    </footer>
  );
};

export default AdminFooter;
