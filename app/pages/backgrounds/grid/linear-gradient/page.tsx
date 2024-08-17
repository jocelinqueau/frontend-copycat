import "./styles.css";

import classNames from "classnames";

import { Column } from "./_components/Column";
import { Row } from "./_components/Row";

const Page = () => {
  const delay = Math.random() * 3 + 1;
  const duration = Math.random() * 3 + 1;

  const secondDelay = Math.random() * 5 + 2;
  const secondDuration = Math.random() * 5 + 1;

  const dotCount = 7;
  return (
    <div className="w-screen h-screen relative">
      <div
        className={classNames(
          "grid-container",
          "scale-110 absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent,white)] z-0 pointer-events-none",
        )}
      >
        <Row
          dotCount={dotCount}
          id={1}
          delay={secondDelay}
          duration={secondDuration}
        />

        <Column
          dotCount={dotCount}
          id={1}
          delay={secondDelay}
          duration={secondDuration}
        />

        <Row
          dotCount={dotCount}
          id={2}
          delay={secondDelay}
          duration={secondDuration}
        />

        <Column dotCount={dotCount} id={2} delay={delay} duration={duration} />

        <Row
          dotCount={dotCount}
          id={3}
          delay={secondDelay}
          duration={secondDuration}
        />

        <Column
          dotCount={dotCount}
          id={4}
          delay={secondDelay}
          duration={secondDuration}
        />

        <Row dotCount={dotCount} id={4} delay={delay} duration={duration} />
      </div>

      <h1 className="z-10 text-fl-4xl font-semibold text-center pt-20">
        Hello world
      </h1>
    </div>
  );
};

export default Page;
