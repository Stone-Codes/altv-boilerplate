module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.json",
    },
  },
  moduleNameMapper: {
    "^alt-server": "<rootDir>/alt-mock.ts",
  },
};
