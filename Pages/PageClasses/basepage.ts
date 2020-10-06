import { Scenario, World } from 'cucumber';
import { browser } from 'protractor';
import { async } from 'q';
import * as reporter from 'cucumber-html-reporter';
import {options} from '../../log4jconfig';
const logger = require('node-file-logger');
logger.SetUserOptions(options);


let fs = require('fs');
let scenario:Scenario = null;
//const viewport = "1200x700";
const device = "Laptop";

export class basepage{
    
    async takeScreenshots(){
        browser.takeScreenshot().then(async(png)=>{
            let decodedImage = new Buffer (png, 'base64').toString('binary');
            let sc = this.getScenario().then(function(World){
                this.attach(decodedImage, 'image/png');
            });
        });
    }

    async getScenario(){
        return scenario;
    }

    async setScenario(Scenario){
        scenario = Scenario;
    }

    async getCurrentBrowserName(){
        let bname = null;
        await browser.getCapabilities().then(function (caps) {
            bname =  caps.get('browserName');
        });
      return bname;
    }

    async hackathonReporter(task, testName, domId, comparisonResult, viewport, browser) {

        fs.appendFileSync('Traditional-V1-TestResults.txt', `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`);
    
        return comparisonResult;
    
    }
}
