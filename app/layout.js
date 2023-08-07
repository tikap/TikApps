"use client";

import dynamic from "next/dynamic";

// Styles
import "./globals.css";
import "tw-elements/dist/css/tw-elements.min.css";

// Metadata
export const metadata = {
  title: "TikApps",
  description: "TikApps website for health utilities.",
};

// Import sub components dynamically
const Header = dynamic(() => import("./components/header.js"), {
  loading: () => <p className="my-4 text-neutral-200">Loading...</p>,
  ssr: false,
});
const Footer = dynamic(() => import("./components/footer.js"), {
  loading: () => <p className="my-4 text-neutral-200">Loading...</p>,
  ssr: false,
});

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
