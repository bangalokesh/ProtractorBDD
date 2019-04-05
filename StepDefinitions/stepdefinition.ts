import { Given, When, Then, World, Scenario } from 'cucumber';
import { browser, element, by } from "protractor";
import chai from "chai";
import { async } from "q";
import * as reporter from 'cucumber-html-reporter';
import { homepage} from "../Pages/PageClasses/homepage";
import { todpage } from '../Pages/PageClasses/todpage';
import {LocalStorage} from "node-localstorage"
import { dbconnect } from '../Utils/dbconnect';
import { homepageObjects } from '../Pages/PageObjects/homepageObjects';
import { orglogin } from "../Pages/PageClasses/orglogin";
import { angularhome } from '../Pages/PageClasses/angularhome';
import { basepage } from '../Pages/PageClasses/basepage';
import { api } from '../Utils/api';
import { apiservicetest } from '../Pages/PageClasses/apiservicetest';
import {options} from '../log4jconfig';
import { juliemrs } from '../Pages/PageClasses/juliemrs';
const logger = require('node-file-logger');
logger.SetUserOptions(options);
let home = new homepage();
let tod = new todpage();
let dbcon = new dbconnect();
let bp = new basepage();
let org = new orglogin();
let localStorage = new LocalStorage('./Utils/scratch');
let ang = new angularhome();
let db = new dbconnect();
let apiser = new apiservicetest();
let julimrcal = new juliemrs();


    Given('I go to the site', async () => {
        await home.navigate().then(async () => {
            if(homepageObjects.userName.isDisplayed()){
                org.login();
            }
            await logger.Info("given statement complete:");
        });
    });

    When('I search for {string}', async (string) => {
        await home.search(string).then(async () => {
            await logger.Info("when statement complete");
        });
    });

    Then('I am navigated to', async () => {
        await logger.Info("then statement complete");
    });

    Given ('i go to talentonDemand', async () => {
        await tod.navigate();
    });

    When('i enter pin number', async() => {
        await tod.enterPin();
    });

    Then ('get remaining PTO', async()=> {
        await tod.getPTORemaining();
    });

    Then ('get remaining WellBeing Subsidy', async() => {
        await tod.getWellBeingSubsidy();
    });


    Given('i go to Anuglar home', async () => {
        await ang.navigate();
    });

    When ('i click on getting started', async() =>{
        let ang = await new angularhome();
        await ang.getStarted();
    });

    When ('i search for text', async() =>{
        await ang.search();
    });

    Given ('db load', async() =>{
        bp.getScenario().then(function(scenario:Scenario){
            let name:string = scenario.name;
            db.executeQuery(name);
        })
        
    });

    Given ('i call the service', async() =>{
        apiser.getServiceRequest();
    });

    Given ('i post request', async() => {
        apiser.postServiceRequest();
    });

    Given ('i would like to test calc', async() => {
        return julimrcal.calcMethod('+');
    });
    