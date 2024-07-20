import { Column } from "./_components/Column";
import { Row } from "./_components/Row";

import './styles.css'

const Page = () => {
  const delay = Math.random() * 3 + 1
  const duration = Math.random() * 3 + 1

  const secondDelay = Math.random() * 5 + 2
  const secondDuration = Math.random() * 5 + 1

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid-container">
        <Row dotCount={4} id={1} delay={secondDelay} duration={secondDuration} />

        <Column dotCount={4} id={1} delay={secondDelay} duration={secondDuration} />

        <Row dotCount={4} id={2} delay={secondDelay} duration={secondDuration} />

        <Column dotCount={4} id={2} delay={delay} duration={duration} />

        <Row dotCount={4} id={3} delay={secondDelay} duration={secondDuration} />

        <Column dotCount={4} id={4} delay={secondDelay} duration={secondDuration} />

        <Row dotCount={4} id={4} delay={delay} duration={duration} />
      </div>
    </div>
  );
};

export default Page;