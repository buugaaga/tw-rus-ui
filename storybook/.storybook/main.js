const path = require('path');
module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      esbuild: {
        logOverride: {
          'this-is-undefined-in-esm': 'silent',
        },
      },
      define: {
        'process.env': {},
      },
      resolve: {
        alias: [
          {
            find: 'tw-rus-ui',
            replacement: path.resolve(__dirname, '../../'),
          },
        ],
      },
    };
  },
  docs: {
    autodocs: true,
  },
};
