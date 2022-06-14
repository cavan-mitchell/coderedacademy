/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.pixabay.com"],
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
