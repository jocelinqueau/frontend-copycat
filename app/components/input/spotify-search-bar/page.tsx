import { Search } from "lucide-react";

import SpotifySearchBar from "./_components/spotify-input";

const Page = () => {
  return (
    <SpotifySearchBar
      right={<Search />}
      className="max-w-screen-md rounded-full bg-background border border-border px-fl-sm py-fl-2xs"
    />
  );
};

export default Page;
