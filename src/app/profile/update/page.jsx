"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function UpdateProfile() {
  const { data: session, isLoading } = authClient.useSession();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");


  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session]);

  const handleUpdate = async () => {
    const toastId = toast.loading("Updating profile...");

    try {
      await authClient.updateUser({
        name,
        image,
      });

      toast.success("Profile updated!", { id: toastId });

    } catch (err) {
      toast.error("Update failed", { id: toastId });
    }
  };

 
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-teal-500"></span>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow rounded">

      <h1 className="text-xl font-bold mb-4">
        Update Profile
      </h1>

      <input
        className="input input-bordered w-full mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <input
        className="input input-bordered w-full mb-3"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      />

      <button
        onClick={handleUpdate}
        className="btn bg-teal-500 text-white w-full"
      >
        Update
      </button>

    </div>
  );
}