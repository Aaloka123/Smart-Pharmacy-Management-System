import { Bell, LogOut } from "lucide-react";

type AdminHeaderProps = {
  adminName: string;
};

const AdminHeader = ({ adminName }: AdminHeaderProps) => {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      {/* Left */}
      <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>

      {/* Right */}
      <div className="flex items-center gap-5">
        <Bell className="text-gray-500 cursor-pointer hover:text-gray-700" />

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">
            Welcome, <b>{adminName}</b>
          </span>

          <img
            src="https://i.pravatar.cc/40"
            alt="admin"
            className="w-9 h-9 rounded-full border"
          />

          <LogOut className="text-red-500 cursor-pointer hover:text-red-600" />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
