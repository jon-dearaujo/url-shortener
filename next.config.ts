import type { NextConfig } from 'next';
import { initializeDatabase } from './src/lib/init-db';

initializeDatabase();

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
};

export default nextConfig;
