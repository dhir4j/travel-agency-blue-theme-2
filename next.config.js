/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
      {
        protocol: 'https',
        hostname: 'd3r8gwkgo0io6y.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'image.kesari.in',
      },
    ],
  },
}

module.exports = nextConfig
