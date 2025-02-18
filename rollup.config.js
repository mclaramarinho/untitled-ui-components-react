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
                file: packageJson.main,
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
                    { src: "src/assets/icons/countries/*", dest: "dist/assets/icons/countries" },
                    { src: "src/assets/icons/integration/*", dest: "dist/assets/icons/integration" },
                    { src: "src/assets/icons/payment_methods/*", dest: "dist/assets/icons/payment_methods" },
                    { src: "src/assets/icons/social/default/*", dest: "dist/assets/icons/social/default" },
                    { src: "src/assets/icons/social/gray-default/*", dest: "dist/assets/icons/social/gray-default" },
                    { src: "src/assets/icons/social/gray-hover/*", dest: "dist/assets/icons/social/gray-hover" },
                    { src: "src/assets/icons/social/white-default/*", dest: "dist/assets/icons/social/white-default" },
                    { src: "src/assets/icons/social/white-hover/*", dest: "dist/assets/icons/social/white-hover" },
                ],
              }),
            svgr(),
            postcss({
                plugins: [
                    require('postcss-preset-env')(), // Optional: Adds support for modern CSS features
                  ],
                modules: true,
                extract: true,
                minimize: true,
                use: [ "sass" ],
                sourceMap: true,
            }),
            // imageFiles(),
        ],
        external: ["react", "react-dom"]
    },
    {
        input: ["src/index.ts"],
        output: [{ file: packageJson.types, format: "es" }],
        plugins: [dts.default()],
    }
]