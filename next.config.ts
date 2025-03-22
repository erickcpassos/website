import type { NextConfig } from "next";
import path from "path";


const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
          protocol: 'https',
          hostname: 'placehold.co',
          port: '',
          pathname: '/**',
      },
    ],
  },
  assetPrefix: isProd ? '/your-repository-name/' : '',
  basePath: isProd ? '/your-repository-name' : '',
  output: 'export'

};

export default nextConfig;
