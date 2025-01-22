import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://devdrishti.wiztap.in/login');
    await page.getByPlaceholder('Enter your e-mail address').fill('ifocushr@mailinator.com');
    await page.getByPlaceholder('Enter your Password').fill('If@12345');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'My Data Check your data here' }).click();
    await page.locator('article').filter({ hasText: 'HR IFOCUS9876543210ifocushr@' }).getByRole('link').click();
});