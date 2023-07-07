// Styles
import "./globals.css";

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
