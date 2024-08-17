"use client";

import { motion } from "framer-motion";
import { HTMLAttributes, memo, ReactNode, useEffect, useState } from "react";

import { cn } from "@/lib/classnames";

import { useDeviceSize } from "../_hooks/useDeviceSize";

const cols = new Array(40).fill(1);
const colors = [
  "#f87171",
  "#fb923c",
  "#fbbf24",
  "#facc15",
  "#facc15",
  "#a3e635",
  "#4ade80",
  "#34d399",
  "#2dd4bf",
  "#22d3ee",
  "#38bdf8",
  "#60a5fa",
  "#818cf8",
  "#a78bfa",
  "#c084fc",
  "#e879f9",
  "#f472b6",
  "#fb7185",
];

export function Grid({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>): ReactNode {
  const { width } = useDeviceSize();
  const [rows, setRows] = useState(calcRows(width));

  useEffect(() => {
    setRows(calcRows(width));
  }, [width]);

  return (
    <div
      // style={{
      //   transform:
      //     'translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)',
      // }}
      className={cn(
        "absolute inset-0 z-0 flex size-full overflow-hidden",
        className,
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={"row" + i}
          className="size-8 border-l border-muted-foreground/20"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={"col" + j}
              className="size-8 border-r border-t border-muted-foreground/20"
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
}

function calcRows(width: number): number[] {
  return new Array(Math.floor(width / 16)).fill(1);
}

function getRandomColor(): string {
  return colors[Math.floor(Math.random() * colors.length)];
}

export const ColoredTiles = memo(Grid);
