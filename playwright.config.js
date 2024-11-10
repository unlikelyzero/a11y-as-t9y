import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'tests/playwright',
  testMatch: /.*\.e2e\.js/,
  retries: 0,
  reporter: 'html',
  trace: 'on',
  use: {
    baseURL: 'http://localhost:8080',
  },
  projects: [
    {
      name: 'chromium',
    },
  ]
});