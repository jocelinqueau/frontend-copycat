"use client";

import { cn } from "@/lib/classnames";
import DotPattern from "@/components/magicui/dot-pattern";

const Page = () => {
  return (
    <div className="relative flex !h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
        Dot Pattern
      </p>
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
}

export default Page;
