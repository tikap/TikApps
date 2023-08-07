"use client";

import dynamic from "next/dynamic";

// Import sub components dynamically
const MainWrapper = dynamic(() => import("../components/mainwrapper.js"), {
  loading: () => (
    <p className="h-screen p-8 text-center text-neutral-200">Loading...</p>
  ),
  ssr: false,
});

const About = dynamic(() => import("./about.js"), {
  loading: () => <p className="my-4 text-neutral-200">Loading...</p>,
  ssr: false,
});

// Export this main component
export default function Page() {
  return <MainWrapper wrappedComponent={<About />} />;
}
