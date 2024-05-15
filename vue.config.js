const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true),
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true), // 开启hydration mismatch详细信息
      }),
    ],
  },
  devServer: {
    port: 8081,
    proxy: {
      '/api': {
        target: 'http://localhost:7070',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        secure: false,
      },
      // 如果需要更多的代理规则，可以在这里添加
    },
  },
});
