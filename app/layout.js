// Styles
import "./globals.css";
import "tw-elements/dist/css/tw-elements.min.css";

// Setup Fonts
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

// Components
import Header from "./components/header.js";
import Footer from "./components/footer.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
