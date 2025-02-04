"use client";

import { motion } from "framer-motion";
import FloatingBubbles from "./FloatingBubbles";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative h-screen flex justify-center items-center text-center bg-black text-gold overflow-hidden px-6">
            {/* Animated Background Gradient */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b via-black to-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1.5 }}
            />

            {/* Floating bubbles spread over the screen */}
            <FloatingBubbles />

            {/* Hero Content */}
            <section className="relative z-10 px-6 max-w-4xl mx-auto">
                {/* Animated Heading */}
                <motion.h1
                    className="text-4xl md:text-6xl font-extrabold drop-shadow-lg text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    WELCOME TO <span className="text-gold">ONEECOSYSTEM</span> DEALSHAKER PRIVATE EXCHANGE PLATFORM
                </motion.h1>

                {/* Animated Description */}
                <motion.p
                    className="text-lg mt-3 max-w-2xl mx-auto drop-shadow text-gold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    It&apos;s our greatest priority to serve you better ✨.
                </motion.p>

                {/* Description text */}
                <div className="mt-6 border border-gold flex justify-between items-center max-w-[29rem] mx-auto rounded-full p-2">

                    <motion.p
                        className=" text-sm md:text-lg text-white pl-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        Click the button to continue
                    </motion.p>

                    {/* Animated Button */}
                    <Link href="/form" passHref>
                        <motion.button
                            className=" border border-gold text-gold bg-black px-4 py-2 text-sm md:text-lg font-medium hover:bg-gold hover:text-black transition-colors duration-300 rounded-full"
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            Get Started
                        </motion.button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
