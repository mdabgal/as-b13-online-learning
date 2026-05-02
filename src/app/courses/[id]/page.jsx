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

  
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await authClient.getSession();
      setSession(data);

      if (!data?.user) {
        router.push(`/login?redirect=/courses/${id}`);
      }
    };

    checkUser();
  }, [id, router]);

  const course = coursesData.find(
    (item) => item.id === Number(id)
  );

  if (!course) {
    return (
      <p className="text-center mt-20">
        Course not found
      </p>
    );
  }

 
  if (!session) {
    return (
      <div className="flex justify-center items-center h-[60vh] ">
        <span className="loading loading-spinner text-[#14B8A6]"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="max-w-3xl mx-auto border border-gray-100 shadow-xl rounded-xl p-6">

      
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

       
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3">
            Course Curriculum
          </h2>

          <ul className="list-disc ml-5 space-y-2 text-gray-600">
            <li>Introduction & Setup</li>
            <li>Core Concepts</li>
            <li>Hands-on Project</li>
            <li>Advanced Topics</li>
            <li>Final Project & Certification</li>
          </ul>
        </div>

      </div>
    </div>
  );
}