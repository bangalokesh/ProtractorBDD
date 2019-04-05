import { async } from "q";
import {options} from '../log4jconfig';
import { dbconnect } from "./dbconnect";
import { LocalStorage } from 'node-localstorage';
const logger = require('node-file-logger');
logger.SetUserOptions(options);
let request = require('request');
let db = new dbconnect();
let localStorage = new LocalStorage('./Utils/scratch');


export class api{

    getRequest = async function (url:string) {
        return new Promise((resolve, reject) => {
            request.get(url, async function (error, response, json) {
                if (!error) {
                    await logger.Info('test' + JSON.stringify(response));
                    let statuscode = JSON.parse(response.body).cod;
                    logger.Info(response.statusCode);
                    db.executeUpdate(localStorage.getItem('ID'),'ResponseCode', statuscode)
                    //await logger.Info('Status Code: ' + JSON.parse(response.body) + ":" + JSON.parse(response.body).cod);
                    return resolve(json);
                } else {
                    logger.Error('error');
                    return reject(error);
                }
            });
        });
    }


    postRequest = async function (url:String, obj:object) { 
        let json:JSON = JSON.parse(JSON.stringify(obj));
        request.post(url, json, (error, res, body) => {
            if (error) {
                logger.Error(error)
                return(error);
            }
            logger.Info(`statusCode for post request: ${res.statusCode}`);
            let statuscode = res.statusCode;
            db.executeUpdate(localStorage.getItem('ID'),'ResponseCode', statuscode)
        });
    }
    
}