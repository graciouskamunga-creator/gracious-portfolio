import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import { useRef } from "react";
import PageWrapper from '../components/pageWrapper';


export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <PageWrapper>
      <SEO
        title="About Gracious Kamunga | Full-Stack Software Developer"
        description="Full-Stack Software Developer skilled in React, Flutter, Node.js, Firebase, SQL, and scalable system architecture."
      />

      {/* HERO */}
      <motion.section
        ref={ref}
        style={{ y }}
        className="pt-24 max-w-5xl mx-auto px-6 text-center space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Full-Stack Software Developer
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          I design and build scalable web, mobile, and backend systems using
          modern technologies including React.js, Flutter, Node.js, Firebase,
          SQL, and cloud-based architectures.
        </p>

        <a
          href="/Gracious_Kamunga_Profile.pdf"
          download
          className="inline-block mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Download About PDF
        </a>
      </motion.section>

      {/* CAREER TIMELINE */}
      <section className="mt-24 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Career Timeline</h2>

        <div className="space-y-6 border-l-2 border-indigo-500 pl-6">
          {[
            {
              year: "2021",
              title: "Advanced Diploma in Computing – NACIT",
              desc: "Built strong foundations in programming, databases, and system analysis.",
            },
            {
              year: "2022",
              title: "Junior Software Developer",
              desc: "Developed PHP & MySQL systems, desktop applications in C#, and REST APIs.",
            },
            {
              year: "2023",
              title: "Mobile & Web Developer",
              desc: "Built Flutter & React Native apps integrated with Firebase and Supabase.",
            },
            {
              year: "2024 – Present",
              title: "Full-Stack Software Engineer",
              desc: "Delivering scalable full-stack solutions across web, mobile, and cloud.",
            },
          ].map((item) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <span className="text-indigo-600 font-semibold">
                {item.year}
              </span>
              <h3 className="font-bold mt-1">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mt-24 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Project Supervisor",
              role: "System Development Lead",
              quote:
                "Gracious demonstrates exceptional ownership, clean code practices, and strong problem-solving skills.",
            },
            {
              name: "Startup Founder",
              role: "Client",
              quote:
                "He delivered our platform on time with great attention to scalability and user experience.",
            },
          ].map((t) => (
            <motion.div
              key={t.name}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <p className="italic text-slate-600 dark:text-slate-300">
                “{t.quote}”
              </p>
              <div className="mt-4 font-semibold">{t.name}</div>
              <div className="text-sm text-slate-500">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ATS KEYWORDS */}
      <section className="mt-24 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Core Expertise</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "React.js",
            "React Native",
            "Flutter",
            "Dart",
            "Node.js",
            "PHP",
            "C#",
            ".NET",
            "SQL",
            "Firebase",
            "Supabase",
            "REST APIs",
            "Authentication",
            "Cloud Systems",
            "System Architecture",
            "Agile Development",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-28 text-center px-6">
        <h2 className="text-2xl font-semibold mb-3">
          Ready to Build Scalable Solutions
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Open to full-time roles, remote opportunities, and impactful projects.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-slate-900 dark:bg-white dark:text-black text-white rounded-lg"
        >
          Contact Me
        </a>
      </section>
    </PageWrapper>
  );
}
