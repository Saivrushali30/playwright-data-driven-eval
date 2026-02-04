import { Page, Locator , expect } from '@playwright/test';

export class BoardPage {

    constructor (private readonly page: Page) {}

    async openApp(appName: string): Promise<void> {

        const appButton =this.page.getByRole("button", {name: new RegExp(`^${appName}` , "i")});

        await expect(appButton, `App "${appName}" should be visible`).toBeVisible();
        await appButton.click();
    }

    private getColumnContainer(columnName: string): Locator {

        const heading = this.page.getByRole("heading",{name: new RegExp(columnName, "i"), }).first();

        return heading.locator("xpath=ancestor::*[self::div or self::section][1]");


}

    async verifyTaskInColumnWithTags(column: string, tasktitle: string, tags: string[]): Promise<void> {

        const col = this.getColumnContainer(column);

        const titleEl = col.getByText(tasktitle, {exact: true}).first();
        await expect(titleEl).toBeVisible();

        const cardRoot = titleEl.locator("xpath=ancestor::*[self::div or self::li][1]");

        for (const tag of tags){
            await expect(cardRoot.getByText(tag, { exact:true}).first()).toBeVisible();
        }




    }







}