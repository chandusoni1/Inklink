"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignPage() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authToken");
      if (token) {
        router.push("/");
      }
    }
  }, [router]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const url = isNewUser
      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}api/auth/register`
      : `${process.env.NEXT_PUBLIC_BACKEND_URL}api/auth/login`;

    const payload = isNewUser
      ? formData
      : {
          email: formData.email.trim(),
          password: formData.password,
        };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error("Invalid JSON response from server");
      }

      if (res.ok) {
        setMessage(`✅ ${data.message || "Success"}`);
        if (data.token) {
          localStorage.setItem("authToken", data.token);
          localStorage.setItem("user", JSON.stringify({ name: data.name || formData.name }));
        }
        setTimeout(() => router.push("/"), 1000);
      } else {
        setMessage(`❌ ${data.error || data.message || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Frontend error:", error);
      setMessage("❌ Server error. Please check backend logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-md text-white">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isNewUser ? "Create Account" : "Sign In"}
        </h2>

        {message && <p className="mb-4 text-center text-yellow-300">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isNewUser && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-700 rounded"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 rounded"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-700 rounded pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-indigo-400 focus:outline-none"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full p-2 rounded ${
              loading ? "bg-gray-600" : "bg-indigo-600 hover:bg-indigo-700 transition"
            }`}
          >
            {loading ? "Processing..." : isNewUser ? "Register" : "Login"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-300">
          {isNewUser ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className="text-indigo-400 underline"
            onClick={() => {
              setIsNewUser(!isNewUser);
              setMessage("");
            }}
          >
            {isNewUser ? "Sign In" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
}
