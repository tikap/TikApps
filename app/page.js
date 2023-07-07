import Home from "./components/home.js";
import MainWrapper from "./components/mainwrapper.js";

export default function Page() {
  return <MainWrapper wrappedComponent={<Home />} />;
}
