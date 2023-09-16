"use client";

import dynamic from "next/dynamic";

// Import sub components dynamically
const MainWrapper = dynamic(
  () => import("../components/wrappers/mainwrapper.js"),
  {
    loading: () => (
      <p className="h-screen p-8 text-center text-neutral-200">Loading...</p>
    ),
    ssr: false,
  }
);

const Bmi = dynamic(() => import("./bmi.js"), {
  loading: () => <p className="my-4 text-neutral-200">Loading...</p>,
  ssr: false,
});

// Export this main component
export default function Page() {
  return <MainWrapper wrappedComponent={<Bmi />} />;
}
