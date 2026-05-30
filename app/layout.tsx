import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shome - Portfolio',
  description: 'Design · Creative · Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
