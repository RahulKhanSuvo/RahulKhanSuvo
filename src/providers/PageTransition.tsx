"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function PageTransition() {
  const [show, setShow] = useState(true);

  const columns = Array.from({ length: 12 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="fixed inset-0 z-9999 flex pointer-events-none"
    >
      {columns.map((_, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: {
              y: "0%",
            },
            visible: {
              y: "100%",
            },
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.06,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="h-full flex-1 bg-black"
        />
      ))}
    </motion.div>
  );
}
