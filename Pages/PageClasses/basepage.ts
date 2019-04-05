import { Scenario, World } from 'cucumber';
import { browser } from 'protractor';
import { async } from 'q';
import * as reporter from 'cucumber-html-reporter';
import {options} from '../../log4jconfig';
const logger = require('node-file-logger');
logger.SetUserOptions(options);


let fs = require('fs');
let scenario:Scenario = null;

export class basepage{
    
    async takeScreenshots(){
        browser.takeScreenshot().then(async(png)=>{
            let decodedImage = new Buffer(png, 'base64').toString('binary');
            let sc = this.getScenario().then(function(World){
                reporter.attach(decodedImage, 'image/png');
            });
        });
    }

    async getScenario(){
        return scenario;
    }

    async setScenario(Scenario){
        scenario = Scenario;
    }
}
