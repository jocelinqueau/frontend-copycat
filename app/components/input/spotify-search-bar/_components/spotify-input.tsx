"use client";

import { type StackGap } from "joceui";
import { XStack } from "joceui";
import { useLayoutEffect, useRef } from "react";

import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/lib/classnames";

interface _InputProps extends InputProps {
  right?: React.ReactNode;
  gap?: StackGap;
  left?: React.ReactNode;
  className?: string;
}
const _Input = ({
  right,
  left,
  gap = "4",
  className,
  ...props
}: _InputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (right || left) {
      ref.current?.classList.add(
        "focus:outline-none",
        "focus:ring-0",
        "focus-visible:ring-0",
        "border-none",
        "focus-visible:ring-offset-0",
        "bg-inherit",
      );
      ref.current?.classList.remove(
        "ring-offset-background",
        "focus-visible:ring-2",
        "focus-visible:ring-ring",
        "focus-visible:ring-offset-2",
      );
    }
  }, [right, left]);

  return (
    <XStack
      center
      gap={gap}
      className={cn("focus-within:ring-2 focus-within:ring-border", className)}
    >
      {left && left}
      <Input ref={ref} {...props} />
      {right && right}
    </XStack>
  );
};

export default _Input;
