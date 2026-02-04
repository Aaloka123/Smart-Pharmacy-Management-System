import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple demo authentication
    if (email === "admin@pharma.com" && password === "admin123") {
      setError("");
      navigate("/"); // Redirect to Home
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-700 text-center">
          PharmaCare Login
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Sign in to manage your pharmacy
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          {error && <p className="text-red-600 text-sm">{error}</p>}

          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@pharma.com"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold mt-2"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-gray-400 text-xs text-center mt-6">
          © {new Date().getFullYear()} PharmaCare. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
