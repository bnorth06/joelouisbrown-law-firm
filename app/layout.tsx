import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Joe Louis Brown - Criminal Defense Attorney',
  description: 'Expert legal representation for criminal, family, and juvenile cases',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}
