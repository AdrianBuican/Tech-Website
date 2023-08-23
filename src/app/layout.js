import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechVibe Dev',
  description: 'This is a description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar/>
            {children}
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
