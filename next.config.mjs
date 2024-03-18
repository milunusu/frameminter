import path from 'path';

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'utils');
    return config;
  },
};

export default nextConfig;
