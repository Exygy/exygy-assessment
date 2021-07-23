/*eslint no-undef: "error"*/
/*eslint-env node*/

process.env.TZ = "UTC"

module.exports = {
  testRegex: ["/*.test.tsx$", "/*.test.ts$"],
  collectCoverageFrom: [
    "**/*.tsx",
    "!**/*.stories.tsx",
    "<rootDir>/ui-components/src/helpers/*.ts",
    "!<rootDir>/ui-components/src/helpers/blankApplication.ts",
  ],
  coverageReporters: ["lcov", "text"],
  coverageDirectory: "test-coverage",
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
  rootDir: "..",
  roots: ["<rootDir>/ui-components"],
  transform: {
    "^.+\\.[t|j]sx?$": "ts-jest",
  },
  setupFiles: ["dotenv/config"],
  setupFilesAfterEnv: ["<rootDir>/ui-components/.jest/setup-tests.js"],
  moduleNameMapper: {
    "\\.(scss|css|less)$": "identity-obj-proxy",
  },
  testPathIgnorePatterns: ["storyshots.d.ts"],
}
