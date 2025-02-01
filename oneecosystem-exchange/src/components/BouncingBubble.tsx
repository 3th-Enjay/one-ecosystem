"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface BubbleProps {
  size?: number;
  initialLeft: string; // e.g. "50%"
  initialTop: string;  // e.g. "20%"
}

export default function BouncingBubble({
  size = 80,
  initialLeft,
  initialTop,
}: BubbleProps) {
  const [randomX1, setRandomX1] = useState<number>(0);
  const [randomX2, setRandomX2] = useState<number>(0);
  const [randomY1, setRandomY1] = useState<number>(0);
  const [randomY2, setRandomY2] = useState<number>(0);
  const [isMounted, setIsMounted] = useState(false); // State to track mounting

  useEffect(() => {
    // This ensures the random values are only generated client-side
    setRandomX1(Math.floor(Math.random() * 200) - 100); // from -100 to 100px
    setRandomX2(Math.floor(Math.random() * 200) - 100);
    setRandomY1(Math.floor(Math.random() * 200) - 100);
    setRandomY2(Math.floor(Math.random() * 200) - 100);

    // Mark the component as mounted
    setIsMounted(true);
  }, []); // Empty dependency ensures it's called only once after mounting

  // Don't render the animation until the component has mounted (to avoid hydration mismatch)
  if (!isMounted) return null;

  return (
    <motion.img
      src="/logo.png" // Ensure your bubble image is in the /public folder
      alt="Bubble"
      className="absolute select-none pointer-events-none"
      style={{
        width: size,
        height: size,
        left: initialLeft,
        top: initialTop,
      }}
      animate={{
        x: [0, randomX1, randomX2, 0],
        y: [0, randomY1, randomY2, 0],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 8 + Math.random() * 4, // duration between 8-12 seconds
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      }}
    />
  );
}
