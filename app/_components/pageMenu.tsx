import { Heading, YStack } from "joceui";
import Link from "next/link";
import { PropsWithChildren } from "react";

const HomePageHeading = ({ children }: PropsWithChildren) => {
  return (
    <Heading size="9" color="current" weight="regular">
      {children}
    </Heading>
  );
};

interface Route {
  path: string;
  name: string;
}

const PageMenu = ({ routes }: { routes: Route[] }) => {
  return (
    <YStack align="stretch">
      <nav>
        <YStack as="ul">
          {routes.map((route) => (
            <li key={route.path} className="hover:text-blue-500">
              <Link href={route.path}>
                <HomePageHeading>{route.name}</HomePageHeading>
              </Link>
            </li>
          ))}
        </YStack>
      </nav>

      <div style={{ backgroundColor: "var(--red)" }}>
        <HomePageHeading>Hello World</HomePageHeading>
      </div>
    </YStack>
  );
};

export default PageMenu;
