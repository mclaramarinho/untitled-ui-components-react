import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import svgr from "@svgr/rollup";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

const packageJson = require('./package.json');

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
                declaration: true,
                declarationDir: "dist/esm/"
            }),
            terser(),
            copy({
                targets: [
                  { src: "src/assets/**/*", dest: "dist/assets" }, // Copy assets
                ],
              }),
            svgr(),
            postcss({
                modules: true,
                extract: true,
                use: [ "sass" ],
                sourceMap: true,
            }),
        ],
        external: ["react", "react-dom"]
    },
    {
        input: ["src/index.ts"],
        output: [{ file: packageJson.types, format: "es" }],
        plugins: [dts.default()],
    }
]