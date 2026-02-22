import { Bell, LogOut } from "lucide-react";

type AdminHeaderProps = {
  adminName: string;
};

const AdminHeader = ({ adminName }: AdminHeaderProps) => {
  return (
    <header className="h-16 bg-white shadow-md flex items-center justify-between px-6">
      {/* Left: Title */}
      <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>

      {/* Right: Notifications + Profile */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <div className="relative cursor-pointer">
          <Bell className="text-gray-500 hover:text-gray-700 transition-colors duration-200" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">
            Welcome, <b>{adminName}</b>
          </span>

          <img
            src="https://i.pravatar.cc/40"
            alt="admin"
            className="w-10 h-10 rounded-full border-2 border-gray-300"
          />

          <div className="relative group">
            <LogOut className="text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200" />
            <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Logout
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
