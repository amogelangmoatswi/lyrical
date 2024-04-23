/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "scontent.fgbe4-1.fna.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;
