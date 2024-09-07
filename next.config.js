/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'], // Add any external domains you're loading images from
  },
}

module.exports = nextConfig