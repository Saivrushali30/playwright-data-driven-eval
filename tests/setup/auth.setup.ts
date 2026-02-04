import { test, expect } from "@playwright/test";

test("auth setup - login and save storage state", async ({ page }) => {
  await page.goto("/");

  await page.locator('input[type="text"]').fill(process.env.USER_EMAIL ?? "admin");
  await page.locator('input[type="password"]').fill(process.env.USER_PASSWORD ?? "password123");

  await page.locator('button[type="submit"]').click();

  await expect(page.getByRole("button", {name: /Web Application/i }).first()).toBeVisible();

  await page.context().storageState({ path: "playwright/.auth/user.json" });
});
