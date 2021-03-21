module.exports = {
  publicPath: "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/style/_variable.scss";`,
      },
    },
  },
};
