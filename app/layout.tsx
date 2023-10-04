import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'GUCCI® US Official Site | Redefining Luxury Fashion',
  description: 'The official Gucci website. Shop the latest ready-to-wear, handbags, shoes, and accessories from the luxury House helmed by Creative Director Sabato De Sarno.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
