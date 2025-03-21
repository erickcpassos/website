import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
          protocol: 'https',
          hostname: 'placehold.co',
          port: '',
          pathname: '/**',
      },
    ],
  }
};

export default nextConfig;
