import type { NextConfig } from 'next';

const isDemoDeployment = process.env.PABA_DEMO_MODE === '1';

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async headers() {
    if (!isDemoDeployment) return [];

    return [
      {
        source: '/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ];
  },
};

export default nextConfig;
