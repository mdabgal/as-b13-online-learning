"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  
  const handleGoogleLogin = async () => {
    toast.loading("Redirecting to Google...");

    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

 
  const handleRegister = async (e) => {
    e.preventDefault();

    if (form.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setLoading(true);
    const loadingToast = toast.loading("Creating your account...");

    try {
      const { data, error } = await authClient.signUp.email({
        name: form.name,
        email: form.email,
        password: form.password,
        image: form.image,
      });

      if (error) {
        toast.error(error.message || "Registration failed", {
          id: loadingToast,
        });
        return;
      }

      toast.success("Account created successfully!", {
        id: loadingToast,
      });

      setForm({
        name: "",
        email: "",
        password: "",
        image: "",
      });

     
      router.push("/login");

    } catch (err) {
      toast.error("Something went wrong", {
        id: loadingToast,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-2xl p-8">

        <h2 className="text-2xl font-bold text-center text-[#14B8A6]">
          Create Account
        </h2>

        {/* form */}
        <form onSubmit={handleRegister} className="mt-6 space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

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
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            value={form.image}
            onChange={(e) =>
              setForm({ ...form, image: e.target.value })
            }
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
            className="btn w-full bg-[#14B8A6] text-white"
          >
            {loading ? "Creating..." : "Register"}
          </button>

        </form>

        <div className="divider">OR</div>

        {/* GOOGLE LOGIN */}
        <button
          onClick={handleGoogleLogin}
          className="btn w-full border border-gray-300 flex items-center gap-2"
        >
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