"use server";

import getRoutes from "@/actions/getRoutes";

import PageMenu from "../_components/pageMenu";

const Page = async () => {
  const routes = getRoutes({ startingPoint: "components" });

  return <PageMenu routes={routes} />;
};

export default Page;
