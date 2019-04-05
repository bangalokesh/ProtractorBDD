import { browser } from 'protractor';
import {options} from '../../log4jconfig';
import { async } from 'q';
import { juliemrObjects } from '../PageObjects/juliemrObjects';
import { dbconnect } from '../../Utils/dbconnect';
import { LocalStorage } from 'node-localstorage';
const logger = require('node-file-logger');
logger.SetUserOptions(options); 
let db = new dbconnect();
let localStorage = new LocalStorage('./Utils/scratch');

export class juliemrs{
    

    async calcMethod(operator:string){
        try{
            await browser.waitForAngularEnabled(true);
                    await db.connectDatabase();
                    await browser.get(juliemrObjects.jmrurl).then(async()=> {
                        let x = await (db.executeSelectQuery(localStorage.getItem('ID'),'data1'));
                        let y = await (db.executeSelectQuery(localStorage.getItem('ID'),'data2')); 
                        logger.Info('db result = ' + x + ' + ' + y + '.'  );
                        await juliemrObjects.firstTextBox.sendKeys(''+x);
                        await juliemrObjects.secondTextBox.sendKeys(''+y);
                        await juliemrObjects.operation.sendKeys(operator);
                        await juliemrObjects.goButton.click();
                        await browser.sleep(2000);
                    });
        } catch (Exception) {
            logger.Error(Exception);
        }
    }
}