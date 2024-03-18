/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config, { isServer }) {

    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
      topLevelAwait: true,
    };
    config.resolve.fallback = { fs: false };
    // Since Webpack 5 doesn't enable WebAssembly by default, we should do it manually
    const wasmExtensionRegExp = /\.wasm$/;
    config.resolve.extensions.push('.wasm');
    config.module.rules.forEach(rule => {
      (rule.oneOf || []).forEach(oneOf => {
        if (oneOf.loader && oneOf.loader.indexOf('file-loader') >= 0) {
          oneOf.exclude.push(wasmExtensionRegExp);
        }
      });
    });

    // Add a dedicated loader for WASM
    config.module.rules.push({
      test: wasmExtensionRegExp,
      include: path.resolve(__dirname, 'src'),
      use: [{ loader: require.resolve('wasm-loader'), options: {} }]
    });
    return config;
  },
};

module.exports = nextConfig;
