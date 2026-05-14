import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const footerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full border-t border-slate-200 dark:border-gray-800 mt-20"
    >
      <div className="site-footer-content mx-auto grid gap-8 md:grid-cols-3 text-sm">

        {/* BRAND */}
        <motion.div variants={itemVariants} className="text-center md:text-left">
          <h3 className="font-semibold text-slate-900 dark:text-white text-base">
            Gracious Kamunga
          </h3>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Full-Stack Software Developer<br />
            Web • Mobile • Cloud
          </p>
          <p className="mt-2 text-xs text-slate-500">
            📍 Lilongwe, Malawi
          </p>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div variants={itemVariants} className="text-center">
          <h4 className="font-medium text-slate-900 dark:text-white mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-indigo-600 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* SOCIAL */}
        <motion.div variants={itemVariants} className="text-center md:text-right">
          <h4 className="font-medium text-slate-900 dark:text-white mb-3">
            Connect
          </h4>

          <div className="flex justify-center md:justify-end gap-4">
            {[
              {
                href: "https://github.com/graciouskamunga-creator",
                icon: "github",
              },
              {
                href: "https://www.linkedin.com/in/gracious-kamunga-123448339",
                icon: "linkedin",
              },
            ].map((social) => (
              <motion.a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="transition"
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${social.icon}/${social.icon}-original.svg`}
                  alt={social.icon}
                  className="w-6 h-6"
                />
              </motion.a>
            ))}
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Open to full-time & freelance work
          </p>
        </motion.div>
      </div>

      {/* COPYRIGHT */}
      <motion.div
        variants={itemVariants}
        className="site-footer-content border-t border-slate-200 dark:border-gray-800 !py-[19px] text-center text-xs text-slate-500"
      >
        © {new Date().getFullYear()} Gracious Kamunga. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
