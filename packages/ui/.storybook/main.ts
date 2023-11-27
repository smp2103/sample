import type { StorybookConfig } from '@storybook/react-webpack5';
import { ProvidePlugin } from 'webpack';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: ['react-native-reanimated', 'react-native-vector-icons','moti'],
        babelPlugins: ['react-native-reanimated/plugin'],
      },
    },
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async webpackFinal(config, options) {
    try {
      if (!config.plugins) {
        config.plugins = [];
      } else {
        config.plugins.push(
          new ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
          }),
        );
      }
      if (!config.resolve) {
        config.resolve = {
          alias: {},
        };
      } else {
        config.resolve.fallback = {
          stream: require.resolve('stream-browserify'),
          path: require.resolve('path-browserify'),
          constants: require.resolve('constants-browserify'),
          fs: false,
        };
        config!.module!.rules!.push({
          test: /\.(native|android|ios)\.(js|jsx|ts|tsx)$/,
          loader: 'ignore-loader',
        });
        config!.module!.rules!.push({
          test: /\.(js|jsx|ts|tsx)$/,
          loader: 'babel-loader',
          options: {
            presets: ['module:metro-react-native-babel-preset'],
          },
        });
      }
    } catch (e) {
      console.log(e);
    }
    return config;
  },
};
export default config;
