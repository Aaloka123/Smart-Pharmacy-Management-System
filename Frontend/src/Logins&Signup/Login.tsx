import React, { useState, useEffect } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  // Email validation
  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Strong password validation
  const validatePassword = (password: string) => {
    const strongPassword = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;
    return strongPassword.test(password);
  };

  // Real-time form validation
  useEffect(() => {
    if (validateEmail(email) && validatePassword(password)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, password]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!isFormValid) {
      setError(
        "Please enter a valid email and a strong password (Min 6 chars, 1 uppercase, 1 number).",
      );
      return;
    }

    setLoading(true);

    // Simulated API call
    setTimeout(() => {
      setLoading(false);

      // Simulated role check
      if (email === "admin@gmail.com") {
        setSuccess("Admin login successful!");
      } else {
        setSuccess("User login successful!");
      }

      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      }

      setTimeout(() => {
        setSuccess("");
      }, 2500);

      setEmail("");
      setPassword("");
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-gray-600"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-gray-600"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter strong password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-sm text-indigo-500 font-medium hover:text-indigo-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="accent-indigo-500"
              />
              <span>Remember Me</span>
            </label>

            <a href="#" className="text-indigo-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-100 text-red-600 text-sm p-2 rounded-md">
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="bg-green-100 text-green-600 text-sm p-2 rounded-md">
              {success}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`w-full py-2 rounded-lg text-white font-semibold transition-all duration-300 ${
              !isFormValid || loading
                ? "bg-indigo-300 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 hover:scale-105"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-indigo-600 font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
