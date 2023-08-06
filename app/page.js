import Home from "./components/home.js";
import MainWrapper from "./components/mainwrapper.js";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import("./components/content/CollapsableContent.js"),
  {
    ssr: false,
  }
);

export default function Page() {
  return <MainWrapper wrappedComponent={<Home />} />;
}
