"use client";

import { motion } from "framer-motion";

export function GradientBlobs() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      <motion.div
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full
                   bg-purple-500/15 dark:bg-purple-500/20 blur-[120px]"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-10 w-[400px] h-[400px] rounded-full
                   bg-violet-400/10 dark:bg-violet-400/15 blur-[100px]"
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 50, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 right-1/4 w-[350px] h-[350px] rounded-full
                   bg-indigo-500/10 dark:bg-indigo-500/15 blur-[100px]"
        animate={{
          x: [0, 30, -50, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.05, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
