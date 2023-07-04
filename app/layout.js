// These styles apply to every route in the application
import './globals.css'

// Link import
import Link from 'next/link'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Header</h1>
          <Link href="/">Home</Link>
          <Link href="/bmi"> BMI</Link>
        </header>
        
        {children}
        
        <footer>
          Footer
        </footer>
      </body>
    </html>
  );
}