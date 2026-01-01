import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Services from "./pages/Services";

import ScrollToTop from "./components/ScrollToTop";
import FloatingActionButton from "./components/FloatingActionButton";

export default function App() {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  /* Dark mode persistence */
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  /* Auto close mobile menu on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinkClass = (path) =>
    location.pathname === path
      ? "font-semibold underline underline-offset-4"
      : "hover:opacity-80 transition";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-500">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-50 dark:bg-gray-900 border-b dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="font-bold text-lg">
            Gracious Kamunga
          </div>

          {/* Desktop Links (NO dark toggle here) */}
          <div className="hidden md:flex gap-6">
            <Link to="/" className={navLinkClass("/")}>Home</Link>
            <Link to="/about" className={navLinkClass("/about")}>About</Link>
            <Link to="/services" className={navLinkClass("/services")}>Services</Link>
            <Link to="/skills" className={navLinkClass("/skills")}>Skills</Link>
            <Link to="/projects" className={navLinkClass("/projects")}>Projects</Link>
            <Link to="/contact" className={navLinkClass("/contact")}>Contact</Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-slate-100 dark:bg-gray-800 px-6 py-4 space-y-4"
            >
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>

              {/* Dark Mode Toggle (ONLY here) */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-3 pt-3 border-t dark:border-gray-700"
              >
                <img
                  src={
                    darkMode
                      ? "https://cdn-icons-png.flaticon.com/512/869/869869.png"
                      : "https://cdn-icons-png.flaticon.com/512/6714/6714978.png"
                  }
                  className="w-5 h-5"
                  alt="theme"
                />
                {darkMode ? "Dark Mode" : "Light Mode"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <ScrollToTop />

      {/* CONTENT */}
      <main className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path= "/services" element={<Services />}/>  
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <FloatingActionButton pathname={location.pathname} />

      <footer className="border-t py-6 text-center text-sm text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear()} Gracious Kamunga - Full-Stack Software Developer
      </footer>
    </div>
  );
}
