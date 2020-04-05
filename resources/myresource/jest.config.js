module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "./tsconfig.json",
      babelConfig: true,
    },
  },
  preset: "ts-jest",
  moduleNameMapper: {
    "^alt-server": "<rootDir>/alt-mock/alt-server-mock.ts",
    "^alt-client": "<rootDir>/alt-mock/alt-client-mock.ts",
  },
  collectCoverage: true,
  collectCoverageFrom: ["server/**/*.ts", "client/**/*.ts"],
  testPathIgnorePatterns: ["client/src/views"],
};
