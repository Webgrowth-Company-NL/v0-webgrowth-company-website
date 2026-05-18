import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // /inloggen leidt direct naar de Forester OS-app, geen tussenpagina nodig.
        source: "/inloggen",
        destination: "https://app.webgrowth.company/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
