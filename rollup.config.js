import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

module.exports = {
  input: "src/Scripts/main.js",

  plugins: [commonjs(), nodeResolve()],

  output: {
    file: "RSpecRunner.novaextension/Scripts/main.dist.js",
    format: "cjs",
  },
};
