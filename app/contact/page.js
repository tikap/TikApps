import Contact from "./contact.js";
import MainWrapper from "../components/mainwrapper.js";

export default function Page() {
  return <MainWrapper wrappedComponent={<Contact />} />;
}
