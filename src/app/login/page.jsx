"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  const [form, setForm] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(form);
    try {
      console.log(form);

      toast.success("Login successful ");
    } catch (error) {
      toast.error("Login failed ");
    }


  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-2xl p-8">

        <h2 className="text-2xl font-bold text-center text-[#14B8A6]">
          Login to SkillSphere
        </h2>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="btn w-full bg-[#14B8A6] text-white hover:bg-teal-600">
            Login
          </button>
        </form>

        {/* OR */}
        <div className="divider">OR</div>

        {/* Google Login */}
        <button className="btn w-full border border-gray-300 flex items-center gap-2">
          <FaGoogle /> Continue with Google
        </button>

        {/* Register Link */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link href="/register" className="text-[#14B8A6] font-semibold">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}