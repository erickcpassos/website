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
  },
  assetPrefix: isProd ? '/website/' : '',
  basePath: isProd ? '/website' : '',
  output: 'export'

};

export default nextConfig;
