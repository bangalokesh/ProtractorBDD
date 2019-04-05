import { browser } from "protractor";
import { angularhomeObjects } from '../PageObjects/angularhomeObjects';
import { async } from "q";
import { dbconnect } from "../../Utils/dbconnect";
import { LocalStorage } from 'node-localstorage';
import { basepage } from "./basepage";
import { api } from '../../Utils/api';
import {options} from '../../log4jconfig';
const logger = require('node-file-logger');
logger.SetUserOptions(options);
let localStorage = new LocalStorage('./Utils/scratch');
let db = new dbconnect();

export class angularhome {
    
    async navigate(){
        try{
            await browser.get(angularhomeObjects.angularurl).then(async() =>{
                await browser.getTitle().then(async function (title){
                    await logger.Info("Title = "+ title);
                    db.executeUpdate(localStorage.getItem('ID'), 'Title', title);
                });
            });
        } catch (Exception){
            await logger.Fatal(Exception)
        }
    }

    async getStarted(){
        try {
            await angularhomeObjects.gettingstartedLink.click().then(async() =>{
                await browser.sleep(2000);
                await logger.Info('clicked on getting started');
            });
        } catch (Exception){
            await logger.Fatal(Exception)
        }
    }

    async search() {
        try{
            await db.executeSelectQuery(localStorage.getItem('ID'), 'Data1').then(async function(res:string) {
                await logger.Info('Query Result = ' + res);
                await angularhomeObjects.searchBox.sendKeys(res).then(async()=>{
                    browser.sleep(1000);
                });
            });
        } catch (Exception){
            await logger.Fatal(Exception)
        }
    }
    
}