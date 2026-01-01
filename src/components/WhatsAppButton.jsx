import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/265886935105"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="
        fixed 
        bottom-4 right-4
        md:bottom-6 md:right-6
        z-[9999]
        flex items-center gap-2
        bg-green-500 hover:bg-green-600
        text-white
        px-4 py-3
        rounded-full
        shadow-lg
        text-sm md:text-base
      "
    >
      <span className="text-lg">📞</span>
      <span className="hidden sm:inline">Hire Me</span>
    </motion.a>
  );
}
