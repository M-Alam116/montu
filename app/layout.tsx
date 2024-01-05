import type { Metadata } from 'next'
import './globals.css'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'

export const metadata: Metadata = {
  title: 'Montu',
  description: 'This is montu website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body>
      <Header />
      {children}
      <Footer />
    </body>
  )
}
