"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const [open, setOpen] = useState(false);


    const avatar =
    typeof session?.user?.image === "string" &&
    session.user.image.startsWith("http")
      ? session.user.image
      : "/userAvatar.png";

  return (
    <div className="navbar bg-base-100 shadow px-6 relative">

      {/* LEFT - LOGO */}
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold text-[#14B8A6]">
          SkillSphere
        </Link>
      </div>

      {/* CENTER MENU (TRUE CENTER) */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-6">

        <Link href="/" className="hover:text-teal-500">
          Home
        </Link>

        <Link href="/courses" className="hover:text-teal-500">
          Courses
        </Link>

        <Link href="/profile" className="hover:text-teal-500">
          My Profile
        </Link>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 ml-auto">

        {/* MOBILE MENU BTN */}
        <button
          onClick={() => setOpen(!open)}
          className="btn btn-sm md:hidden"
        >
          ☰
        </button>

        {/* AUTH (DESKTOP) */}
        <div className="hidden md:flex items-center gap-3">

          {session?.user ? (
            <>
             <Image
  src={avatar}
  alt="User avatar"
  width={60}
  height={60}
  className="w-10 h-10 rounded-full border"
/>

              <span className="text-sm font-semibold">
                {session.user.name}
              </span>

              <button
                onClick={() => authClient.signOut()}
                className="btn btn-sm btn-error text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-sm btn-outline">
                Login
              </Link>
              <Link href="/register" className="btn btn-sm bg-[#14B8A6] text-white">
                Register
              </Link>
            </>
          )}

        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-base-100 shadow-md flex flex-col gap-3 p-4 md:hidden z-50">

          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/courses" onClick={() => setOpen(false)}>Courses</Link>
          <Link href="/profile" onClick={() => setOpen(false)}>My Profile</Link>

          <hr />

          {session?.user ? (
            <>
              <div className="flex items-center gap-2">
                <img
                  src={session.user.image || "/user.png"}
                  className="w-10 h-10 rounded-full"
                />
                <span>{session.user.name}</span>
              </div>

              <button
                onClick={() => {
                  authClient.signOut();
                  setOpen(false);
                }}
                className="btn btn-sm btn-error text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-sm btn-outline">
                Login
              </Link>
              <Link href="/register" className="btn btn-sm bg-[#14B8A6] text-white">
                Register
              </Link>
            </>
          )}

        </div>
      )}

    </div>
  );
}