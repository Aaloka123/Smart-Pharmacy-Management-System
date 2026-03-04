import React, { useState, useEffect } from "react";
import { Eye, EyeOff, Loader2, Moon, Sun } from "lucide-react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [capsLock, setCapsLock] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [locked, setLocked] = useState(false);

  const MAX_ATTEMPTS = 3;

  useEffect(() => {
    if (attempts >= MAX_ATTEMPTS) {
      setLocked(true);
      setError("Account locked due to multiple failed attempts.");
    }
  }, [attempts]);

  const handleCapsLock = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setCapsLock(e.getModifierState("CapsLock"));
  };

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (locked) return;

    if (!validateEmail(email) || password.length < 6) {
      setAttempts((prev) => prev + 1);
      setError(
        `Invalid credentials. Attempts left: ${MAX_ATTEMPTS - attempts - 1}`,
      );
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (email === "admin@gmail.com" && password === "Admin123") {
        setSuccess("Admin login successful 🚀 Redirecting...");
      } else {
        setSuccess("User login successful 🎉 Redirecting...");
      }

      setAttempts(0);
    }, 1500);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-indigo-100 to-blue-200"
      }`}
    >
      <div
        className={`p-8 rounded-2xl shadow-2xl w-full max-w-md ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Dark Mode Toggle */}
        <div className="flex justify-end mb-2">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <h2 className="text-3xl font-bold text-center mb-6">Secure Login</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              disabled={locked}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none text-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                disabled={locked}
                onKeyUp={handleCapsLock}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none text-black"
              />
              <button
                type="button"
                className="absolute right-3 top-2 text-indigo-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {capsLock && (
              <p className="text-yellow-500 text-sm mt-1">⚠ Caps Lock is ON</p>
            )}
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-100 text-red-600 p-2 rounded-md text-sm">
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="bg-green-100 text-green-600 p-2 rounded-md text-sm">
              {success}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading || locked}
            className={`w-full py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition ${
              loading || locked
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            {loading && <Loader2 className="animate-spin" size={18} />}
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
