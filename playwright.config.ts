import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

const port = Number(process.env.E2E_PORT ?? "3000");
const baseURL = process.env.E2E_BASE_URL ?? `http://localhost:${port}`;
const skipWebServer = process.env.E2E_SKIP_SERVER === "true";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 60 * 1000,
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL,
    trace: "retain-on-failure",
    video: "retain-on-failure",
    screenshot: "only-on-failure",
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  globalSetup: "./tests/e2e/global-setup.ts",
  webServer: skipWebServer
    ? undefined
    : {
        command: `PORT=${port} npm run dev`,
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        timeout: 120 * 1000,
      },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
