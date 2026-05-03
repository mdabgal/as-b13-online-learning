

"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
  const { data: session, isLoading } = authClient.useSession();
  const router = useRouter();

  const avatar =
    session?.user?.image?.startsWith("http")
      ? session.user.image
      : "/userAvatar.png";


  useEffect(() => {
    if (!isLoading && !session?.user) {
      router.push("/login?redirect=/my-profile");
    }
  }, [session, isLoading, router]);

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-teal-500"></span>
      </div>
    );
  }

 
  if (!session?.user) return null;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-lg rounded-lg bg-base-100">

      <h1 className="text-2xl font-bold mb-6 text-center">
        My Profile
      </h1>

     
      <div className="flex justify-center mb-4">
        <Image
          src={avatar}
          alt="User"
          width={100}
          height={100}
          className="rounded-full border"
        />
      </div>

      
      <div className="space-y-3 text-center">

        <p>
          <span className="font-semibold">Name:</span>{" "}
          {session?.user?.name}
        </p>

        <p>
          <span className="font-semibold">Email:</span>{" "}
          {session?.user?.email}
        </p>

      </div>

      
      <div className="flex flex-col gap-3 items-center mt-6">

        <Link href="/my-profile/update">
          <button className="btn bg-teal-500 text-white">
            Update Profile
          </button>
        </Link>

        <button
          onClick={handleLogout}
          className="btn btn-outline btn-error"
        >
          Logout
        </button>

      </div>

    </div>
  );
}
