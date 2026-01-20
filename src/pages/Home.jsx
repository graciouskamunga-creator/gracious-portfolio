import React, { useState } from "react";
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

const skills = [
  { name: "C#", icon: "csharp" },
  { name: "React", icon: "react" },
  { name: "React Native", icon: "react" },
  { name: "Flutter", icon: "flutter" },
  { name: "Node.js", icon: "nodejs" },
  { name: "PHP", icon: "php" },
  { name: "SQL", icon: "mysql" },
  { name: "Firebase", icon: "firebase" },
  { name: "Supabase", icon: "supabase" },
  { name: "Vite", icon: "vitejs" },
];

const skillLevels = [
  { name: "React", level: 90 },
  { name: "React Native", level: 85 },
  { name: "Flutter", level: 85 },
  { name: "Firebase / Supabase", level: 85 },
  { name: "C# / .NET", level: 80 },
  { name: "SQL & Databases", level: 80 },
  { name: "Node.js", level: 75 },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  /* Dark mode persistence */
  React.useEffect(() => {
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

      <SEO
        title="Gracious Kamunga | Full-Stack Software Developer"
        description="Full-Stack Software Developer in Malawi specializing in React, Flutter, Firebase, Node.js, and scalable systems."
      />

      {/* HERO */}
      <section className="pt-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="space-y-4 text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Hi — I’m Gracious Kamunga
            </motion.h1>

            <motion.p className="text-lg leading-relaxed mb-4 text-slate-600 dark:text-slate-300">
             I am a dedicated Full-Stack Software Developer with a strong foundation in web and mobile
             application development. I hold an Advanced Diploma in Computing from NACIT and have
             hands-on experience building scalable, secure, and user-centered applications. I am highly
             adaptable, detail-oriented, and thrive in fast-paced startup and enterprise environments.
            </motion.p>

            <motion.span
              className="inline-block mb-4 px-3 py-1 text-sm bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              ✅ Available for work
            </motion.span>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
              <Link
                to="/projects"
                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-900"

              >
                See My Projects
              </Link>

              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-900"

              >
                Get In Touch
              </Link>

              <a
                href="/Gracious_Kamunga_CV.pdf"
                download
                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-900"

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
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 max-w-md mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="font-semibold mb-2">Quick Info</h3>
          <p>📞 0886 935 105 / 0993 215 578</p>
          <p>✉️ graciouskamunga778@gmail.com</p>
          <p className="mt-2 text-sm">📍 Lilongwe, Malawi</p>
        </motion.div>
      </section>

      {/* EXPERIENCE STATS */}
      <motion.section
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {[
          { title: "Web Apps", subtitle: "Responsive & Modern" },
          { title: "Mobile Apps", subtitle: "Cross-Platform" },
          { title: "Desktop Apps", subtitle: "Windows & MacOS" },
          { title: "Cloud / Firebase", subtitle: "Realtime & Scalable" },
        ].map((item) => (
          <motion.div key={item.title} variants={fadeUp}>
            <h4 className="text-3xl font-bold">{item.title}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {item.subtitle}
            </p>
          </motion.div>
        ))}
      </motion.section>

      {/* SERVICES */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-semibold mb-6">What I Do</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: "Web Development",
              desc: "Modern, responsive web apps using React, Node.js, and PHP.",
            },
            {
              title: "Mobile Apps",
              desc: "Cross-platform mobile apps with Flutter & Firebase.",
            },
            {
              title: "Desktop Apps",
              desc: "Windows and MacOS applications with C# and Electron.",
            },
            {
              title: "Backend Systems",
              desc: "Secure APIs, authentication, and database design.",
            },
          ].map((service) => (
            <motion.div
              key={service.title}
              className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900"
              whileHover={{ scale: 1.05 }}
              variants={fadeUp}
            >
              <h4 className="font-semibold mb-2">{service.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES AS CARDS */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-semibold mb-6">Technologies I Work With</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg flex flex-col items-center gap-2 cursor-pointer transition-transform transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                alt={skill.name}
                className="w-12 h-12"
                loading="lazy"
              />
              <span className="font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILL PROFICIENCY */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-semibold mb-6">Skill Proficiency</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillLevels.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-slate-900 dark:bg-white h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <motion.section
        className="mt-20 bg-gray-50 dark:bg-gray-900 p-8 rounded-xl px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h3 className="text-xl font-semibold mb-4">Why Work With Me?</h3>
        <ul className="space-y-3 text-slate-600 dark:text-slate-400">
          <li>✔ Strong problem-solving mindset</li>
          <li>✔ Clean, scalable, maintainable code</li>
          <li>✔ Startup & real-world project experience</li>
          <li>✔ Excellent communication & ownership</li>
          <li>✔ Passion for quality software</li>
        </ul>
      </motion.section>

      {/* SOCIAL LINKS */}
      <motion.section
        className="mt-20 text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h3 className="text-xl font-semibold mb-4">Find Me Online</h3>
        <div className="flex justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/graciouskamunga-creator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              className="w-10 h-10"
              alt="GitHub"
            />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/gracious-kamunga-123448339"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              className="w-10 h-10"
              alt="LinkedIn"
            />
          </motion.a>
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.section
        className="mt-24 text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h3 className="text-2xl font-semibold mb-3">Let’s Build Something Great</h3>
        <p className="mb-6 text-slate-600 dark:text-slate-400">
          Open to full-time roles, freelance work, and collaborations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-900"

          >
            Contact Me
          </Link>
          <a
            href="/Gracious_Kamunga_CV.pdf"
            download
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-900"
         
          >
            Download CV
          </a>
        </div>
      </motion.section>
    </PageWrapper>
  );
}
