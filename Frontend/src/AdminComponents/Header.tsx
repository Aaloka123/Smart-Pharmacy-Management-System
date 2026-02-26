import { Bell, LogOut, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type AdminHeaderProps = {
  adminName: string;
  notificationCount?: number;
  onLogout?: () => void;
};

const AdminHeader = ({
  adminName,
  notificationCount = 3,
  onLogout,
}: AdminHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 h-16 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm flex items-center justify-between px-8">
      {/* Left: Title */}
      <h1 className="text-xl font-bold text-gray-800 tracking-wide">
        Admin Dashboard
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-8">
        {/* Notification */}
        <button className="relative cursor-pointer group focus:outline-none">
          <Bell
            size={22}
            className="text-gray-500 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300"
          />

          {notificationCount > 0 && (
            <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] text-[10px] flex items-center justify-center rounded-full bg-red-500 text-white animate-pulse">
              {notificationCount}
            </span>
          )}
        </button>

        {/* Profile Section */}
        <div className="flex items-center gap-4 relative" ref={dropdownRef}>
          <span className="text-sm text-gray-600 hidden sm:block">
            Welcome,{" "}
            <span className="font-semibold text-gray-800">{adminName}</span>
          </span>

          {/* Avatar Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="admin profile"
              className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500 hover:scale-105 transition-all duration-300"
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 top-14 w-40 bg-white rounded-xl shadow-lg border py-2 animate-fadeIn">
              <button className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100 text-sm text-gray-700">
                <User size={16} />
                Profile
              </button>

              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 w-full hover:bg-red-50 text-sm text-red-500"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
