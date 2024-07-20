import { ColoredTiles } from "./_components/coloredTiles";
import { GradientOverlay } from "./_components/gradientOverlay";

const Page = () => {
  return (
    <div className="relative flex flex-col gap-fl-2xl h-screen w-screen items-center justify-center overflow-hidden">
      <GradientOverlay />
      <ColoredTiles className="z-0" />
      <div className="relative z-20 flex flex-col items-center justify-center gap-fl-2xs">
        <h1 className="text-fl-4xl font-bold max-w-max text-center">Inspiration</h1>
        <a href="https://github.com/eric-k-chu/kiyuen" className="text-fl-xl text-center text-muted-foreground hover:text-foreground">
          View on GitHub
        </a>
        <a href="https://www.kiyuen.dev/" className="text-fl-md text-center text-muted-foreground hover:text-foreground">
          kiyuen.dev
        </a>
      </div>
    </div>
  );
};
export default Page;