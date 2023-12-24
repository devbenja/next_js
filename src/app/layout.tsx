import type { Metadata } from 'next'
import { titleFont } from '@/config/fonts'
import './globals.css'


export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'Ecommerce by Benja with next.js',
}

export default function RootLayout({ children }: { 
  children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={ titleFont.className }>{ children }</body>
    </html>
  )
}
