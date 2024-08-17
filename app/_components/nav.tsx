"use client";

import { Text, XStack } from "joceui";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";

import ThemeSwitcher from "./themeSwitcher";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="fixed top-2 right-2 z-50">
      <XStack
        className="cursor-pointer text-muted-foreground hover:text-foreground"
        onClick={() => router.push("/")}
        align="center"
        gap="4"
      >
        <Home className="size-em" />
        <Text size="8" color="current">
          home
        </Text>
      </XStack>
      <ThemeSwitcher />
    </nav>
  );
};

export default Nav;
