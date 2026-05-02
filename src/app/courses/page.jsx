"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FaStar, FaUser } from "react-icons/fa";
import coursesData from "@/data/courses.json";
import Image from "next/image";

export default function CoursesPage() {
  const [search, setSearch] = useState("");
 
  
  const filteredCourses = useMemo(() => {
    return coursesData
      .filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => b.rating - a.rating);
  }, [search]);

  return (
    <div className="container mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold text-center text-[#14B8A6] mb-6">
        All Courses
      </h1>

    
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search courses..."
          className="input input-bordered w-full max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-base-100 shadow-md rounded-xl overflow-hidden hover:scale-105 transition"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">

                <h2 className="font-bold text-lg">{course.title}</h2>

                <p className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <FaUser className="text-[#14B8A6]" />
                  {course.instructor}
                </p>

                <p className="flex items-center gap-2 text-sm text-yellow-500 mt-1 font-semibold">
                  <FaStar />
                  {course.rating}
                </p>

                <Link
                  href={`/courses/${course.id}`}
                  className="btn btn-sm bg-[#14B8A6] text-white mt-4 w-full"
                >
                  View Details
                </Link>

              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No courses found 😢
          </p>
        )}

      </div>
    </div>
  );
}