import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ClickEffect from "./components/ClickEffect";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  return (
  <div className="min-h-screen flex flex-col transition-colors duration-500 bg-[#f5f1ea] dark:bg-[#111827] text-[#2d2d2d] dark:text-[#f3f4f6]">

    <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

    <main className="flex-grow">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <ClickEffect />
    </main>

    <Footer />

  </div>
);
}

export default App;