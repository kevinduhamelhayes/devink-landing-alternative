import { Red_Hat_Display as redHatDisplay } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

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
        <Link href="https://wa.me/5493415883040?text=Me%20gustaría%20saber%20mas%20sobre%20sus%20servicios" className="fixed bottom-[40px] right-[40px] z-50 flex h-[130px] w-[130px] animate-jump flex-col items-center justify-center rounded-full  bg-green-400 text-8xl text-white shadow-lg shadow-green-400" target="_blank">
          {' '}
          <FaWhatsapp />
        </Link>
        <Footer />
      </body>
    </html>
  )
}
