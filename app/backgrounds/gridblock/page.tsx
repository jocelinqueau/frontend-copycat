import React from "react";
import cn from "classnames";

import { SVG } from "./_components/SVG";
import { SVGVertical } from "./_components/SVGVertical";

import './page.css'

const Dot = () => {
  return (
    <div className={cn(
      'h-6 w-6 flex items-center justify-center rounded-full',
      'dot'
    )}>
      <div className="h-2 w-2 rounded-full" />
    </div>
  );
};

const GridBlock = () => {
  return (
    <div className="flex flex-col items-start justify-center w-60">
      <div className="flex items-center justify-center">
        <Dot />
        <SVG />
        {/* <Dot /> */}
      </div>
      <SVGVertical className="ml-3" />
    </div>
  );
};

const Page = () => {
  return (
    <div className="w-full h-full z-0">
      <div className="bg-background">
      {Array.from({ length: 6 }).map((_, index) => (
        <div className="flex" key={"grid-column" + index}>
          {Array.from({ length: 10 }).map((_, index) => (
            <GridBlock key={`grid-row` + index} />
          ))}
        </div>
      ))}
      </div>
    </div>
  )
};

Page.theme = 'light'

export default Page;