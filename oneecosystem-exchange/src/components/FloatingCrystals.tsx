"use client";

import { motion } from "framer-motion";
import React from "react";

// Create a simple crystal image or SVG
const crystalStyle = {
    width: "40px",
    height: "40px",
    background: "url('/path-to-your-crystal-image.png') no-repeat center/contain",
};

const FloatingCrystals = () => {
    // Generate a random position and animation for crystals
    const generateRandomPosition = () => {
        const randomX = Math.random() * 100; // percentage width
        const randomY = Math.random() * 100; // percentage height
        const randomDuration = Math.random() * (4 - 2) + 2; // Between 2s and 4s
        return {
            x: `${randomX}%`,
            y: `${randomY}%`,
            duration: `${randomDuration}s`,
        };
    };

    const positions = Array(10).fill(null).map(generateRandomPosition); // Adjust the number of crystals

    return (
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
            {positions.map((position, index) => (
                <motion.div
                    key={index}
                    className="crystal"
                    style={crystalStyle}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        x: position.x,
                        y: position.y,
                    }}
                    transition={{
                        duration: parseFloat(position.duration),
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "ease-in-out",
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingCrystals;
