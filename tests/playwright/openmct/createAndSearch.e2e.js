import { test, expect } from '@playwright/test';
import { CreatePage } from '../pom/createPage';
import { HeaderPage } from '../pom/headerPage';

test.beforeEach(async ({ page }) => {
  await page.goto('./#/browse/mine?tc.mode=fixed&tc.startBound=1728396531751&tc.endBound=1728398361751&tc.timeSystem=utc&view=grid');
});

test('Test Create Button and Search @xpath', async ({ page }) => {
//These are subject to ordering on page.
  //Click Create Button
  await page.locator('//html/body/div[1]/div/div[2]/div[1]/button/span').click();
  //Click Create SWG
  await page.locator('//html/body/div[2]/ul/li[19]').click();
  //Fill Title
  await page.locator('//html/body/div[2]/div/div[2]/div/div/div/div/form/div[1]/div[1]/div[2]/span/span/input').fill('Demo SWG');
  //Click Save
  await page.locator('//html/body/div[2]/div[2]/div/div/div/div/div[2]/button[1]').click();
  //Click Search Input
  await page.locator('//*[@id="openmct-app"]/div/div[2]/div[2]/div[2]/input').click();
  //Search for SWG
  await page.locator('//*[@id="openmct-app"]/div/div[2]/div[2]/div[2]/input').fill('SWG');
});

test('Test Create Button and Search @css', async ({ page }) => {
    //These are subject to ordering on the page, but only change on class refactors.
    //Click Create Button
    await page.locator('button.c-create-button.c-button--menu.c-button--major.icon-plus').click();
    //Click Create SWG. Will fail here due to specificity.
    await page.locator('li.icon-generator-telemetry').click();
    //Fill Title
    await page.locator('span.form-control.shell input#form-name').fill('Demo SWG');
    //Click Save
    await page.locator('button.c-button.c-button--major.icon-save').click();
    //Click Search Input
    await page.locator('input.c-search-input').click();
    //Fill Search Input
    await page.locator('input.c-search-input').fill('SWG');
});

test('Test Create Button and Search @id', async ({ page }) => {
    //Click Create Button
    await page.locator('#create-button-label').click();
    //Click Create SWG. This will fail because no IDs exist.
    await page.locator('#create-swg-label').click();
    //Fill Title
    await page.locator('#form-name').fill('Demo SWG');
});

test('Test Create Button and Search @data-testid', async ({ page }) => {
    //Click Create Button
    await page.locator('data-test-id=create-button').click();
    //Click Create SWG. This will work.
    await page.locator('data-test-id=create-swg-label').click();
    //Fill Title
    await page.locator('data-test-id=form-name').fill('Demo SWG');
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

test('Test Create Button and Search @a11y', async ({ page }) => {
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('menuitem', { name: 'Sine Wave Generator' }).click();
  await page.getByLabel('Title', { exact: true }).click();
  await page.getByLabel('Title', { exact: true }).fill('Demo SWG');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('searchbox', { name: 'Search Input' }).click();
  await page.getByRole('searchbox', { name: 'Search Input' }).fill('SWG');
  await page.getByLabel('Object Results').getByText('Demo SWG').click();
});
