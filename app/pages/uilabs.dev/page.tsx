import { YStack } from "joceui";

import ActionToolbar from "./_components/actionToolbar";
import TwoStepPopover from "./_components/twoStepPopover";
import Demo from "./_sections/demo";
import Hero from "./_sections/hero";

const Page = () => {
  return (
    <YStack gap="lg" className="px-fl-2xs">
      <Hero />
      <Demo
        title="Two-Step Popover"
        description="Experimenting how a two-step popover can be implemented and getting a feeling of the transition. Not quite there yet but hey, all of this is experimental."
        tags={["react", "tailwindcss", "framer motion"]}
      >
        <TwoStepPopover />
      </Demo>

      <Demo
        title="Action Toolbar"
        description="Toolbar that changes state to notify and enable information and actions. Try clicking on the buttons to change the state of the toolbar."
        tags={["react", "tailwindcss", "framer motion"]}
      >
        <ActionToolbar />
      </Demo>
    </YStack>
  );
};

export default Page;
