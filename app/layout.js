// Styles
import './globals.css'

// Components
import Header from './header/header.js'
import Footer from './footer/footer.js'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body class="container mx-auto">
        
        <Header />

        <main>
          {children}
        </main>
        
        <Footer />
      
      </body>
    </html>
  );
}