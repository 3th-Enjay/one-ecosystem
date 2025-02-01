"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-black text-gold text-center py-4 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <p>&copy; {new Date().getFullYear()} OneEcoSystem. All rights reserved.</p>
    </motion.footer>
  );
}
