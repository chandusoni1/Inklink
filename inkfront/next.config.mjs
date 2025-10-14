/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://inklink-zdt4.onrender.com/api/:path*", // replace with actual backend URL
      },
      //   {
      //   source: "/api/auth/:path*",
      //   destination: "https://inklink-zdt4.onrender.com/api/:path*", // replace with actual backend URL
      // },
    ];
  },
};

export default nextConfig;