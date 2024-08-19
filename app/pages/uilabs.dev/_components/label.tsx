import { Stack } from "joceui";

import { cn } from "@/lib/classnames";

const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack
      center
      className={cn(
        "w-fit cursor-default rounded-md",
        "pb-[2px] pl-2 pr-2 pt-[2px] font-sans text-xs text-background bg-foreground/80",
      )}
    >
      {children}
    </Stack>
  );
};

export default Label;
