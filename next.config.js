/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.pixabay.com"],
    loader: "akamai",
    path: "",
  },
  basePath: "/nextjs-pages",
  assetPrefix: "/nextjs-pages",
};

module.exports = nextConfig;
