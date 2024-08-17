import React from "react";

import { VerticalLinearLine } from "./VerticalLinearLine";

interface ColumnProps {
  dotCount: number;
  id: string | number;
  delay?: number;
  duration?: number;
}
export const Column = ({ dotCount, id, delay, duration }: ColumnProps) => {
  return (
    <>
      <VerticalLinearLine delay={delay} duration={duration} />
      {Array.from({ length: dotCount - 1 }).map((_, index) => (
        <React.Fragment key={`column-${id}-${index}`}>
          <div className="empty"></div>
          <VerticalLinearLine delay={delay} duration={duration} />
        </React.Fragment>
      ))}
    </>
  );
};
