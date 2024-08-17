import { Heading, Stack, Text, XStack } from "joceui";
import { PropsWithChildren } from "react";

import ComponentWrapper from "../_components/componentWrapper";
import Label from "../_components/label";
import Inbox from "../_svgs/inbox.svg";

interface DemoProps {
  title: string;
  description: string;
  tags: string[];
}
const Demo = ({
  title,
  description,
  tags,
  children,
}: PropsWithChildren<DemoProps>) => {
  return (
    <Stack gap="md" className="flex-row md:flex-col w-full" justify="between">
      <div className="flex flex-col gap-4 md:gap-9 w-full md:w-[256px]">
        <div className="flex gap-3 flex-col w-full">
          <Heading
            size="7"
            weight="medium"
            className="text-pretty leading-relaxed selection:bg-light-accent selection:dark:bg-dark-accent selection:dark:text-dark-200"
          >
            {title}
          </Heading>
          <Text size="8" className="selection:text-light-200  text-pretty">
            {description}
          </Text>
        </div>
        <XStack gap="3xs" className="flex-wrap">
          {tags.map((tag) => (
            <Label key={tag}>{tag}</Label>
          ))}
        </XStack>
      </div>
      <ComponentWrapper>{children}</ComponentWrapper>
    </Stack>
  );
};

export default Demo;
