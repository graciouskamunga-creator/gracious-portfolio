import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ darkMode, setDarkMode, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  /* Close menu on route change */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* Sticky effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close on outside click */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const links = ["Home", "About", "Services", "Skills", "Projects", "Contact"];

  const handleThemeToggle = () => {
    if (toggleTheme) toggleTheme();
    else if (setDarkMode) setDarkMode(!darkMode);
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all ${
          scrolled
            ? "bg-white dark:bg-gray-900 shadow-md"
            : "bg-white dark:bg-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* LEFT: Hamburger (mobile only) */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="relative w-8 h-8 flex flex-col justify-center items-center"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-[2px] bg-current mb-1"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-[2px] bg-current mb-1"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-[2px] bg-current"
              />
            </button>
          </div>

          {/* CENTER: Logo */}
          <h1 className="font-bold text-lg md:text-xl">
            GRACIOUS KAMUNGA
          </h1>

          {/* RIGHT: Dark mode (mobile) */}
          <div className="md:hidden">
            <button onClick={handleThemeToggle} className="p-2">
              <img
                src={
                  darkMode
                    ? "https://cdn-icons-png.flaticon.com/512/869/869869.png"
                    : "https://cdn-icons-png.flaticon.com/512/6714/6714978.png"
                }
                className="w-5 h-5"
                alt="theme"
              />
            </button>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-6 items-center">
            {links.map((item) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const active = location.pathname === path;

              return (
                <li key={item} className="relative">
                  <Link to={path} className="hover:text-indigo-600 transition">
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

            <button onClick={handleThemeToggle} className="ml-4 p-2">
              <img
                src={
                  darkMode
                    ? "https://cdn-icons-png.flaticon.com/512/869/869869.png"
                    : "https://cdn-icons-png.flaticon.com/512/6714/6714978.png"
                }
                className="w-5 h-5"
                alt="theme"
              />
            </button>
          </ul>
        </div>
      </motion.nav>

      {/* MOBILE DROPDOWN MENU (FROM TOP) */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 z-40 shadow-lg md:hidden"
          >
            <ul className="flex flex-col pt-24 pb-6">
              {links.map((item) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                const active = location.pathname === path;

                return (
                  <li key={item}>
                    <Link
                      to={path}
                      className={`block px-6 py-4 transition ${
                        active
                          ? "bg-indigo-600 text-white"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
