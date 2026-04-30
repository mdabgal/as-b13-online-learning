"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

export default function RegisterPage() {
  const [form, setForm] = useState({});

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(form);
  

    try {
      
      console.log(form);

      toast.success("Registration successful ");
    } catch (error) {
      toast.error("Registration failed ");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-2xl p-8">

        <h2 className="text-2xl font-bold text-center text-[#14B8A6]">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="mt-6 space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="btn w-full bg-[#14B8A6] text-white hover:bg-teal-600">
            Register
          </button>
        </form>

      
        <div className="divider">OR</div>

        <button className="btn w-full border border-gray-300 flex items-center gap-2">
          <FaGoogle /> Continue with Google
        </button>

       
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-[#14B8A6] font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}