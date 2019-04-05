import { basepage } from "./basepage";
import { api } from '../../Utils/api';
import { browser } from "protractor";
import { apiservicetestObjects } from '../PageObjects/apiservicetestObjects';
import {options} from '../../log4jconfig';
const logger = require('node-file-logger');
logger.SetUserOptions(options);
let apitest = new api();

export class apiservicetest{

    async getServiceRequest(){
        try{
            browser.wait(apitest.getRequest(apiservicetestObjects.weatherservice), 3000).then(async json=> {
                let myobj = await JSON.parse(JSON.stringify(json));
                await logger.Info('response from service request: ' + json);
            });
        } catch (Exception) {
            logger.Fatal(Exception);
        }
        
    }
    
    async postServiceRequest(){
        try{
            let myobj = apiservicetestObjects.postservicejson; //{"id": "file", "value": "File"};
            await browser.wait(apitest.postRequest(apiservicetestObjects.postserviceurl, myobj),3000);
            await logger.Info('post request completed');
        } catch (Exception) {
            logger.Fatal(Exception);
        }
    }
}

