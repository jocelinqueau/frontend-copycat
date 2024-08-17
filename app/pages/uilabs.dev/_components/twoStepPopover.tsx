import Inbox from "../_svgs/inbox.svg";

const TwoStepPopover = () => {
  return (
    <div>
      <button
        className="group relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-white p-[6px] transition-shadow ease-out dark:bg-[#1a1a1a] shadow-lg dark:shadow-inner-shadow-dark-float"
        style={{ willChange: "auto", padding: "4px" }}
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-:Rglbqda:"
        data-state="closed"
      >
        <div
          style={{
            willChange: "auto",
            transform: "scale(0.75) translateZ(0px)",
          }}
          className="absolute flex h-full w-full flex-grow items-center justify-center rounded-md bg-[#f5f5f5] text-black/50 dark:bg-[#1F1F1F] dark:text-white/60"
        >
          <span
            style={{
              willChange: "auto",
              transform: "scale(1.2) translateZ(0px)",
            }}
            className="relative"
          >
            <Inbox />
          </span>
        </div>
      </button>
    </div>
  );
};

export default TwoStepPopover;
