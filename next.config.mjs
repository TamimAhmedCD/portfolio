/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.aceternity.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
};

export default nextConfig;
