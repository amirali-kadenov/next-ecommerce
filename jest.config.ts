/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  preset: "ts-jest",
  transformIgnorePatterns: ["node_modules/(?!(lucide-react))"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

const asyncConfig = createJestConfig(config);

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default async () => {
  const config = await asyncConfig();

  config.transformIgnorePatterns = ["^.+\\.module\\.(css|sass|scss)$"];

  return config;
};
