"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectPath = searchParams.get("redirect") || "/";

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    const toastId = toast.loading("Logging in...");

    try {
      const { error } = await authClient.signIn.email({
        email: form.email,
        password: form.password,
      });

      if (error) {
        toast.error(error.message || "Login failed", { id: toastId });
        setLoading(false);
        return;
      }

      toast.success("Login successful", { id: toastId });

      router.push(redirectPath);

    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
  const toastId = toast.loading("Redirecting to Google...");

  try {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: redirectPath,
    });

  
    toast.success("Redirecting...", { id: toastId });

  } catch (err) {
    toast.error("Google login failed", { id: toastId });
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
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required
          />

          <button
            disabled={loading}
            className="btn w-full bg-[#14B8A6] text-white hover:bg-teal-600"
          >
            Login
          </button>

        </form>

        <div className="divider">OR</div>

       
        <button
          onClick={handleGoogleLogin}
          className="btn w-full border border-gray-300 flex items-center gap-2"
        >
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