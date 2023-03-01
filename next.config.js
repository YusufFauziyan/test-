/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/zeppeline/:path*",
        destination: "https://edge01.sapujagad.id/api/:path*",
      },
    ];
  },
  reactStrictMode: true,
  env: {
    GRAPHQL_URL: "https://dev-khayanganjxhpv.microgen.id/graphql",
    WS_URL: "wss://dev-khayanganjxhpv.microgen.id/graphql",
    API_ZEPLYN: "/api/zeppeline",
  },
  images: {
    domains: ["file.mejik.id"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
