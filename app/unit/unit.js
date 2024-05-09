"use client";

import dynamic from "next/dynamic.js";

// Import sub components dynamically
const UnderConstruction = dynamic(
  () => import("../components/content/UnderConstruction.js"),
  {
    loading: () => <p className="my-4">Loading...</p>,
    ssr: false,
  }
);

// Main component
export default function Unit() {
  // Metric Imperial Unit Converter JSX
  return <UnderConstruction />;
}
