import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "../components/pageWrapper";
import Navbar from "../components/Navbar";

const skills = [
  {
    name: "React.js",
    level: 90,
    badge: "Primary",
    icon: "react",
    projects: ["Portfolio Website", "Admin Dashboard", "Rental Platform"],
  },
  {
    name: "React Native",
    level: 80,
    badge: "Primary",
    icon: "react",
    projects: ["Mobile Booking App", "AgriAid Mobile"],
  },
  {
    name: "Flutter / Dart",
    level: 85,
    badge: "Primary",
    icon: "flutter",
    projects: ["AgriAid Mobile", "GPS Tracking System"],
  },
  {
    name: "Node.js",
    level: 75,
    badge: "Secondary",
    icon: "nodejs",
    projects: ["REST APIs", "Authentication Server"],
  },
  {
    name: "PHP",
    level: 80,
    badge: "Primary",
    icon: "php",
    projects: ["Crowdfunding Platform", "AgriAid Web"],
  },
  {
    name: "C# (.NET)",
    level: 70,
    badge: "Secondary",
    icon: "csharp",
    projects: ["Desktop Management System"],
  },
  {
    name: "Firebase",
    level: 85,
    badge: "Primary",
    icon: "firebase",
    projects: ["Auth Systems", "Realtime Databases"],
  },
  {
    name: "Supabase",
    level: 75,
    badge: "Secondary",
    icon: "supabase",
    projects: ["Role-based Platforms"],
  },
  {
    name: "SQL / MySQL",
    level: 85,
    badge: "Primary",
    icon: "mysql",
    projects: ["Payment Systems", "Admin Panels"],
  },
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

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
    <PageWrapper>
      {/* NAVBAR */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section className="pt-28 px-6 max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl font-bold mb-3">Technical Skills</h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Technologies I use to build scalable web and mobile applications.
          </p>
        </motion.div>

        {/* TECH CLOUD */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {skills.map((skill) => (
            <motion.img
              key={skill.name}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
              alt={skill.name}
              whileHover={{ scale: 1.25, rotate: 8 }}
              className="w-10 h-10 cursor-pointer opacity-80 hover:opacity-100"
            />
          ))}
        </motion.div>

        {/* SKILL CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onClick={() => setActiveSkill(skill)}
              className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition"
            >
              {/* ICON + TITLE */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900 hover:shadow-[0_0_15px_rgba(99,102,241,0.8)] transition">
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                    className="w-7 h-7"
                    alt={skill.name}
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      skill.badge === "Primary"
                        ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                    }`}
                  >
                    {skill.badge}
                  </span>
                </div>
              </div>

              {/* PROGRESS BAR */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-2 rounded-full bg-indigo-600"
                />
              </div>

              <p className="mt-2 text-sm text-slate-500">
                Proficiency: {skill.level}%
              </p>
            </motion.div>
          ))}
        </div>

        {/* PROJECT MODAL */}
        <AnimatePresence>
          {activeSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-md w-full"
              >
                <h3 className="text-xl font-bold mb-3">
                  {activeSkill.name} Projects
                </h3>

                <ul className="space-y-2">
                  {activeSkill.projects.map((project) => (
                    <li key={project} className="text-slate-600 dark:text-slate-300">
                      • {project}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setActiveSkill(null)}
                  className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>
    </PageWrapper>
  );
}
