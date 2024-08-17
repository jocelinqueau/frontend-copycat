"use client";

import { motion } from "framer-motion";
import { useId } from "react";

interface VerticalLinearLineProps {
  lineColor?: string;
  gradientColor?: string;
  delay?: number;
  duration?: number;
}

export const VerticalLinearLine = ({
  lineColor,
  gradientColor,
  delay = 1,
  duration = 1,
}: VerticalLinearLineProps) => {
  const id = useId();

  const viewBox = "0 0 1 100";
  const path = "M0.5 0.5V100";

  return (
    <div className="flex items-center justify-center">
      <motion.svg
        width="1"
        height="100%"
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d={path} stroke={lineColor ?? "var(--backgroundish)"} />
        <motion.path d={path} stroke={`url(#gradient-${id})`} strokeWidth={1} />

        <defs>
          <motion.linearGradient
            id={`gradient-${id}`}
            initial={{ x1: 0, y1: "-140%", x2: 0, y2: "-40%" }}
            animate={{ x1: 0, y1: "120%", x2: 0, y2: "220%" }}
            transition={{
              repeat: Infinity,
              duration,
              delay,
            }}
            gradientUnits="userSpaceOnUse"
          >
            <motion.stop offset="0%" stopColor="transparent" />
            <motion.stop
              offset="50%"
              stopColor={gradientColor ?? "var(--foregroundish)"}
            />
            <motion.stop offset="100%" stopColor="transparent" />
          </motion.linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};
