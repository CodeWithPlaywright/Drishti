await page.getByPlaceholder('Search...').click();
  await page.getByPlaceholder('Search...').fill('20241234');
  await page.getByPlaceholder('Search...').press('Enter');
  await page.locator('.focus\\:outline-none > .absolute').click();
