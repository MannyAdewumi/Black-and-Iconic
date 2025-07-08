import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Logo from "../assets/black.png";
import { authLinks } from "../constants";
import { navLinks } from "../constants";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Detect system preference or use saved
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

    // Glass effect on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle theme + persist
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 ${
        scrolled
          ? "backdrop-blur-md bg-white/30 dark:bg-obsedian/70 shadow-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center">
          <img src={Logo} alt="Logo" width={100} height={50} />
        </Link>

        {/* Desktop Links */}
        <ul className='flex-1 flex justify-center items-center gap-14 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-oswald leading-normal text-base 
              uppercase text-white hover:text-slate-400 transition'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

         {/* Search + Theme Toggle (Desktop) */}
        <div className="hidden md:flex items-center gap-4 ml-6">
          <input type="text" placeholder="Search Assets"
          className="px-2 py-2 rounded-md min-w-lg bg-black/10 dark:bg-white/10 text-gray-900 
          dark:text-white placeholder-gray-500 dark:placeholder-slate-500 font-poppins 
          font-normal text-base justify-items-start ring-1 border-bg-slate-400 backdrop-blur-sm"/>
          <ul className='flex-1 flex justify-center items-center gap-6 max-lg:hidden pr-1.5'>
            {authLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className='font-oswald leading-normal text-base 
                uppercase text-white hover:text-slate-400 transition'>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button onClick={toggleTheme} className="text-gray-900 dark:text-yellow-400 transition">
            {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
          </button>
        </div>

        {/* Mobile Toggle + Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="text-gray-900 dark:text-yellow-400 transition">
            {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-900 dark:text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

       {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-obsedian dark:bg-obsedian/80 backdrop-blur-md px-4 py-4 space-y-4 text-gray-900 dark:text-white font-medium">
          <a href="#" className="block">Stock</a>
          <a href="#" className="block">Pricing</a>
          <a href="#" className="block">Login</a>
          <a href="#" className="block">Signup</a>
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-md bg-black/90 dark:bg-white/80 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white focus:outline-none backdrop-blur-sm"
          />
        </div>
      )}
    </nav>
  );
};

export default Nav;