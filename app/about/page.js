import About from "./about.js";
import MainWrapper from "../components/mainwrapper.js";

export default function Page() {
  return <MainWrapper wrappedComponent={<About />} />;
}
