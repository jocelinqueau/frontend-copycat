"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import cn from "classnames";

export const SVG = ({ className }: { className?: string }) => {
  const width = 300;
  const height = 1;

  const id = useId();
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-neutral-100 dark:text-neutral-800", className)}
    >
      <path d="M0.5 0.5H479" stroke="currentColor" />
      <motion.path
        d="M0.5 0.5H479"
        stroke={`url(#gradient-${id})`}
        strokeWidth={1}
      />

      <defs>
        <motion.linearGradient
          id={`gradient-${id}`}
          initial={{ x1: -200, y1: 0, x2: -100, y2: 0 }}
          animate={{ x1: 400, y1: 0, x2: 600, y2: 0 }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 2 + 1,
            delay: Math.floor(Math.random() * 6) + 5,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <motion.stop offset="0%" stopColor="transparent" />
          <motion.stop offset="50%" stopColor="var(--neutral-200)" />
          <motion.stop offset="100%" stopColor="transparent" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};