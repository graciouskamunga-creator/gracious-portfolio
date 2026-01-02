import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageWrapper from "../components/pageWrapper";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import {
  Code2,
  Smartphone,
  Database,
  Cloud,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Application Development",
    desc: "Design and development of fast, scalable, and responsive web applications using React.js, PHP, Tailwind CSS, and modern architectures.",
    tech: "React.js, PHP, Node.js, Tailwind, REST APIs",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications with smooth UI, secure authentication, and real-time features.",
    tech: "Flutter, React Native, Firebase",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Backend & Database Engineering",
    desc: "Robust backend systems, database design, API integrations, and performance optimization.",
    tech: "MySQL, SQL Server, Firebase, Supabase",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud & API Integration",
    desc: "Integration of third-party APIs, payment gateways, authentication systems, and cloud services.",
    tech: "Firebase, Supabase, Flutterwave, REST APIs",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "System Security & Optimization",
    desc: "Implementation of secure authentication, role-based access control, and performance enhancements.",
    tech: "JWT, Secure APIs, Optimization",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Deployment & Maintenance",
    desc: "Application deployment, version control, monitoring, and ongoing system maintenance.",
    tech: "Git, CI/CD, Hosting Platforms",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
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

      <SEO
        title="Gracious Kamunga | Software Development Services"
        description="Web, mobile, backend, and cloud software development services by Gracious Kamunga, Full-Stack Software Developer."
      />

      <motion.section
        className="px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div
          variants={item}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services I Offer
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            I build scalable, secure, and high-performance digital solutions
            tailored to startups, businesses, and organizations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                {service.desc}
              </p>

              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                {service.tech}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div variants={item} className="mt-16 text-center">
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Have a project in mind or looking for a reliable developer?
          </p>

          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Let’s Work Together
          </a>
        </motion.div>
      </motion.section>
    </PageWrapper>
  );
}
