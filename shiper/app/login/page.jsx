"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Montserrat } from "next/font/google";

const montrasset = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
})

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.msg || "Login failed");

      alert("Login successful!");
      window.location.href = "/";
    } catch (err) {
      alert("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google"; // replace with your OAuth endpoint
  };

  return (
    <div className={`${montrasset.className} min-h-screen flex items-center justify-center bg-gray-50 px-4`}>
      <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Login to Your Account
        </h2>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full border border-gray-300 rounded-md py-2 text-gray-700 hover:shadow-md transition"
        >
          <FcGoogle className="mr-2 text-xl" />
          Continue with Google
        </button>

        <div className="relative flex items-center justify-center">
          <span className="border-b w-full border-gray-300"></span>
          <span className="absolute bg-white px-4 text-gray-500 text-sm">
            OR
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full border px-4 text-black py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full text-black border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <span
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <a href="/forgotpass" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
            <a href="/register" className="text-blue-600 hover:underline border-b">
              Don't Have An Account?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
