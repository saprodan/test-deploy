/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // basePath: isProd ? '/card-shop' : '',
  output: 'export',
};

export default nextConfig;
