import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaGraduationCap,
 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-base-300 mt-10">

      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

      
        <div>
          <p className="text-xl flex items-center gap-2 font-bold text-[#14B8A6]">
            <FaGraduationCap /> SkillSphere
          </p>

          <p className="mt-3 text-sm  text-gray-600">
            Upgrade your skills with modern courses and expert instructors.
            Learn anytime, anywhere 
          </p>
        </div>

   
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>

          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#14B8A6]">Home</Link></li>
            <li><Link href="/courses" className="hover:text-[#14B8A6]">Courses</Link></li>
            <li><Link href="/profile" className="hover:text-[#14B8A6]">My Profile</Link></li>

            <li>
  <Link href="/terms" className="hover:text-[#14B8A6]">
    Terms & Conditions
  </Link>
</li>

<li>
  <Link href="/privacy" className="hover:text-[#14B8A6]">
    Privacy Policy
  </Link>
</li>
            
          </ul>
        </div>


        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>

          <p className="text-sm text-gray-600">
            Email: jannati2917@gmail.com <br />
            Phone: +880 1754252246
          </p>

          <div className="flex gap-4 mt-4 text-xl text-[#14B8A6]">
            <FaFacebook className="hover:scale-110 transition cursor-pointer" />
            <FaTwitter className="hover:scale-110 transition cursor-pointer" />
            <FaGithub className="hover:scale-110 transition cursor-pointer" />
            <FaLinkedin className="hover:scale-110 transition cursor-pointer" />
          </div>
        </div>

      </div>

      
      <div className="text-center py-4 border-t border-gray-300 text-sm text-gray-500">
        <span className="text-[#14B8A6]">©</span>{" "}
        {new Date().getFullYear()} SkillSphere. All rights reserved.
      </div>

    </footer>
  );
}