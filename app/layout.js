// Styles
import "./globals.css";
import "tw-elements/dist/css/tw-elements.min.css";

// Metadata
export const metadata = {
  title: "TikApps",
  description: "TikApps website for health utilities.",
};

// Import sub components
import Header from "./components/header";
import Footer from "./components/footer";

// Export this main component
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
