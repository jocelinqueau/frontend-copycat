"use client";

import { Text } from "joceui";

import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/classnames";

const Page = () => {
  return (
    <div className="relative flex !h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Text
        size="2"
        weight="medium"
        className="z-10 whitespace-pre-wrap tracking-tighter "
      >
        Dot Pattern
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
