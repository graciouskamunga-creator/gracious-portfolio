import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ darkMode, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  /* Auto close on route change */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* Sticky animation */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "About", "Services", "Skills", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-md"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="font-bold text-xl">GRACIOUS KAMUNGA</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {links.map((item) => {
            const path =
              item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const active = location.pathname === path;

            return (
              <li key={item} className="relative">
                <Link
                  to={path}
                  className="hover:text-indigo-600 transition"
                >
                  {item}
                </Link>
                {active && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-indigo-600"
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl p-2"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-md"
          >
            <ul className="flex flex-col gap-4 p-4">

              {links.map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-indigo-600"
                  >
                    {item}
                  </Link>
                </li>
              ))}

              {/* Dark Mode Toggle */}
              <li className="pt-4 border-t dark:border-gray-700">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-3"
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
              </li>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
