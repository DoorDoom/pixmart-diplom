const purgecss = require("@fullhuman/postcss-purgecss").purgeCSSPlugin;

module.exports = {
  plugins: [
    require("autoprefixer"),
    purgecss({
      content: ["./*.html", "./js/*.js"],
      safelist: [
        "irs",
        "irs--flat",
        "irs-line",
        "irs-bar",
        "irs-handle",
        "irs-min",
        "irs-max",
        "irs-from",
        "irs-to",
        "irs-single",
      ],
    }),
  ],
};
