const noise =
  "https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png";

import { Heading, YStack } from "joceui";

export default function Page() {
  return (
    <main className="bg-[#030617] min-h-screen">
      <br />
      <div className="z-10 relative border-t border-dashed border-blueish">
        <div id="img-group">
          <img
            id="grid-image"
            className="absolute top-0 left-[calc(50%-600px)] z-0 opacity-50"
            src="https://framerusercontent.com/images/hREJN8AsFEbJPz6GtPdzL1hLkvc.png"
            alt="grid image used as sub layer"
          />
          <img
            id="gradient-blur"
            className="absolute -top-44 left-0 z-0 opacity-50"
            src="https://framerusercontent.com/images/B062XqbAVfxGRqaJzDkdlz9Uc.png"
            alt="gradient blur used as sub layer"
          />
          <div
            style={{
              mixBlendMode: "overlay",
            }}
          >
            <div
              id="noise"
              className="absolute w-full h-full bg-repeat opacity-10 z-0"
              style={{
                backgroundImage: `url(${noise})`,
                backgroundSize: "64px 64px",
              }}
            />
          </div>
        </div>
        <div className="z-10 relative py-24">
          <YStack align="center">
            <Heading
              size="4"
              weight="extrabold"
              className="text-white font-manrope"
            >
              <YStack center>
                <span>Hey, I&apos;m Jocelin !</span>
                <span>Welcome to my corner</span>
                <span>of the internet</span>
              </YStack>
            </Heading>
          </YStack>
          <div></div>
        </div>
      </div>
    </main>
  );
}
