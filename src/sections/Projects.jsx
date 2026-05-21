import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { fadeUp, staggerContainer } from "../utils/animations";
import { image } from "framer-motion/client";
import Swal from "sweetalert2";

const projects = [
  {
    title: "Brain Tumor Detection AI",
    image: "/projects/brain-tumor.png",
    description:
      "Deep learning system for brain tumor classification using CNNs. Built with Flask API for deployment and real-time prediction on MRI images.",
    tech: ["Python", "CNN", "Flask", "OpenCV"],
    github: "https://github.com/abednashif/tumor-sense.git",
    live: "#",
  },

  {
    title: "KnowMotion (AI Learning Platform)",
    image: "/projects/knowmotion.png",
    description:
      "AI-powered exam preparation platform with intelligent question evaluation and learning assistance system.",
    tech: ["React", "Flask", "AI", "SQLite"],
    github: "https://github.com/Muhammad-Nashef/KnowMotion.git",
    live: "#",
  },

  {
    title: "CarXplain",
    image: "/projects/carxplain.png",
    description:
      "Web-based system that simplifies car-related information and explanations, helping users understand vehicle details and comparisons.",
    tech: ["React", "Node.js", "APIs"],
    github: "https://github.com/Muhammad-Nashef/CarXplain.git",
    live: "#",
  },

  {
    title: "Real-Time Smile Detection System",
    image: "/projects/smile-detection.png",
    description:
      "Computer vision system trained on CelebA dataset for smile classification. Built and compared multiple CNN architectures (custom CNNs, InceptionV3, ResNet). Dataset was balanced and cleaned, then split into train/validation/test sets. Best model was deployed using .h5 format. Real-time detection uses Haar Cascade for face detection and cropping before prediction.",
    tech: ["Python", "CNN", "TensorFlow", "OpenCV", "Haar Cascade"],
    github: "https://github.com/Muhammad-Nashef/Smile-Detection-and-Classificaion.git",
    live: "#",
  },

  {
    title: "Elite Cars Platform",
    image: "/projects/elite-cars.png",
    description:
      "Full-stack cloud-based car rental and selling system using AWS Lambda functions, REST APIs, and PostgreSQL database. Includes admin dashboard for managing cars, orders, and rentals.",
    tech: ["AWS Lambda", "PostgreSQL", "REST API", "Full Stack"],
    github: "https://github.com/Muhammad-Nashef/EliteCars.git",
    live: "#",
  },

  {
    title: "File Organizer & Monitor System",
    image: "/projects/file-organizer.png",
    description:
      "Desktop automation tool that monitors a folder in real-time and automatically organizes files based on extensions. Includes live file tracking, statistics dashboard, and startup integration.",
    tech: ["Python", "Automation", "File System", "GUI"],
    github: "https://github.com/Muhammad-Nashef/File-organizer-and-monitor.git",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-bold mb-16"
      >
        Featured <span className="text-[#d4a373]">Projects</span>
      </motion.h2>

      {/* Grid */}
      <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
>

        {projects.map((project, index) => (
          <motion.div
  key={index}
  variants={fadeUp}
  className="
    group relative overflow-hidden
    bg-white/40 dark:bg-[#1f2937]
    border border-white/10
    rounded-2xl
    shadow-lg
    hover:shadow-2xl
    hover:-translate-y-2
    transition-all duration-500
  "
>

  {/* IMAGE */}
  <div className="absolute bottom-0 left-0 w-full h-72 overflow-hidden flex items-center justify-center bg-transparent group-hover:bg-black/5">
  <img
    src={project.image}
    alt={project.title}
    className="
      max-w-full max-h-full object-contain
      transition-all duration-1000
      group-hover:scale-120
      opacity-0 group-hover:opacity-100
    "
  />
</div>

  {/* CONTENT */}
  <div
    className="
      relative z-10
      p-5 sm:p-6
      bg-white/40 dark:bg-[#1f2937]
      transition-all duration-900
      group-hover:-translate-y-50
    "
  >

    <h3 className="text-xl font-bold mb-3">
      {project.title}
    </h3>

    <p className="text-sm opacity-80 mb-4 leading-relaxed">
      {project.description}
    </p>

    {/* Tech */}
    <div className="flex flex-wrap gap-2 mb-6">
      {project.tech.map((t, i) => (
        <span
          key={i}
          className="
            text-xs px-3 py-1 rounded-full
            bg-[#d4a373]/20 text-[#d4a373]
          "
        >
          {t}
        </span>
      ))}
    </div>

    {/* Links */}
    <div className="flex gap-4">
      <a
        href={project.github}
        target="_blank"
        className="flex items-center gap-2 text-sm hover:text-[#d4a373]"
      >
        <FiGithub /> Code
      </a>

      <button
  onClick={() =>
    Swal.fire({
      title: "Live Demo",
      text: "This project runs locally. Contact me if you'd like a live walkthrough or demo session.",
      icon: "info",
      confirmButtonText: "Got it",
      background: "#1f2937",
      color: "#f3f4f6",
      confirmButtonColor: "#d4a373",
    })
  }
  className="flex items-center gap-2 text-sm hover:text-[#d4a373] cursor-pointer"
>
  <FiExternalLink /> Live
</button>
    </div>

  </div>

</motion.div>
        ))}

      </motion.div>
    </section>
  );
}