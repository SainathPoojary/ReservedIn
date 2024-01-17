/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["miro.medium.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*", 
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

const nextCors = require('next-cors');

// Configure the next-cors library to allow cross-origin requests
const nextCorsOptions = {
  origin: '*', // Set the allowed origins ('*' allows all, or specify specific origins)
};

// Wrap your Next.js server with the next-cors middleware
module.exports = nextCors(nextCorsOptions);