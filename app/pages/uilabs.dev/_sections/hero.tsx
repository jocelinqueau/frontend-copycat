import { Heading, XStack } from "joceui";

import Logo from "../_svgs/logo.svg";

const Hero = () => {
  return (
    <XStack justify="between" className="w-full">
      <Logo />

      <div className="max-w-[50ch] break-words">
        <Heading className="font-redaction-50 text-right">
          Small laboratory of fine UI
        </Heading>
      </div>
    </XStack>
  );
};

export default Hero;
