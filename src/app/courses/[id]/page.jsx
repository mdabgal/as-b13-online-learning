"use client";

import coursesData from "@/data/courses.json";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { VscStarEmpty } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function CourseDetails() {
  const { id } = useParams();
  const router = useRouter();

  const [session, setSession] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await authClient.getSession();

        if (!data || !data.user) {
          router.replace(`/login?redirect=/courses/${id}`);
          return;
        }

        setSession(data);
      } catch (err) {
        router.replace(`/login?redirect=/courses/${id}`);
      } finally {
        setChecking(false);
      }
    };

    checkAuth();
  }, [id, router]);

  const course = coursesData.find(
    (item) => item.id === Number(id)
  );

  if (checking) {
    return (
      <div className="flex justify-center  items-center h-[60vh]">
        <span className="loading loading-spinner text-[#14B8A6]"></span>
      </div>
    );
  }

  if (!course) {
    return (
      <p className="text-center mt-20 text-gray-500">
        Course not found
      </p>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10">

      <div className="max-w-3xl mx-auto border border-gray-100 shadow-2xl rounded-xl p-6">

        <div className="relative w-full h-64 rounded-xl overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-6 space-y-3">

          <h1 className="text-3xl font-bold text-[#14B8A6]">
            {course.title}
          </h1>

          <p className="text-gray-600">
            {course.description}
          </p>

          <p><b>Instructor:</b> {course.instructor}</p>
          <p><b>Duration:</b> {course.duration}</p>
          <p><b>Level:</b> {course.level}</p>

          <p className="flex items-center gap-2">
            <b>Rating:</b>
            <VscStarEmpty className="text-yellow-400" />
            <VscStarEmpty className="text-yellow-400" />
            {course.rating}
          </p>

          <p><b>Category:</b> {course.category}</p>

        </div>

      </div>
    </div>
  );
}