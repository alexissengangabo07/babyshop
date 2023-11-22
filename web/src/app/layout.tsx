import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MenuContextProvider from '@/contexts/MenuContext';

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Bambino Boss Shop',
  description: 'Baby shopping in Goma town at cheap prices'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MenuContextProvider>
          {children}
        </MenuContextProvider>
      </body>
    </html>
  )
}
