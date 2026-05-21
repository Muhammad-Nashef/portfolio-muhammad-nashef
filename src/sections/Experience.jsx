import { motion } from "framer-motion";

const experience = [
  {
    title: "AI Projects Developer",
    period: "2024 - Present",
    description:
      "Built AI-based systems including CNN image classification, medical imaging analysis, and intelligent learning platforms using Python, TensorFlow, OpenCV, and Flask APIs.",
  },
  {
    title: "Full-Stack Developer",
    period: "2024 - 2025",
    description:
      "Developed full-stack web applications using React, PHP, Node.js, and SQL databases, including a car rental platform and a store management system.",
  },
  {
    title: "Computer Engineering Graduate (With Honors)",
    period: "2020 - 2024",
    description:
      "Studied core computer engineering concepts including AI/ML, cybersecurity, web development (frontend & backend), databases, operating systems, communication protocols, cloud computing, and Android development.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-bold mb-20"
      >
        My <span className="text-[#d4a373]">Journey</span>
      </motion.h2>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative border-l-2 border-gradient-to-b from-[#d4a373]/40 via-[#d4a373]/10 to-transparent pl-6">

        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
            className="mb-12 relative"
          >

            {/* Dot */}
            <div className="absolute -left-[34px] top-2 w-4 h-4 rounded-full bg-[#d4a373] shadow-lg shadow-[#d4a373]/40" />

            {/* Content */}
            <div className="
              bg-white/40 dark:bg-[#1f2937]
              border border-white/10
              rounded-2xl p-6
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-1
              hover:scale-[1.02]
              transition-all duration-300
            ">

              <h3 className="text-xl font-bold mb-1">
                {item.title}
              </h3>

              <p className="text-sm text-[#d4a373] mb-3">
                {item.period}
              </p>

              <p className="text-sm opacity-80 leading-relaxed">
                {item.description}
              </p>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}