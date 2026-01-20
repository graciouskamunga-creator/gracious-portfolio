import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import SEO from "../components/SEO";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Talk Mate Mobile App",
    category: "Mobile Application",
    desc: "A real-time communication mobile application enabling instant messaging and user presence using cloud-backed architecture.",
    tech: ["Flutter", "Firebase", "Cloud Functions"],
    impact: "Implemented real-time messaging with scalable backend services.",
    link: "#",
    github: "#",
  },
  {
    title: "Ticketing System",
    category: "Enterprise Desktop System",
    desc: "An issue tracking and resolution system designed to streamline support workflows and internal reporting.",
    tech: ["C#", ".NET", "SQL Server"],
    impact: "Improved issue tracking efficiency and data consistency.",
    link: "#",
    github: "https://github.com/graciouskamunga-creator/CivoTicketingSystem",
  },
  {
    title: "Web Application Platform",
    category: "Full-Stack Web App",
    desc: "A responsive full-stack platform featuring authentication, role-based access, and real-time database updates.",
    tech: ["React.js", "Tailwind CSS", "Firebase"],
    impact: "Delivered a secure and scalable web platform.",
    link: "#",
    github: "#",
  },
  {
    title: "Carwash Mobile App",
    category: "On-Demand Mobile App",
    desc: "A location-based on-demand carwash application with integrated online payments.",
    tech: ["Flutter", "Flutterwave", "Firebase"],
    impact: "Enabled seamless service booking and secure payments.",
    link: "#",
    github: "https://github.com/graciouskamunga-creator/car-wash",
  },
  {
    title: "Legal-Aid Web App",
    category: "Web Platform",
    desc: "A legal assistance web platform providing case registration, document access, and service coordination.",
    tech: ["PHP", "MySQL", "Bootstrap", "HTML"],
    impact: "Digitized legal service access for wider community reach.",
    link: "#",
    github: "https://github.com/graciouskamunga-creator/Legal-Aid-",
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");
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

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <PageWrapper>
      {/* NAVBAR */}

      <SEO
        title="Projects | Gracious Kamunga – Full-Stack Software Developer"
        description="Explore full-stack, mobile, and web development projects built with React, Flutter, C#, Firebase, and SQL."
      />

      {/* HERO */}
      <section className="pt-24 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Selected Projects
        </h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          A collection of real-world software solutions showcasing full-stack,
          mobile, and cloud development expertise.
        </p>
      </section>

      {/* FILTERS */}
      <section className="mt-12 px-6 max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition
              ${
                active === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* PROJECT GRID */}
      <section className="mt-16 px-6 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col"
            >
              <span className="text-xs uppercase tracking-wide text-indigo-600 font-semibold">
                {project.category}
              </span>

              <h3 className="text-xl font-bold mt-2">{project.title}</h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm mt-3">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Impact */}
              <p className="text-sm mt-4 text-slate-500 dark:text-slate-400">
                <strong>Impact:</strong> {project.impact}
              </p>

              {/* LINKS */}
              <div className="mt-auto pt-6 flex gap-4">
                <a
                  href={project.link}
                  className="flex items-center gap-2 text-sm font-medium hover:text-indigo-600"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm font-medium hover:text-indigo-600"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-28 text-center px-6">
        <h2 className="text-2xl font-semibold mb-3">Want to Collaborate?</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          I'm open to full-time roles, freelance projects, and impactful software
          collaborations.
        </p>
        <Link
          to="/Contact"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Get in Touch
        </Link>
      </section>
    </PageWrapper>
  );
}
