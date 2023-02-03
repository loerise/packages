import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import ramda from "rollup-plugin-ramda"
import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts"
import { terser } from "rollup-plugin-terser"

export default [
  {
    input: "src/index.ts",
    external: ["react"],
    output: [
      {
        file: "lib/index.js",
        format: "umd",
        name: "lhook",
        sourcemap: true,
        globals: {
          react: "React",
        },
      },
      {
        file: "lib/index.esm.js",
        format: "es",
        name: "lhook",
        sourcemap: true,
        globals: {
          react: "React",
        },
      },
      {
        file: "lib/index.cjs.js",
        format: "cjs",
        name: "lhook",
        sourcemap: true,
        globals: {
          react: "React",
        },
      },
    ],
    plugins: [ramda(), resolve(), commonjs(), typescript({ exclude: ["**/__tests__", "**/*.test.ts"] }), terser()],
    onwarn: (warning, warn) => {
      if (warning.code === "THIS_IS_UNDEFINED") return
      warn(warning)
    },
  },
  {
    input: "lib/src/index.d.ts",
    output: [{ file: "lib/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
]
