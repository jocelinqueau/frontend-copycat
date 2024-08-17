"use server";

import Link from "next/link";

import getRoutes from "@/actions/getRoutes";

import PageMenu from "../_components/pageMenu";

const Page = async () => {
  const routes = getRoutes({ startingPoint: "pages" });

  return <PageMenu routes={routes} />;
};

export default Page;
