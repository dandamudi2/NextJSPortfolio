/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/linkedin",
        destination:
          "https://www.linkedin.com/in/srinivasu-dandamudi-30915266/",
        permanent: true,
      },
    ];
  },
};
