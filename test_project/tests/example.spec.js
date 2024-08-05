// @ts-check
const { test, expect } = require('@playwright/test');

test('has text', async ({ page }) => {
  await page.goto('/home');
  const body = page.locator('body');
  await expect(body).toHaveText(/Home page/);
});
test('has text 25', async ({ page }) => {
  await page.goto('/users');
  const body = page.locator('body');
  await expect(body).toHaveText(/25/);
});
