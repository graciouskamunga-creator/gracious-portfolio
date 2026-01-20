import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import SEO from "../components/SEO";
import emailjs from "@emailjs/browser";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await emailjs.sendForm(
        "service_etj7sjz",
        "template_6g9lf3j",
        formRef.current,
        "dftHjFDGwqNO0-NLh"
      );

      setStatus("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <PageWrapper>
      <SEO
        title="Gracious Kamunga | Contact"
        description="Get in touch with Gracious Kamunga, Full-Stack Software Developer."
      />

      <motion.section
        className="flex justify-center py-12 px-4"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 p-6 rounded-xl shadow-md 
                       bg-white dark:bg-gray-800
                       text-slate-900 dark:text-white"
          >
            <input
              name="name"
              placeholder="Name"
              required
              className="w-full px-4 py-3 rounded-lg border 
                         bg-white dark:bg-gray-900
                         text-slate-900 dark:text-white
                         border-slate-300 dark:border-gray-700
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg border 
                         bg-white dark:bg-gray-900
                         text-slate-900 dark:text-white
                         border-slate-300 dark:border-gray-700
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              required
              className="w-full px-4 py-3 rounded-lg border 
                         bg-white dark:bg-gray-900
                         text-slate-900 dark:text-white
                         border-slate-300 dark:border-gray-700
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 text-white 
                         rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p className="mt-4 text-center text-sm text-slate-600 dark:text-slate-400">
              {status}
            </p>
          )}
        </div>
      </motion.section>
    </PageWrapper>
  );
}
