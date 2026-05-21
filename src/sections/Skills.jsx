import { motion } from "framer-motion";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiTool,
  FiShield,
  FiGlobe,
  FiUsers,
  FiMonitor
} from "react-icons/fi";

import {
  FaBrain,
  FaJava,
  FaMicrochip,
} from "react-icons/fa";

const skills = [
  {
    category: "Frontend",
    icon: <FiCode />,
    items: ["React", "JavaScript", "TailwindCSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    icon: <FiServer />,
    items: ["Node.js", "Express.js", "Flask", "REST APIs", "PHP"],
  },
  {
    category: "Programming Languages",
    icon: <FaJava />,
    items: ["C", "C++", "C#", "Python", "Java"],
  },
  {
    category: "AI / ML",
    icon: <FaBrain />,
    items: ["CNN", "OpenCV", "TensorFlow", "Transformers", "NLP" ],
  },
  {
    category: "Databases",
    icon: <FiDatabase />,
    items: ["MongoDB", "MySQL", "SQLite", "Firebase", "PostgreSQL"],
  },
  {
  category: "Digital Systems / FPGA",
  icon: <FaMicrochip />,
  items: ["Verilog", "Quartus Prime", "ModelSim", "FPGA Design", "Digital Logic"],
},
  {
    category: "Tools",
    icon: <FiTool />,
    items: ["Git", "GitHub", "Linux", "VS Code", "Data Structures", "Algorithms", "Object-Oriented Programming",
            "Android Studio", "Test Automation", "Selenium"],
  },
  {
    category: "Systems",
    icon: <FiMonitor />,
    items: ["Operating Systems", "Computer Architecture", "Compilers"],
  },
  {
    category: "Cybersecurity",
    icon: <FiShield />,
    items: ["Networking Fundamentals", "Secure Coding", "Basic Penetration Testing"],
  },
  {
    category: "Soft Skills",
    icon: <FiUsers />,
    items: ["Problem Solving", "Communication", "Teamwork", "Adaptability"],
  },
  {
    category: "Languages",
    icon: <FiGlobe />,
    items: ["English (Fluent)", "Arabic (Native)",  "Hebrew (Fluent)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-bold mb-20"
      >
        My <span className="text-[#d4a373]">Skills</span>
      </motion.h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {skills.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="
              bg-white/40 dark:bg-[#1f2937]
              border border-white/10
              rounded-2xl p-6
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all duration-300
            "
          >

            {/* Category Title */}
<div className="flex items-center gap-3 mb-4">

  <div className="text-2xl text-[#d4a373]">
    {group.icon}
  </div>

  <h3 className="text-xl font-bold text-[#d4a373]">
    {group.category}
  </h3>

</div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <span
                  key={i}
                  className="
                    text-xs px-3 py-1 rounded-full
                    bg-[#d4a373]/10
                    border border-[#d4a373]/30
                    text-[#d4a373]
                  "
                >
                  {item}
                </span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}