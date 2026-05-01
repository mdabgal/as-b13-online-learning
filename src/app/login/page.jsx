"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    const loading = toast.loading("Logging in...");

    try {
      const { data, error } = await authClient.signIn.email({
        email: form.email,
        password: form.password,
      });

      if (error) {
        toast.error(error.message || "Login failed", { id: loading });
        return;
      }

      toast.success("Login successful ", { id: loading });

      router.push("/");

    } catch (err) {
      toast.error("Something went wrong", { id: loading });
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
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button className="btn w-full bg-[#14B8A6] text-white hover:bg-teal-600">
            Login
          </button>

        </form>

        <div className="divider">OR</div>

        <button className="btn w-full border border-gray-300 flex items-center gap-2">
          <FaGoogle /> Continue with Google
        </button>

        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link href="/register" className="text-[#14B8A6] font-semibold">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}