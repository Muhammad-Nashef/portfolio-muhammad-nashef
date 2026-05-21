import { useState } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Projects",
    "Skills",
    "Experience",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 dark:bg-black/10 border-b border-white/10">
      
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        <h1 className="text-2xl font-bold tracking-wide">
          Muhammad
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-sm uppercase tracking-wider opacity-80 hover:opacity-100 transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#d4a373] hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white dark:bg-[#1f2937] shadow-md hover:scale-105 active:scale-95 transition duration-300 cursor-pointer"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden hover:scale-105 active:scale-95 transition duration-300 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-white/10 dark:bg-black/20 border-t border-white/10">
          <ul className="flex flex-col items-center gap-8 py-10">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg tracking-wide hover:text-[#d4a373] transition sm:text-xl py-2"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;