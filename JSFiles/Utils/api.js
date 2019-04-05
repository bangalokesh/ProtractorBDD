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
const log4jconfig_1 = require("../log4jconfig");
const dbconnect_1 = require("./dbconnect");
const node_localstorage_1 = require("node-localstorage");
const logger = require('node-file-logger');
logger.SetUserOptions(log4jconfig_1.options);
let request = require('request');
let db = new dbconnect_1.dbconnect();
let localStorage = new node_localstorage_1.LocalStorage('./Utils/scratch');
class api {
    constructor() {
        this.getRequest = function (url) {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise((resolve, reject) => {
                    request.get(url, function (error, response, json) {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (!error) {
                                yield logger.Info('test' + JSON.stringify(response));
                                let statuscode = JSON.parse(response.body).cod;
                                logger.Info(response.statusCode);
                                db.executeUpdate(localStorage.getItem('ID'), 'ResponseCode', statuscode);
                                //await logger.Info('Status Code: ' + JSON.parse(response.body) + ":" + JSON.parse(response.body).cod);
                                return resolve(json);
                            }
                            else {
                                logger.Error('error');
                                return reject(error);
                            }
                        });
                    });
                });
            });
        };
        this.postRequest = function (url, obj) {
            return __awaiter(this, void 0, void 0, function* () {
                let json = JSON.parse(JSON.stringify(obj));
                request.post(url, json, (error, res, body) => {
                    if (error) {
                        logger.Error(error);
                        return (error);
                    }
                    logger.Info(`statusCode for post request: ${res.statusCode}`);
                    let statuscode = res.statusCode;
                    db.executeUpdate(localStorage.getItem('ID'), 'ResponseCode', statuscode);
                });
            });
        };
    }
}
exports.api = api;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVXRpbHMvYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxnREFBdUM7QUFDdkMsMkNBQXdDO0FBQ3hDLHlEQUFpRDtBQUNqRCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMzQyxNQUFNLENBQUMsY0FBYyxDQUFDLHFCQUFPLENBQUMsQ0FBQztBQUMvQixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsSUFBSSxFQUFFLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFDekIsSUFBSSxZQUFZLEdBQUcsSUFBSSxnQ0FBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFHdkQsTUFBYSxHQUFHO0lBQWhCO1FBRUksZUFBVSxHQUFHLFVBQWdCLEdBQVU7O2dCQUNuQyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO29CQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFnQixLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUk7OzRCQUNsRCxJQUFJLENBQUMsS0FBSyxFQUFFO2dDQUNSLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dDQUNyRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0NBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dDQUNqQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFBO2dDQUN2RSx1R0FBdUc7Z0NBQ3ZHLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOzZCQUN4QjtpQ0FBTTtnQ0FDSCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dDQUN0QixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzs2QkFDeEI7d0JBQ0wsQ0FBQztxQkFBQSxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1NBQUEsQ0FBQTtRQUdELGdCQUFXLEdBQUcsVUFBZ0IsR0FBVSxFQUFFLEdBQVU7O2dCQUNoRCxJQUFJLElBQUksR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtvQkFDekMsSUFBSSxLQUFLLEVBQUU7d0JBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTt3QkFDbkIsT0FBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNqQjtvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztvQkFDOUQsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztvQkFDaEMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQTtnQkFDM0UsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1NBQUEsQ0FBQTtJQUVMLENBQUM7Q0FBQTtBQWxDRCxrQkFrQ0MifQ==