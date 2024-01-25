import { PlaywrightTestConfig, devices } from 'playwright/test'

const playwrightConfig: PlaywrightTestConfig = {
  reporter: [
    ['html', { printSteps: true, open: 'never' }],
  ],
  projects: [
    {
      name: 'test-cases',
      testMatch: '*.spec.ts',
      fullyParallel: true,
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['test-cases'],
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      dependencies: ['test-cases'],
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      dependencies: ['test-cases'],
    }
  ],
}

export default playwrightConfig
