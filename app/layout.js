import { Red_Hat_Display as redHatDisplay } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'

const RedHatDisplay = redHatDisplay({ subsets: ['latin'] })

export const metadata = {
  title: 'Devink',
  description: 'Soluciones IT para tu empresa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${RedHatDisplay.className}flex bg-blue-950`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
