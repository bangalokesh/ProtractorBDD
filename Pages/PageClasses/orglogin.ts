import { orgloginObjects } from "../PageObjects/orgloginObjects";
import {options} from '../../log4jconfig';
const logger = require('node-file-logger');
logger.SetUserOptions(options);

export class orglogin {

    async login() {
        try{
            if(orgloginObjects.userName.isDisplayed()){
                await orgloginObjects.userName.sendKeys("lbanga@deloitte.com");
                await orgloginObjects.password.sendKeys("Corp5%User");
                await orgloginObjects.isDeloitteLaptop.click();
                await orgloginObjects.isDeloitteSubmit.click();
            }
        }catch(Exception){
            logger.Fatal(Exception);
        }
    }

}