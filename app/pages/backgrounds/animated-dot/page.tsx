"use client";

import { Text } from "joceui";

import { cn } from "@/lib/classnames";

import DotPattern from "./_component/dot-pattern";

const Page = () => {
  return (
    <div className="relative flex !h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Text size="2" weight="medium" className="z-10 whitespace-pre-wrap">
        Animated Dot Pattern
      </Text>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        )}
        width={24}
        height={24}
        cr={1.5}
      />
    </div>
  );
};

export default Page;
