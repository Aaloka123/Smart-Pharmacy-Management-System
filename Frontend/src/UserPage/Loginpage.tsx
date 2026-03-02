import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  User,
  ShieldCheck,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  // Auto-login if remembered
  useEffect(() => {
    const savedUser = localStorage.getItem("pharmaUser");
    if (savedUser) {
      navigate("/");
    }
  }, [navigate]);

  const resetErrors = () => setError("");

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password || (!isLogin && !name)) {
      setError("Please fill all required fields.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (isLogin) {
        if (email === "admin@pharma.com" && password === "admin123") {
          if (remember) {
            localStorage.setItem("pharmaUser", email);
          }
          navigate("/");
        } else {
          setError("Invalid email or password.");
        }
      } else {
        alert("Account created successfully! Please login.");
        setIsLogin(true);
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Branding */}
      <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-800 to-blue-500 text-white p-10">
        <ShieldCheck size={80} />
        <h1 className="text-4xl font-bold mt-4">PharmaCare</h1>
        <p className="mt-2 text-center max-w-sm opacity-90">
          Secure pharmacy management for inventory, billing, and analytics.
        </p>
      </div>

      {/* Right Form */}
      <div className="flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
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
              onClick={() => {
                setIsLogin(true);
                resetErrors();
              }}
              className={`w-1/2 py-2 font-semibold ${
                isLogin ? "bg-blue-600 text-white" : ""
              }`}
            >
              Login
            </button>
            <button
              onClick={() => {
                setIsLogin(false);
                resetErrors();
              }}
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
                  onChange={(e) => {
                    setName(e.target.value);
                    resetErrors();
                  }}
                  className="w-full border pl-10 pr-4 py-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="admin@pharma.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  resetErrors();
                }}
                className="w-full border pl-10 pr-4 py-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  resetErrors();
                }}
                className="w-full border pl-10 pr-10 py-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                  />
                  Remember Me
                </label>
                <span className="text-blue-600 cursor-pointer hover:underline">
                  Forgot Password?
                </span>
              </div>
            )}

            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-lg font-semibold flex justify-center items-center gap-2 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {loading && <Loader2 size={16} className="animate-spin" />}
              {loading ? "Processing..." : isLogin ? "Login" : "Create Account"}
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
