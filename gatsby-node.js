const million = require('million/compiler');
const MillionCompiler = require("@million/lint");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [million.webpack({ mode: 'react', server: true, auto: true }), MillionCompiler.webpack()],
  })
};