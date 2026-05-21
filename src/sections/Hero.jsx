import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
} from "react-icons/fi";
import { fadeUp } from "../utils/animations";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8 }}
        >

          <p className="uppercase tracking-[0.3em] text-sm mb-6 opacity-70">
            Software Engineer & AI Developer
          </p>

          <div className="relative overflow-hidden">
           <div className="hero-glow pointer-events-none" />
           <motion.div
    animate={{ y: [0, -2, 0] }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2

    }}
      className="relative overflow-hidden"
  >
      {/* First line */}
      <motion.h1
  initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0, y: 20 }}
  animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1, y: 0 }}
  transition={{ duration: 2.2, ease: "easeOut" }}
  className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
>
  Muhammad
</motion.h1>

      {/* Second line */}
      <motion.h1
  initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0, y: 20 }}
  animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1, y: 0 }}
  transition={{ duration: 2.2, delay: 1.2, ease: "easeOut" }}
  className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
>
  Nashef
</motion.h1>
            </motion.div>
    
    </div>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80 max-w-xl mb-8 md:mb-10">
            Building AI-powered web and mobile applications using full-stack development,
            computer vision, and modern software engineering principles.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">

            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-[#d4a373] text-white font-medium hover:scale-105 transition duration-300 shadow-lg"
            >
              View Projects
            </a>

            <a
              href="/MuhammadNashef.pdf"
              className="px-8 py-4 rounded-full border border-[#d4a373] hover:bg-[#d4a373] hover:text-white transition duration-300 flex items-center gap-2"
            >
              <FiDownload />
              Resume
            </a>

          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">

            <a
              href="https://github.com/Muhammad-Nashef"
              target="_blank"
              className="text-2xl hover:text-[#d4a373] hover:scale-110 transition duration-300"
            >
              <FiGithub />
            </a>

            <a
              href="https://linkedin.com/in/muhammad-nashef"
              target="_blank"
              className="text-2xl hover:text-[#d4a373] hover:scale-110 transition duration-300"
            >
              <FiLinkedin />
            </a>

            <a
              href="mailto:muhmmadnashef2@gmail.com"
              className="text-2xl hover:text-[#d4a373] hover:scale-110 transition duration-300"
            >
              <FiMail />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex justify-center group"
        >

          {/* Glow */}
          <div className="
          absolute w-72 h-72 md:w-96 md:h-96
          rounded-full bg-[#d4a373]/20 blur-3xl
          transition-all duration-500
          group-hover:scale-110
          group-hover:bg-[#d4a373]/30
          animation: pulse 1s ease-in-out infinite;"></div>

          {/* Profile Image */}
          <div className="relative group overflow-hidden rounded-3xl">
            <img
              src="/profile.png"
              alt="Muhammad Nashef"
              draggable="false"
              className="w-60 sm:w-72 md:w-[420px]
                         rounded-3xl
                         object-cover
                         border border-white/10
                         shadow-2xl
                         transition-all duration-500 ease-out
                         group-hover:-translate-y-3
                         group-hover:rotate-1
                         group-hover:scale-[1.02]"
            />
            {/* Shine Effect */}
  <div
    className="
      absolute inset-0
      -translate-x-full
      group-hover:translate-x-full
      transition-all duration-1000
      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent
      skew-x-12
    "
  ></div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;