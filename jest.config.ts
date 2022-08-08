import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  preset: "ts-jest",
  verbose: true,
  moduleNameMapper: {
    "@components/(.*)": "<rootDir>/src/components/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.ts"],
};
export default config;
