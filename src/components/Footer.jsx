import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/10 bg-transparent">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left */}
        <p className="text-sm opacity-70 text-center md:text-left">
          © {new Date().getFullYear()} Muhammad Nashef. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6 text-[#d4a373]">

          <a href="https://github.com/Muhammad-Nashef" className="hover:scale-110 transition">
            <FiGithub size={20} />
          </a>

          <a href="https://www.linkedin.com/in/muhammad-nashef" className="hover:scale-110 transition">
            <FiLinkedin size={20} />
          </a>

        </div>

      </div>
    </footer>
  );
}