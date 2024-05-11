import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie Explorer',
  description: 'Your one stop shop for seeing upcoming, now playing, top rated, and all movie related stuff.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {children}
      </body>
    </html>
  )
}
