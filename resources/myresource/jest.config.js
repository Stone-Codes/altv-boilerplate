module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "./tsconfig.json",
      babelConfig: true,
    },
  },
  preset: "ts-jest",
  moduleNameMapper: {
    "^alt-server": "<rootDir>/alt-mock.ts",
  },
};
