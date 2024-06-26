"use client";

export const revalidate = 0;

import dynamicImport from "next/dynamic";
import PageLoadingWrapper from "@/components/wrappers/pageloadingwrapper.js";

// Import sub components dynamically
const MainWrapper = dynamicImport(
  () => import("@/components/wrappers/mainwrapper.js"),
  {
    loading: () => <PageLoadingWrapper loadingText="Loading..." />,
    ssr: false,
  }
);

const Home = dynamicImport(() => import("./home.js"), {
  loading: () => <PageLoadingWrapper loadingText="Loading..." />,
  ssr: false,
});

// Export this main component
export default function Page() {
  return <MainWrapper wrappedComponent={<Home />} />;
}
