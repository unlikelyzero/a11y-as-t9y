import { test, expect } from '@playwright/test';
import { CreatePage } from '../pom/createPage';
import { HeaderPage } from '../pom/headerPage';

test.beforeEach(async ({ page }) => {
  await page.goto('./#/browse/mine?tc.mode=fixed&tc.startBound=1728396531751&tc.endBound=1728398361751&tc.timeSystem=utc&view=grid');
});

test('Test Create Button and Search @xpath', async ({ page }) => {
    //Click Create Button
    await page.locator('//html/body/div[1]/div/div[2]/div[1]/button/span').click();
    //Click Create SWG
    await page.locator('//html/body/div[2]/ul/li[19]').click();
    //Fill Title
    await page.locator('//html/body/div[2]/div/div/div/form/div[1]/div[1]/div[1]/input').fill('Demo SWG');
    //Click Save
    await page.locator('//html/body/div[2]/div/div/div/form/div[2]/div/button[1]').click();
    //Click Search Input
    await page.locator('//html/body/div/div/div[2]/div[2]/div[2]/input').click();
    //Search for SWG
    await page.locator('//html/body/div/div/div[2]/div[2]/div[2]/input').fill('SWG');
});

test('Test Create Button and Search @css', async ({ page }) => {
  await page.locator('[aria-label="Create Button"]').click();
});

test('Test Create Button and Search @id', async ({ page }) => {
  await page.locator('[id="openmct-app"]/div/div[2]/div[1]/button').click();

  await page.locator('//*[@id="form-name"]').fill('Demo SWG');

});

test('Test Create Button and Search @pom', async ({ page }) => {
  const createPage = new CreatePage(page);
  const headerPage = new HeaderPage(page);

  await createPage.clickCreateButton();
  await createPage.selectSineWaveGenerator();
  await createPage.fillTitle('Demo SWG');
  await createPage.clickSaveButton();
  await headerPage.searchForObject('SWG');
  await headerPage.selectObjectResult('Demo SWG');
});

test('Test Create Button and Search @data-testid', async ({ page }) => {
  await page.getByTestId('create-button').click();
});

test('Test Create Button and Search @a11y', async ({ page }) => {
  await page.getByLabel('Create', { exact: true }).click();
  await page.getByLabel('Sine Wave Generator').click();
  await page.getByLabel('Title', { exact: true }).click();
  await page.getByLabel('Title', { exact: true }).fill('Demo SWG');
  await page.getByLabel('Save').click();
  await page.getByRole('searchbox', { name: 'Search Input' }).click();
  await page.getByRole('searchbox', { name: 'Search Input' }).fill('SWG');
  await page.getByLabel('Object Results').getByText('Demo SWG').click();
});