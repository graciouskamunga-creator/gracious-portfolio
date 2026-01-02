import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ darkMode, setDarkMode }) {
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

  return (
    <>
      {/* NAVBAR */}
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
          <h1 className="font-bold text-lg md:text-xl">
            GRACIOUS KAMUNGA
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
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
          </ul>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">

            {/* Dark Mode Toggle */}
            <button onClick={() => setDarkMode(!darkMode)} className="p-2">
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

            {/* Animated Hamburger */}
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
        </div>
      </motion.nav>

      {/* BACKDROP */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* SLIDE-IN DRAWER */}
      <AnimatePresence>
        {open && (
          <motion.aside
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 z-50 shadow-xl"
          >
            <ul className="flex flex-col pt-24">

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
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
