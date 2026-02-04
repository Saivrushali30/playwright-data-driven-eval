import type {Page, TestInfo } from '@playwright/test';


export async function attachFailureScreenshot(page: Page, testInfo: TestInfo){

    if(testInfo.status === testInfo.expectedStatus) return;

    const screenshot = await page.screenshot({ fullPage: true});

    await testInfo.attach('failure-screenshot', {

        body: screenshot,
        contentType: 'image/png',
    });
}
