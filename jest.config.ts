import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], 
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", 
    "\\.svg$": "<rootDir>/__mocks__/svgMock.tsx", 
  },
};

export default config;
