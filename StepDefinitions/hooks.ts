import { Before, After, Scenario } from 'cucumber';
import { browser } from "protractor";
import { dbconnect } from '../Utils/dbconnect';
import { async } from 'q';
import { LocalStorage } from 'node-localstorage';
import { basepage } from '../Pages/PageClasses/basepage';
import {options} from '../log4jconfig';
const logger = require('node-file-logger');
logger.SetUserOptions(options);
let db = new dbconnect();
let bp = new basepage();
let localStorage = new LocalStorage('./Utils/scratch');

    Before(async (Scenario) => {
        try{
            let name = Scenario.pickle.name;
            await bp.setScenario(Scenario);
            await logger.Info(name + ": test started") 
            //await browser.driver.manage().window().setSize(1200, 700);
            await browser.driver.manage().window().maximize();
            //await db.executeQuery(name);
        } catch(Exception) {
            logger.Error(Exception);
        }
    });

    After(async function (Scenario) {
        try{
            let name = await Scenario.pickle.name;
            await logger.Info(name + ": test completed") 
            await browser.takeScreenshot().then(async(screenshot) => {
                await this.attach(screenshot, 'image/png');
                await logger.Info(Scenario.result.status.toLowerCase());
                /*await db.executeUpdate(localStorage.getItem('ID'),'Status', Scenario.result.status.toLowerCase());
                await db.executeUpdate(localStorage.getItem('ID'),'ExecutionStatus', 'Executed');*/
            });
        } catch(Exception) {
            logger.Error(Exception);
        }
    });


    
