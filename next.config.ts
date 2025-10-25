import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com', 'imagedelivery.net'],
  },
}

export default nextConfig
