"use client";

import { motion } from "framer-motion";
import { useId } from "react";

interface HorizontalLinearLineProps {
  lineColor?: string;
  gradientColor?: string;
  delay?: number;
  duration?: number;
}

export const HorizontalLinearLine = ({
  lineColor,
  gradientColor,
  delay = 1,
  duration = 1,
}: HorizontalLinearLineProps) => {
  const id = useId();

  const viewBox = "0 0 100 1";
  const path = "M 0 0.5H100";

  return (
    <div className="flex items-center justify-center">
      <motion.svg
        width="100%"
        height="1"
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
            initial={{ x1: "-140%", y1: 0, x2: "-40%", y2: 0 }}
            animate={{ x1: "120%", y1: 0, x2: "220%", y2: 0 }}
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
