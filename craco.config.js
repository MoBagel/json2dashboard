const theme = require('./theme.ts');

const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { ...theme },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
