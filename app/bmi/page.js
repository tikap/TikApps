import Bmi from "./bmi.js";
import MainWrapper from "../components/mainwrapper.js";

export default function Page() {
  return <MainWrapper wrappedComponent={<Bmi />} />;
}
