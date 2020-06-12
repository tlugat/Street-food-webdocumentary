module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/Assets/global.scss";`,
      },
    },
  },
};
