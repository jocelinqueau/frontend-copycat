import { Stack } from "joceui";
import { PropsWithChildren } from "react";

const ComponentWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      center
      className="flex h-[400px] w-full rounded-lg border border-border md:h-[640px] md:flex-1"
    >
      {children}
    </Stack>
  );
};

export default ComponentWrapper;
