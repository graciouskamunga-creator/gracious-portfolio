import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import PageWrapper from "../components/pageWrapper";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
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
  React.useEffect(() => {
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
      {/* NAVBAR */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <SEO
        title="Gracious Kamunga | Contact"
        description="Get in touch with Gracious Kamunga, Full-Stack Software Engineer."
      />

      {/* CONTACT FORM */}
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
            className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <input
              name="name"
              placeholder="Name"
              required
              className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700"
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              required
              className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700"
            />

            <button
              type="submit"
              className="w-full py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800"
            >
              Send Message
            </button>
          </form>

          {status && <p className="mt-4 text-center text-sm">{status}</p>}
        </div>
      </motion.section>
    </PageWrapper>
  );
}
