import { Bell, LogOut } from "lucide-react";

type AdminHeaderProps = {
  adminName: string;
};

const AdminHeader = ({ adminName }: AdminHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 h-16 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm flex items-center justify-between px-8">
      {/* Left: Title */}
      <h1 className="text-xl font-bold text-gray-800 tracking-wide">
        Admin Dashboard
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-8">
        {/* Notification */}
        <div className="relative cursor-pointer group">
          <Bell
            size={22}
            className="text-gray-500 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300"
          />

          {/* Notification Badge */}
          <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] text-[10px] flex items-center justify-center rounded-full bg-red-500 text-white animate-pulse">
            3
          </span>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600 hidden sm:block">
            Welcome,{" "}
            <span className="font-semibold text-gray-800">{adminName}</span>
          </span>

          {/* Avatar */}
          <img
            src="https://i.pravatar.cc/40"
            alt="admin profile"
            className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500 hover:scale-105 transition-all duration-300 cursor-pointer"
          />

          {/* Logout */}
          <div className="relative group">
            <LogOut
              size={20}
              aria-label="Logout"
              className="text-red-500 cursor-pointer hover:text-red-600 hover:scale-110 transition-all duration-300"
            />

            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs rounded-md px-3 py-1 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 shadow-lg">
              Logout
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
