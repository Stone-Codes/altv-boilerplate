import path from "path";
import typescript from "@rollup/plugin-typescript";

const tsconfigPath = path.resolve(__dirname, "tsconfig.json");

export default [
  {
    input: path.resolve(__dirname, "server", "src", "index.ts"),
    output: {
      file: path.resolve(__dirname, "server", "main.mjs"),
      format: "es",
    },
    external: ["alt-server", "alt-client"],
    plugins: [
      typescript({
        tsconfig: tsconfigPath,
        include: ["server/**/*"],
      }),
    ],
  },
  {
    input: path.resolve(__dirname, "client", "src", "index.ts"),
    output: {
      file: path.resolve(__dirname, "client", "main.js"),
      format: "es",
    },
    external: ["alt-server", "alt-client"],
    plugins: [
      typescript({
        tsconfig: tsconfigPath,
        include: ["client/**/*"],
        exclude: ["client/src/views/**/*"],
      }),
    ],
  },
];
