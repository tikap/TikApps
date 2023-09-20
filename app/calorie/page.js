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

// Export this main component
export default function Page() {
  return <MainWrapper wrappedComponent={<p>Work in progress...</p>} />;
}

// Sauce:
// https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation
// https://en.wikipedia.org/wiki/Schofield_equation
// https://en.wikipedia.org/wiki/Institute_of_Medicine_Equation
