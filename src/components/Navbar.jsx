"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

export default function Navbar() {
  const [user, setUser] = useState(null); 

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-10">
      
     
      <div className="navbar-start">
       
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><Link href="/">Home</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/profile">My Profile</Link></li>
          </ul>
        </div>

     
        <Link href="/" className="text-xl flex justify-center items-center gap-2 font-bold text-[#14B8A6]">
          <FaGraduationCap /> SkillSphere
        </Link>
      </div>

    
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/profile">My Profile</Link></li>
        </ul>
      </div>

     
      <div className="navbar-end gap-2">

        {user ? (
          <>
           
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.ibb.co/2kRZQ0H/user.png" />
              </div>
            </div>

        
            <button onClick={handleLogout} className="btn btn-outline btn-sm">
              Logout
            </button>
          </>
        ) : (
          <div className="flex gap-4">
            <Link href="/login" className="btn p-4  bg-[#14B8A6] text-white  btn-sm">
              Login
            </Link>
            <Link href="/register" className="btn btn-outline border  border-[#14B8A6] btn-sm">
              Register
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}