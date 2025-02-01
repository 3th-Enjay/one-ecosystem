"use client";

import BouncingBubble from "./BouncingBubble";

export default function FloatingBubbles() {
  // Create an array for, say, 8 bubbles
  const bubblesArray = Array.from({ length: 8 });

  return (
    <>
      {bubblesArray.map((_, i) => {
        // Use percentages for initial positions so that the bubbles span the whole screen.
        const initialLeft = `${Math.random() * 100}%`;
        const initialTop = `${Math.random() * 100}%`;
        // Random size between 40 and 120 pixels
        const size = 40 + Math.random() * 80;
        return (
          <BouncingBubble
            key={i}
            initialLeft={initialLeft}
            initialTop={initialTop}
            size={size}
          />
        );
      })}
    </>
  );
}
