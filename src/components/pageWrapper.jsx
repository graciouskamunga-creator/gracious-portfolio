import { motion } from 'framer-motion';

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  },
};

export default function PageWrapper({ children }) {
  return (
    <section className="pt-6">
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
    </section>
  );
}
