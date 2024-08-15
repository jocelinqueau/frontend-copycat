import SpotifySearchBar from "./_components/spotify-input";
import { Search } from "lucide-react";

const Page = (  ) => {
  return <SpotifySearchBar
    right={<Search />}
    className="max-w-screen-md rounded-full bg-red-500 px-fl-sm py-fl-2xs"
  />
}

export default Page