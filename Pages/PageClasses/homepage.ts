import { homepageObjects } from '../PageObjects/homepageObjects';
import { browser, element, by, ElementFinder, ElementArrayFinder } from 'protractor';
import { async } from 'q';
import {options} from '../../log4jconfig';
const logger = require('node-file-logger');
logger.SetUserOptions(options);

export class homepage{
    
   async navigate () {
       try{
            await browser.waitForAngularEnabled(false);
            await browser.get(homepageObjects.mydneturl).then(async() => {
                await browser.sleep(4000);
                await browser.getCurrentUrl().then(async function (title) {
                    if(title.includes('DNetSplashPage.aspx')) {
                        await homepageObjects.deloitteNetNow.click();
                        await logger.Info('DeloitteNet--Splash');
                    } else {
                        await logger.Info('DeloitteNet');
                    }
                });
            });
       }catch(Exception){
           logger.Fatal(Exception);
       }
    }

    async search(searchText:string){
        try{
            await homepageObjects.searchbar.sendKeys(searchText).then(async () => {
                await browser.sleep(3000);
                homepageObjects.searchresults.each(async(itemName) => {
                    await itemName.element(by.css('li[class=if-result ng-scope selected active]')).getText().then(async function(text){
                        await logger.Info(text);
                        if(text.includes(searchText)){
                            await itemName.click();
                        }
                    });
                });
            });
        } catch(Exception){
            logger.Fatal(Exception);
        }
    }

    async loginPage() {
        try{
            if(homepageObjects.userName.isDisplayed()){
                await homepageObjects.userName.sendKeys("lbanga@deloitte.com");
                await homepageObjects.password.sendKeys("Corp5%User");
                await homepageObjects.isDeloitteLaptop.click();
                await homepageObjects.isDeloitteSubmit.click();
            }
        } catch(Exception){
            logger.Fatal(Exception);
        }
    }

}