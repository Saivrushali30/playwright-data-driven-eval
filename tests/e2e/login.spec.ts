import {test, expect } from '@playwright/test';

test("Smoke: Login works", async ( {page }) => {

await page.goto("/");


await expect(page.getByRole("button", { name: /Web Application/i })).toBeVisible();
})

