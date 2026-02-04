import { test as base, expect } from '@playwright/test';
import { BoardPage } from '../../pages/BoardPage';

type Fixtures = {
    boardPage: BoardPage;
};

export const test = base.extend<Fixtures>({

    boardPage: async ({ page }, use) => {

        await use(new BoardPage(page));
    },

});

export { expect };