import getRoutes from "@/actions/getRoutes";

import PageMenu from "./_components/pageMenu";

const Page = async () => {
  const routes = getRoutes({ maxDepth: 1 });

  return <PageMenu routes={routes} />;
};

export default Page;
