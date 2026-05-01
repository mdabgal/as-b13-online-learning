"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function UpdateProfile() {
  const { data: session } = authClient.useSession();

  const [name, setName] = useState(session?.user?.name || "");
  const [image, setImage] = useState(session?.user?.image || "");

  const handleUpdate = async () => {
    await authClient.updateUser({
      name,
      image,
    });

    alert("Profile updated!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow rounded">

      <h1 className="text-xl font-bold mb-4">Update Profile</h1>

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