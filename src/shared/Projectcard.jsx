import React from 'react';
import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectCard({ project }) {
  return (
    <motion.div
      variants={item}
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
    >
      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
      <p className="mb-3 text-slate-700 dark:text-slate-300">{project.desc}</p>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Technologies: {project.tech}</p>
      <div className="flex gap-3">
        <a href={project.link} className="text-sm underline">Live</a>
        <a href={project.github} className="text-sm underline">GitHub</a>
      </div>
    </motion.div>
  );
}
