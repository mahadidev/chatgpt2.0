// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://customchatgtp.vercel.app/:path*",
      },
    ];
  },
};
