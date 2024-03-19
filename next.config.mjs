const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false; // Ensure 'fs' is not polyfilled
      }
      config.module.rules.push({
        test: /\.json$/,
        type: 'javascript/auto',
        use: ['json-loader'],
      });
      return config;
    },
  };
  
  export default nextConfig;
  
