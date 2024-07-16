const noise =
  "https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png";

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
          <h1 className=" text-lg flex flex-col items-center text-white font-extrabold font-manrope [&>*]:leading-115 text-center inter. md:text-xl">
            <span>Hey, I’m Jocelin !</span>
            <span>Welcome to my corner</span>
            <span>of the internet</span>
          </h1>
          <div></div>
        </div>
      </div>
    </main>
  );
}
