import { browser, element, ElementFinder, by, ElementArrayFinder } from "protractor";
import { todObjects } from "../PageObjects/todObjects";
import { async } from "q";
import { orglogin } from './orglogin';
import { dbconnect } from "../../Utils/dbconnect";
import {LocalStorage} from "node-localstorage"
import {options} from '../../log4jconfig';
const logger = require('node-file-logger');
logger.SetUserOptions(options);
let orglog = new orglogin();
let localStorage = new LocalStorage('./Utils/scratch');
let dbcon = new dbconnect();
export class todpage {
    async navigate() {
        try{
            await browser.waitForAngularEnabled(false);
            await browser.get(todObjects.url).then(async function() {
                await browser.getTitle().then(async function(title){
                    await logger.Info("Title of Page = " + title);
                    if(title === 'Sign in to your account'){
                        await todObjects.loginEmail.sendKeys('lbanga@deloitte.com');
                        await todObjects.loginEmailNext.click();
                    } else if(title === 'Enter Your PIN') {
                        await logger.Info("talent on demand navigation started, move to enter your pin.");
                    } else if(title === 'TalentOnDemand') {
                        await logger.Info("talent on demand navigation completed.");
                    } else if(title === 'Deloittenet-Splash'){
                        await todObjects.enterDeloitteNet.click();
                        await orglog.login();
                    }
                });
            });
        } catch(Exception){
            logger.Fatal(Exception);
        }
    }    

    async enterPin(){
        try{
            browser.getTitle().then(async function(title){
                await logger.Info('Title of page = ' + title);
                if(title === 'Enter Your PIN'){
                    dbcon.executeSelectQuery(localStorage.getItem('ID'), 'Data1').then(async(pinCode:string)=>{
                        await logger.Info(pinCode);                
                        await todObjects.pinEdit.sendKeys(pinCode);
                        await todObjects.pinButton.click().then(async () =>{
                            await browser.waitForAngularEnabled(true);
                        });
                    }); 
                }
            });
        } catch(Exception){
            logger.Fatal(Exception);
        }
    }

    async getPTORemaining(){
        try{
            await browser.getTitle().then(async function(title){
                await logger.Info(title);
                if(title === 'TalentOnDemand'){
                    todObjects.ptoText.getText().then(async function(text){
                        await logger.Info(text);
                    });
                }
            });
        }catch(Exception){
            logger.Fatal(Exception);
        }
    }

    async getWellBeingSubsidy(){
        try{
            todObjects.wellBeing.each(function(item){
                item.element(by.xpath('//div[@class="ng-transclude"]')).getText().then(async function(text){
                    await logger.Info(text);
                });
            });
        }catch(Exception){
            logger.Fatal(Exception);
        } 
    }

}