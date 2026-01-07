import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import PageWrapper from "../components/PageWrapper";

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const floatAnimation = {
  float: {
    y: [0, -10, 0],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <PageWrapper>
      <SEO
        title="Gracious Kamunga | Full-Stack Software Engineer"
        description="Full-Stack Software Engineer specializing in React, Flutter, Firebase, Node.js and scalable systems."
      />

      {/* HERO SECTION */}
      <section className="pt-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="space-y-4 text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            <motion.h1 className="text-4xl md:text-5xl font-bold">
              Hi — I’m Gracious Kamunga
            </motion.h1>

            <motion.p className="text-lg text-slate-600 dark:text-slate-300">
              Full-Stack Software Developer building modern, scalable web and
              mobile applications.
            </motion.p>

            <motion.span
              className="inline-block px-3 py-1 text-sm bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              ✅ Available for work
            </motion.span>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <Link
                to="/projects"
                className="px-6 py-3 bg-slate-900 dark:bg-white dark:text-black text-white rounded-lg"
              >
                See My Projects
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 border border-slate-900 dark:border-white rounded-lg"
              >
                Contact Me
              </Link>

              <a
                href="/Gracious_Kamunga_CV.pdf"
                download
                className="px-6 py-3 border border-slate-900 dark:border-white rounded-lg"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-end"
            animate="float"
            variants={floatAnimation}
          >
            <div className="rounded-full p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
              <img
                src="/perso.jpg"
                alt="Gracious Kamunga"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL LINKS */}
      <motion.section
        className="mt-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h3 className="text-xl font-semibold mb-4">Find Me Online</h3>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/graciouskamunga-creator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              className="w-10 h-10"
              alt="GitHub"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/gracious-kamunga-123448339"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              className="w-10 h-10"
              alt="LinkedIn"
            />
          </a>
        </div>
      </motion.section>

      {/* CONTACT ME SECTION — RESTORED */}
      <motion.section
        className="mt-24 px-4 sm:px-6 lg:px-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="max-w-xl mx-auto text-slate-600 dark:text-slate-300 mb-6">
          Have a project, idea, or opportunity? I’m open to freelance,
          full-time, and collaboration work.
        </p>

        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-slate-900 dark:bg-white dark:text-black text-white rounded-lg"
        >
          Let’s Talk
        </Link>
      </motion.section>
    </PageWrapper>
  );
}
