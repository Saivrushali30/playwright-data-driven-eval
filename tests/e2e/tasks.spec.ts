import {test, expect} from '../fixtures/baseTest';
import { Logger } from '../../utils/logger';
import tasks from '../../data/tasks.json';
import { attachFailureScreenshot } from '../../utils/artifacts';

test.describe("Data-Driven task validation" ,() => {

    test.beforeEach(async ({ page }) => {

        await page.goto("/"); });



    for (const task of tasks){

        test(`${task.id} - ${task.taskTitle}`, async ( { boardPage }) =>{
            
            
                Logger.info(`Opening app : ${task.app}`);
                await boardPage.openApp(task.app)

                Logger.info(`Verifying task : ${task.taskTitle}`);
                await boardPage.verifyTaskInColumnWithTags(
                    task.column,
                    task.taskTitle,
                    task.tags
                );



        });
    }




});