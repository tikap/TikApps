"use client";

import dynamic from "next/dynamic";
import PageLoadingWrapper from "../components/wrappers/pageloadingwrapper.js";

// Import sub components dynamically
const MainWrapper = dynamic(
  () => import("../components/wrappers/mainwrapper.js"),
  {
    loading: () => <PageLoadingWrapper loadingText="Loading..." />,
    ssr: false,
  }
);

const Bmi = dynamic(() => import("./bmi.js"), {
  loading: () => <PageLoadingWrapper loadingText="Loading..." />,
  ssr: false,
});

// Export this main component
export default function Page() {
  return <MainWrapper wrappedComponent={<Bmi />} />;
}
