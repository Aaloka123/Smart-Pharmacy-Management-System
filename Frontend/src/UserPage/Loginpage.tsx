import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, ShieldCheck } from "lucide-react";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      if (email === "admin@pharma.com" && password === "admin123") {
        navigate("/");
      } else {
        setError("Invalid email or password");
      }
    } else {
      if (name && email && password) {
        alert("Account created successfully!");
        setIsLogin(true);
      } else {
        setError("Please fill all fields");
      }
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Branding */}
      <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-700 to-blue-500 text-white p-10">
        <ShieldCheck size={80} />
        <h1 className="text-4xl font-bold mt-4">PharmaCare</h1>
        <p className="mt-2 text-center max-w-sm opacity-90">
          Smart Pharmacy Management System for inventory, billing and analytics.
        </p>
      </div>

      {/* Right Form */}
      <div className="flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
          <h2 className="text-2xl font-bold text-center mb-2">
            {isLogin ? "Welcome Back 👋" : "Create Account"}
          </h2>
          <p className="text-center text-gray-500 mb-6">
            {isLogin
              ? "Login to manage your pharmacy"
              : "Start managing your pharmacy today"}
          </p>

          {/* Tabs */}
          <div className="flex mb-6 bg-gray-100 rounded-lg overflow-hidden">
            <button
              onClick={() => setIsLogin(true)}
              className={`w-1/2 py-2 font-semibold ${
                isLogin ? "bg-blue-600 text-white" : ""
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`w-1/2 py-2 font-semibold ${
                !isLogin ? "bg-blue-600 text-white" : ""
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border pl-10 pr-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="admin@pharma.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border pl-10 pr-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="admin123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border pl-10 pr-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-semibold"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
          </form>

          <p className="text-xs text-gray-400 text-center mt-6">
            © {new Date().getFullYear()} PharmaCare System
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
