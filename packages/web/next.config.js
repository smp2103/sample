const path = require('path');

const webpack = require('webpack');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const nextRoutes = require('nextjs-routes/config');

const withRoutes = nextRoutes();
const WebpackBar = require('webpackbar');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: { RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: 'false' },
  trailingSlash: false,
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  transpilePackages: [
    '@smp/features',
    'react-native',
    'react-native-paper',
    'react-native-modalfy',
    'react-native-reanimated',
    'react-native-gesture-handler',
    'react-native-vector-icons',
  ],
  swcMinify: true,
  webpack(config, context) {
    const { alias = {}, extensions } = config.resolve;
    // Support for React Native Web
    config.resolve.alias = {
      ...alias,
      'react-native$': 'react-native-web',
    };

    config.resolve.extensions = ['.web.js', '.web.ts', '.web.tsx', '.js', ...(extensions || [])];
    config.module.rules.push({
      test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
      loader: 'file-loader',
    });
    config.plugins.push(
      new WebpackBar({
        fancy: true,
        profile: true,
        basic: false,
      }),
    );

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        __DEV__: process.env.NODE_ENV === 'production' || true,
      }),
    );
    return {
      ...config,
    };
  },
};

const plugins = [withRoutes, withBundleAnalyzer];

module.exports = (_phase, { defaultConfig }) => {
  return plugins.reduce((config, plugin) => plugin(config), nextConfig);
};
