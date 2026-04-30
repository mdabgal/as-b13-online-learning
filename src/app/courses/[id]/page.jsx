import coursesData from "@/data/courses.json";
import Image from "next/image";
import { notFound } from "next/navigation";
import { VscStarEmpty } from "react-icons/vsc";

export default async function CourseDetails({ params }) {
  const { id } = await params;

  const course = coursesData.find(
    (item) => item.id === Number(id)

  );

  if (!course) return notFound();

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="max-w-3xl mx-auto border border-gray-100 shadow-2xl rounded-xl p-6 shadow-lg">

      <div className="relative w-full  rounded-xl overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          height={400}
          width={400}
          className=""
        />
      </div>

      <div className="mt-6 space-y-3">

        <h1 className="text-3xl font-bold text-[#14B8A6]">
          {course.title}
        </h1>

        <p className="text-gray-600">{course.description}</p>

        <p><b>Instructor:</b> {course.instructor}</p>
        <p><b>Duration:</b> {course.duration}</p>
        <p><b>Level:</b> {course.level}</p>
        <p className="flex items-center gap-2"><b>Rating:</b>  <VscStarEmpty className="text-yellow-400" /> <VscStarEmpty className="text-yellow-400" /> {course.rating}</p>
        <p><b>Category:</b> {course.category}</p>

      </div>
    </div>
    </div>
  );
}