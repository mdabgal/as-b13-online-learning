
import Link from "next/link";
import { FaBook, FaBullseye, FaLaptopCode, FaRocket } from "react-icons/fa";

export default function Home() {
  return (
    <div>

      
      <section className=" bg-teal-50 h-[400px] mt-20 py-20">
        <div className="container mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl flex justify-center items-center gap-6 font-bold">
            Upgrade Your Skills Today <FaRocket/>
          </h1>

          <p className="mt-8 text-gray-500 text-lg">
            Learn from expert instructors and build your future.
          </p>

          <Link
            href="/courses"
            className="btn text-[#14B8A6] border border-[#14B8A6]  mt-6 "
          >
            Explore Courses
          </Link>

        </div>
      </section>

   
      

<section className="container mx-auto px-6 py-16">

  <h2 className="text-3xl font-bold text-center mb-10 text-[#14B8A6]">
    Popular Courses
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {[
      { title: "Web Development", instructor: "John Doe" },
      { title: "UI/UX Design", instructor: "Sarah Smith" },
      { title: "Digital Marketing", instructor: "Michael Brown" }
    ].map((c, i) => (

      <div key={i} className="bg-base-100 shadow-md rounded-xl p-6 hover:scale-105 transition">

        <h3 className="font-bold text-lg">{c.title}</h3>

        <p className="text-sm text-gray-500 mt-2">
          Instructor: {c.instructor}
        </p>

        <button className="btn btn-sm bg-[#14B8A6] text-white mt-4 w-full">
          View Details
        </button>

      </div>

    ))}

  </div>

</section>



<section className="bg-base-200 py-16">

  <div className="container mx-auto px-6">

    <h2 className="text-3xl font-bold text-center mb-8 text-[#14B8A6]">
      Learning Tips
    </h2>

    <ul className="space-y-4 text-center text-gray-600">

      <li className="flex justify-center items-center gap-2">
        <FaBook className="text-[#14B8A6]" />
        Study daily 1-2 hours
      </li>

      <li className="flex justify-center items-center gap-2">
        <FaLaptopCode className="text-[#14B8A6]" />
        Practice coding regularly
      </li>

      <li className="flex justify-center items-center gap-2">
        <FaBullseye className="text-[#14B8A6]" />
        Build real projects
      </li>

    </ul>

  </div>

</section>
   
     
    </div>
  );
}