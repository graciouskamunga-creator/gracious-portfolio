import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Services from "./pages/Services";

import Navbar from "../components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import FloatingActionButton from "./components/FloatingActionButton";

export default function App() {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-500">

      {/* NAVBAR (NEW COMPONENT) */}
      <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />

      <ScrollToTop />

      {/* CONTENT */}
      <main className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <FloatingActionButton pathname={location.pathname} />

      <footer className="border-t py-6 text-center text-sm text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear()} Gracious Kamunga – Full-Stack Software Developer
      </footer>
    </div>
  );
}
