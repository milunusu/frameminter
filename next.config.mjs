import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'utils');
    return config;
  },
};

export default nextConfig;
