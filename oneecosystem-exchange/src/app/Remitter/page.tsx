"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProtection } from "../../context/ProtectionContext";
import FormInput from "../../components/FormInput";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RemitterPage() {
  const { setRemitterCode, isValidUPCCode } = useProtection();
  const [remitterCode, setRemitterCodeLocal] = useState(""); // Local state for form input
  const router = useRouter();

  useEffect(() => {
    if (!isValidUPCCode()) {
      router.push("/"); // Redirect to home if UPC code is not valid
    }
  }, [isValidUPCCode, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Fetch valid remitter codes from context
    const validRemitterCodes = [
      "D3F5K2L9",
      "A8B2C7D1",
      "H6J9L2M4",
      "P5Q7R3S8",
      "T1U2V4W6",
      "X9Y8Z3A7",
      "B6C3D9F8",
      "G2H7J4K1",
      "L8M3N2P5",
      "Q7R9S5T2",
    ];

    if (validRemitterCodes.includes(remitterCode)) {
      setRemitterCode(remitterCode); // Update remitter code in context
      router.push("/passphrase"); // Redirect to passphrase page
    } else {
      alert("Invalid Remitter Code!");
    }
  };

  return (
    <div>
        <nav>
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
            Get Remitter Code
          </motion.button>
        </Link>
      </div>
    </motion.nav>
        </nav>
    <div className="min-h-screen bg-black text-gold flex items-center justify-center">
      <div className="w-full max-w-md p-6 rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-6">Enter Remitter Code</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            type="text"
            label="Remitter Code"
            value={remitterCode}
            onChange={(e) => setRemitterCodeLocal(e.target.value)}
            placeholder="Enter Remitter Code"
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
          <button
            type="submit"
            className="w-full text-white border-gold py-2 rounded-full hover:bg-gold transition-colors hover:text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}
