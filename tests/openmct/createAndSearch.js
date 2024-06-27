import { browser } from 'k6/browser';
import { Trend, Rate, Counter, Gauge } from 'k6/metrics';
import { check, sleep } from 'k6';

export const CounterErrors = new Counter('Errors');


export const options = {
  scenarios: {
    ui: {
      executor: 'shared-iterations',
      maxDuration: '30s', // Maximum duration
      gracefulStop: '3s',
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
  thresholds: {
    'Errors': ['count<1']
  },
};

export default async function () {
  const context = await browser.newContext();
  const page = await context.newPage();
    try {
    //Navigate to Open MCT
    await page.goto("http://localhost:8080/", { waitUntil: "networkidle" });
    sleep(1);

    //Click XPath Locator for Create
    await page.locator('//*[@id="openmct-app"]/div/div[2]/div[1]/button').click();

    // //Click Create Button
    // await page.locator('[aria-label="Create Button"]').click();
    sleep(1);
    
    //Click Folder Menu Item
    await page.locator('[role="menuitem"][aria-label="Folder"]').click();
    sleep(1);

    //Fill the name of the folder
    await page.locator('#form-name').fill('Meetup Demo');
    sleep(1);

    //Click Save Button
    await page.locator('[aria-label="Save"]').click();
    sleep(1);

    //Fill the search input with the name of the folder
    await page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').fill('Meetup Demo');
    sleep(1);

    // Press Enter in search
    await page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').press('Enter');
    sleep(1);

    //Assertion that newly created object appears in the result
    check(page, {
      'Newly created object appears in search result': await page.locator('[aria-label="Meetup Demo result"]').isVisible(),
    });

    // Additional logging for debugging
    console.log("Page navigation and button click successful");

  } catch (error) {
    console.error("Error during test execution:", error);
    CounterErrors.add(1);
  }
  finally {
    await page.close();
  }
}
