'use client'

import { useLayoutEffect, useRef } from "react";

import { type StackGap } from "joceui";
import { Input, InputProps } from "@/components/ui/input";

import { XStack } from 'joceui'

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
      console.log("here");
      ref.current?.classList.add(
        "focus:outline-none",
        "focus:ring-0",
        "focus-visible:ring-0",
        "border-0",
        "focus-visible:ring-offset-0",
        "bg-inherit",
      );
      ref.current?.classList.remove("ring-offset-background");
    }
  }, [right, left]);

  return (
    <XStack center gap={gap} className={className}>
      {left && left}
      <Input ref={ref} {...props} />
      {right && right}
    </XStack>
  );
};

export default _Input;