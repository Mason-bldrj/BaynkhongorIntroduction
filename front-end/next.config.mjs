/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "i.kickstarter.com",
      "www.chromethemer.com",
      "example.com",
    ],
  },
};

export default nextConfig;
