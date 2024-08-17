import { Heading, Text, YStack } from "joceui";
import Link from "next/link";

import { ColoredTiles } from "./_components/coloredTiles";
import { GradientOverlay } from "./_components/gradientOverlay";

const Page = () => {
  return (
    <div className="relative flex flex-col gap-fl-2xl h-screen w-screen items-center justify-center overflow-hidden">
      <GradientOverlay />
      <ColoredTiles className="z-0" />
      <YStack gap="2xs" center className="relative z-20">
        <Heading size="2" weight="bold">
          Inspiration
        </Heading>
        <Link
          href="https://github.com/eric-k-chu/kiyuen"
          className="text-fl-xl text-center text-muted-foreground hover:text-foreground"
        >
          <Text size="3"> View on GitHub</Text>
        </Link>
        <a
          href="https://www.kiyuen.dev/"
          className="text-fl-md text-center text-muted-foreground hover:text-foreground"
        >
          <Text color="muted" size="5">
            kiyuen.dev
          </Text>
        </a>
      </YStack>
    </div>
  );
};
export default Page;
