import { ReactNode } from "react";

export const GradientOverlay = (): ReactNode => (
  <div className="pointer-events-none absolute inset-0 z-10 size-full bg-gradient-to-t from-background to-transparent to-80%" />
);
