import type { Metadata } from 'next'
import { Providers } from './components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'VibeCode Exchange',
  description: 'Social algorithmic trading for Farcaster – discover, share, and deploy multi-agent strategies gaslessly on Base.',
  openGraph: {
    title: 'VibeCode Exchange',
    description: 'Social algorithmic trading for Farcaster',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
