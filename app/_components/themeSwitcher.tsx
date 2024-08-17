"use client";

import { Text, XStack } from "joceui";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const icon =
    theme === "light" ? (
      <Sun className="size-em" />
    ) : (
      <Moon className="size-em" />
    );

  return (
    <XStack
      as="button"
      className="group"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      align="center"
      gap="4"
    >
      <Text size="8" color="muted" className="group-hover:text-foreground">
        {" "}
        {icon}
      </Text>
      <Text size="8" color="muted" className="group-hover:text-foreground">
        {" "}
        {theme}
      </Text>
    </XStack>
  );
};

export default ThemeSwitcher;
