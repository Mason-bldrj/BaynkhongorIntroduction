/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: [
   "*"
    ],
    remotePatterns: [
      {
        hostname: '*',
      },
    ],
  },
};

export default nextConfig;
