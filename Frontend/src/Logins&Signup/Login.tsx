import React, { useState, useEffect } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";

const Login: React.FC = () => {
  const [step, setStep] = useState<"login" | "otp">("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [attempts, setAttempts] = useState(0);
  const [cooldown, setCooldown] = useState(0);

  const MAX_ATTEMPTS = 3;

  // Cooldown timer
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (cooldown > 0) return;

    if (!validateEmail(email) || password.length < 6) {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts >= MAX_ATTEMPTS) {
        setCooldown(10);
        setAttempts(0);
        setError("Too many failed attempts. Try again in 10 seconds.");
      } else {
        setError(
          `Invalid credentials. Attempts left: ${MAX_ATTEMPTS - newAttempts}`,
        );
      }
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStep("otp");
      setSuccess("OTP sent to your email (Use 123456)");
    }, 1500);
  };

  const handleOTPVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (otp !== "123456") {
      setError("Invalid OTP.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      // Simulated JWT token
      localStorage.setItem("token", "fake-jwt-token-12345");

      setSuccess("Authentication successful 🚀 Redirecting...");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-blue-300">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transition-all">
        <h2 className="text-3xl font-bold text-center mb-6">
          {step === "login" ? "Secure Login" : "Verify OTP"}
        </h2>

        {step === "login" && (
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                value={email}
                disabled={cooldown > 0}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  disabled={cooldown > 0}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                />
                <button
                  type="button"
                  className="absolute right-3 top-2 text-indigo-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {cooldown > 0 && (
              <p className="text-yellow-600 text-sm">
                Try again in {cooldown} seconds
              </p>
            )}

            {error && (
              <div className="bg-red-100 text-red-600 p-2 rounded-md text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-100 text-green-600 p-2 rounded-md text-sm">
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || cooldown > 0}
              className="w-full py-2 rounded-lg bg-indigo-600 text-white font-semibold flex justify-center items-center gap-2"
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              {loading ? "Authenticating..." : "Login"}
            </button>
          </form>
        )}

        {step === "otp" && (
          <form onSubmit={handleOTPVerify} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Enter OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            {error && (
              <div className="bg-red-100 text-red-600 p-2 rounded-md text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-100 text-green-600 p-2 rounded-md text-sm">
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 rounded-lg bg-green-600 text-white font-semibold flex justify-center items-center gap-2"
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
