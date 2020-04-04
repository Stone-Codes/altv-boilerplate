module.exports = {
  // preset: "ts-jest",
  // testEnvironment: "node",
  // transform: {
  //   "\\.(ts|tsx)$": "ts-jest",
  // },
  transform: {
    ".(ts|tsx)": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.json",
    },
  },
  moduleNameMapper: {
    "^alt-server": "<rootDir>/alt-mock.ts",
  },
};
