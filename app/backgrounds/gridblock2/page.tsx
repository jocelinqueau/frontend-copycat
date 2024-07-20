import React from "react";
import AnimatedLine from "./_components/Foo";
import { cn } from "@/lib/classnames";

const Dot = () => {
  return (
    <div className={cn(
      '!h-6 !w-6 flex items-center justify-center rounded-full bg-white/35',
      'dot'
    )}>
      <div className="h-2 w-2 rounded-full bg-white/70" />
    </div>
  );
};
const Page = () => {
  return (
    <div>
      <span className="text-fl-4xl font-medium md:font-semibold">hello</span>
      <div className="flex flex-col">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="flex flex-1 w-full" key={"grid-column" + index}>
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={`grid-row` + index} className="flex flex-col items-start justify-center">
                <div className="flex items-center justify-center">
                  <div>dot</div>
                  <div>line</div>
                </div>
                col
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}


export default Page;

