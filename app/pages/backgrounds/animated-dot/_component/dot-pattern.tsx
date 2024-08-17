// import { motion } from "framer-motion";
// import { useId, useState } from "react";

// import { cn } from "@/lib/classnames";

// interface DotPatternProps {
//   width?: number;
//   height?: number;
//   x?: number;
//   y?: number;
//   cx?: number;
//   cy?: number;
//   cr?: number;
//   className?: string;
//   [key: string]: any;
// }

// export const DotPattern = ({
//   width = 16,
//   height = 16,
//   x = 0,
//   y = 0,
//   cx = 1,
//   cy = 1,
//   cr = 1,
//   className,
//   ...props
// }: DotPatternProps) => {
//   const id = useId();
//   const [clickCount, setClickCount] = useState(0);

//   const rippleVariants = {
//     animate: {
//       scale: [1, 1.2, 1],
//       opacity: [0.8, 1, 0.8],
//       transition: {
//         duration: 2,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <motion.svg
//       key={clickCount}
//       aria-hidden="true"
//       className={cn(
//         "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80",
//         className,
//       )}
//       onClick={() => setClickCount((prev) => prev + 1)}
//       {...props}
//     >
//       <defs>
//         <pattern
//           id={id}
//           width={width}
//           height={height}
//           patternUnits="userSpaceOnUse"
//           patternContentUnits="userSpaceOnUse"
//           x={x}
//           y={y}
//         >
//           <motion.circle
//             id="pattern-circle"
//             cx={cx}
//             cy={cy}
//             r={cr}
//             variants={rippleVariants}
//             animate="animate"
//           />
//         </pattern>
//       </defs>
//       <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
//     </motion.svg>
//   );
// };

// export default DotPattern;

import { motion } from "framer-motion";
import { useId, useState } from "react";

import { cn } from "@/lib/classnames";

interface DotPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  [key: string]: unknown;
}

export const DotPattern = ({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}: DotPatternProps) => {
  const id = useId();
  const [clickCount, setClickCount] = useState(0);

  const rippleVariants = {
    initial: { scale: 1, opacity: 0.8 },
    animate: (i: number) => ({
      scale: [1, 1.2, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        delay: i * 0.03,
        repeat: Infinity,
        repeatDelay: 1,
      },
    }),
  };

  return (
    <motion.svg
      key={clickCount}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80",
        className,
      )}
      onClick={() => setClickCount((prev) => prev + 1)}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          {Array.from({ length: 3 }).map((_, row) =>
            Array.from({ length: 3 }).map((_, col) => (
              <motion.circle
                key={`${row}-${col}`}
                cx={cx + col * width}
                cy={cy + row * height}
                r={cr}
                variants={rippleVariants}
                initial="initial"
                animate="animate"
                custom={row * 3 + col}
              />
            )),
          )}
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </motion.svg>
  );
};

export default DotPattern;
