"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      className="w-full bg-black text-gold p-4 shadow-md fixed top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">OneEcoSystem</h1>

        {/* Wrap the button with Link */}
        <Link href="https://t.me/Oeslegalofficer" passHref>
          <motion.button
            className="border border-gold text-gold bg-black px-4 py-2 hover:bg-gold hover:text-black transition-colors duration-300 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get UPC Code
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
}
