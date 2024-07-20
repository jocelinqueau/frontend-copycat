'use client';

import { motion } from "framer-motion";
import { useId } from "react";

// https://stackoverflow.com/questions/50155878/svg-make-viewbox0-0-100-100-with-percentages

export interface AnimatedLineProps {
  className?: string;
  width?: number | string;
  gradient: {
    height: number;
    color: string;
    delay: number;
    duration: number;
  },
  line: {
    height: number;
    color?: string;
  }
}

const AnimatedLine = ({ className, width = 300, gradient, line }: AnimatedLineProps) => {
  const id = useId();

  const _gradientColor = gradient.color ?? 'currentColor';
  const _lineColor = line.color ?? 'black';

  return (
    <motion.svg
      width={width}
      height={line.height}
      viewBox={`0 0 100 ${line.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path d="M0 0.5H100" stroke={_lineColor} />
      <motion.path
        d="M0 0H100"
        stroke={`url(#gradient-${id})`}
        strokeWidth={1}
      />

      <defs>
        <motion.linearGradient
          id={`gradient-${id}`}
          initial={{ x1: '-140%', y1: 0, x2: '-40%', y2: 0 }}
          animate={{ x1: '120%', y1: 0, x2: '220%', y2: 0 }}
          transition={{
            repeat: Infinity,
            duration: gradient.duration,
            delay: gradient.delay,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <motion.stop offset="0%" stopColor="transparent" />
          <motion.stop offset="50%" stopColor={_gradientColor} />
          <motion.stop offset="100%" stopColor="transparent" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};

export default AnimatedLine;
