"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_localstorage_1 = require("node-localstorage");
const log4jconfig_1 = require("../log4jconfig");
const logger = require('node-file-logger');
logger.SetUserOptions(log4jconfig_1.options);
let mysql = require('mysql');
let localStorage = new node_localstorage_1.LocalStorage('./Utils/scratch');
let db;
class dbconnect {
    constructor() {
        this.config = {
            host: "localhost",
            port: "3306",
            database: "protractor_framework",
            user: "root",
            password: "root",
            connectionLimit: 10,
            multipleStatements: true,
            acquireTimeout: 1000000
        };
        this.executeSelectQuery = (id, column) => __awaiter(this, void 0, void 0, function* () {
            try {
                return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    db = yield this.connectDatabase();
                    let query = (yield "SELECT ") + column + " AS RES FROM protractor_framework.testdata WHERE ID = " + id;
                    yield db.query(query, (err, data) => __awaiter(this, void 0, void 0, function* () {
                        if (err) {
                            reject(err);
                        }
                        let result = yield (JSON.parse(JSON.stringify(data[0].RES)));
                        yield resolve(result);
                    }));
                }));
            }
            catch (Exception) {
                yield logger.Fatal(Exception);
            }
        });
    }
    connectDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!db) {
                db = yield mysql.createConnection(this.config);
                yield db.connect(function (err) {
                    if (!err) {
                        logger.Info('Database is connected!');
                    }
                    else {
                        logger.Error('Error connecting database!');
                    }
                });
            }
            return yield db;
        });
    }
    executeQuery(scenario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let scarr = yield scenario.split('~');
                let sc = yield scarr[0].trim();
                let tc = yield scarr[1].trim();
                yield logger.Info(sc + "---" + tc);
                let query = (yield "SELECT ID FROM protractor_framework.testdata WHERE Scenario = '") + sc + "' AND Test = '" + tc + "' AND ExecutionStatus = 'NotExecuted'";
                db = yield this.connectDatabase().then(() => __awaiter(this, void 0, void 0, function* () {
                    yield db.query(query, function (err, data) {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (err)
                                throw err;
                            yield logger.Info("Data loaded for row number = " + JSON.stringify(data[0].ID));
                            yield localStorage.setItem('ID', JSON.stringify(data[0].ID));
                            logger.Info(localStorage.getItem('ID'));
                        });
                    });
                }));
            }
            catch (Exception) {
                logger.Fatal(Exception);
            }
        });
    }
    executeUpdate(id, column, value) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let query = "UPDATE protractor_framework.testdata set " + column + " = '" + value + "' WHERE ID = " + id;
                db = yield this.connectDatabase();
                yield db.query(query);
                yield logger.Info("Data: " + value + " updated in column: " + column + " for row number: " + id);
            }
            catch (Exception) {
                yield logger.Fatal(Exception);
            }
        });
    }
    closeConncetion() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield db.end();
                yield logger.Info("DB connection closed");
            }
            catch (Exception) {
                logger.Fatal(Exception);
            }
        });
    }
}
exports.dbconnect = dbconnect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJjb25uZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVXRpbHMvZGJjb25uZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSx5REFBOEM7QUFFOUMsZ0RBQXVDO0FBRXZDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxjQUFjLENBQUMscUJBQU8sQ0FBQyxDQUFDO0FBQy9CLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFJLFlBQVksR0FBRyxJQUFJLGdDQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN2RCxJQUFJLEVBQUUsQ0FBQztBQUVQLE1BQWEsU0FBUztJQUF0QjtRQUNJLFdBQU0sR0FBRztZQUNMLElBQUksRUFBRSxXQUFXO1lBQ2pCLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLGVBQWUsRUFBRyxFQUFFO1lBQ3BCLGtCQUFrQixFQUFHLElBQUk7WUFDekIsY0FBYyxFQUFFLE9BQU87U0FDMUIsQ0FBQTtRQXFDTCx1QkFBa0IsR0FBRyxDQUFPLEVBQVMsRUFBRSxNQUFhLEVBQUUsRUFBRTtZQUNwRCxJQUFHO2dCQUNDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBTyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7b0JBQ3pDLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDbEMsSUFBSSxLQUFLLEdBQVUsQ0FBQSxNQUFNLFNBQVMsSUFBRyxNQUFNLEdBQUcsd0RBQXdELEdBQUcsRUFBRSxDQUFDO29CQUM1RyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO3dCQUN0QyxJQUFHLEdBQUcs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