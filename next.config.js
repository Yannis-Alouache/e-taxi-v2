/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "tailwindui.com"
      },
      {
        protocol: "https",
        hostname: "img.autotrader.co.za"
      },
      {
        protocol: "https",
        hostname: "alphubel.ch"
      },
      {
        protocol: "https",
        hostname: "car-images.bauersecure.com"
      },
    ]
  }
}

module.exports = nextConfig
