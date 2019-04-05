import { Scenario } from "cucumber";
import {LocalStorage} from "node-localstorage"
import { async } from "q";
import {options} from '../log4jconfig';
import { browser } from "protractor";
const logger = require('node-file-logger');
logger.SetUserOptions(options);
let mysql = require('mysql');
let localStorage = new LocalStorage('./Utils/scratch');
let db;

export class dbconnect {
    config = {
        host: "localhost",
        port: "3306",
        database: "protractor_framework",
        user: "root",
        password: "root",
        connectionLimit : 10,
        multipleStatements : true,
        acquireTimeout: 1000000
    }

async connectDatabase() {
    if (!db) {
        db = await mysql.createConnection(this.config);
        await db.connect(function(err){
            if(!err) {
                logger.Info('Database is connected!');
            } else {
                logger.Error('Error connecting database!');
            }
        });
    }
    return await db;
}

    
async executeQuery(scenario:string) {
    try {
        let scarr = await scenario.split('~');
        let sc:string = await scarr[0].trim();
        let tc:string = await scarr[1].trim();
        await logger.Info(sc + "---" + tc);
        let query:string = await "SELECT ID FROM protractor_framework.testdata WHERE Scenario = '" + sc +"' AND Test = '" + tc + "' AND ExecutionStatus = 'NotExecuted'" ;
        db = await this.connectDatabase().then(async() => {
            await db.query(query, async function (err, data) {
                if (err) throw err;
                await logger.Info("Data loaded for row number = " + JSON.stringify(data[0].ID));
                await localStorage.setItem('ID', JSON.stringify(data[0].ID));
                logger.Info(localStorage.getItem('ID'));
            });
        });
    } catch (Exception) {
        logger.Fatal(Exception);
    }
}

executeSelectQuery = async (id:number, column:String) => {
    try{
        return new Promise(async (resolve, reject) => {
            db = await this.connectDatabase();
            let query:string = await "SELECT " + column + " AS RES FROM protractor_framework.testdata WHERE ID = " + id;
            await db.query(query, async (err, data) => {
                if(err) {
                    reject(err);
                }
                let result:string = await (JSON.parse(JSON.stringify(data[0].RES))); 
                    await resolve(result);
            });
        });
    } catch(Exception) {
        await logger.Fatal(Exception);
    }     
}

async executeUpdate(id:number, column:String, value:String) {
    try {
        let query:string = "UPDATE protractor_framework.testdata set " + column + " = '" + value + "' WHERE ID = " + id;
        db = await this.connectDatabase();
        await db.query(query);
        await logger.Info("Data: " + value + " updated in column: " + column + " for row number: " + id);
    } catch (Exception) {
        await logger.Fatal(Exception);
    }
}

async closeConncetion(){
    try{
        await db.end();
        await logger.Info("DB connection closed")
    }catch (Exception) {
        logger.Fatal(Exception);
    }
}
}