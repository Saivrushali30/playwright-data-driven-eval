import {test, expect} from '../fixtures/baseTest';

import tasks from '../../data/tasks.json';

test.describe("Data-Driven task validation" ,() => {

    test.beforeEach(async ({ page }) => {

        await page.goto("/"); })

    for (const task of tasks){

        test(`${task.id} - ${task.taskTitle}`, async ( { boardPage }) =>{

            await boardPage.openApp(task.app)
            await boardPage.verifyTaskInColumnWithTags(
                task.column,
                task.taskTitle,
                task.tags
            );



        });
    }




});