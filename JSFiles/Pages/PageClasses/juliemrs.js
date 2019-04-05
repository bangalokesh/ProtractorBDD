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
const protractor_1 = require("protractor");
const log4jconfig_1 = require("../../log4jconfig");
const juliemrObjects_1 = require("../PageObjects/juliemrObjects");
const dbconnect_1 = require("../../Utils/dbconnect");
const node_localstorage_1 = require("node-localstorage");
const logger = require('node-file-logger');
logger.SetUserOptions(log4jconfig_1.options);
let db = new dbconnect_1.dbconnect();
let localStorage = new node_localstorage_1.LocalStorage('./Utils/scratch');
class juliemrs {
    calcMethod(operator) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.waitForAngularEnabled(true);
                yield db.connectDatabase();
                yield protractor_1.browser.get(juliemrObjects_1.juliemrObjects.jmrurl).then(() => __awaiter(this, void 0, void 0, function* () {
                    let x = yield (db.executeSelectQuery(localStorage.getItem('ID'), 'data1'));
                    let y = yield (db.executeSelectQuery(localStorage.getItem('ID'), 'data2'));
                    logger.Info('db result = ' + x + ' + ' + y + '.');
                    yield juliemrObjects_1.juliemrObjects.firstTextBox.sendKeys('' + x);
                    yield juliemrObjects_1.juliemrObjects.secondTextBox.sendKeys('' + y);
                    yield juliemrObjects_1.juliemrObjects.operation.sendKeys(operator);
                    yield juliemrObjects_1.juliemrObjects.goButton.click();
                    yield protractor_1.browser.sleep(2000);
                }));
            }
            catch (Exception) {
                logger.Error(Exception);
            }
        });
    }
}
exports.juliemrs = juliemrs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVsaWVtcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QYWdlcy9QYWdlQ2xhc3Nlcy9qdWxpZW1ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLG1EQUEwQztBQUUxQyxrRUFBK0Q7QUFDL0QscURBQWtEO0FBQ2xELHlEQUFpRDtBQUNqRCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMzQyxNQUFNLENBQUMsY0FBYyxDQUFDLHFCQUFPLENBQUMsQ0FBQztBQUMvQixJQUFJLEVBQUUsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUN6QixJQUFJLFlBQVksR0FBRyxJQUFJLGdDQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUV2RCxNQUFhLFFBQVE7SUFHWCxVQUFVLENBQUMsUUFBZTs7WUFDNUIsSUFBRztnQkFDQyxNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xDLE1BQU0sRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMzQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLCtCQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQU8sRUFBRTtvQkFDbkQsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQzFFLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUMxRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUcsQ0FBQztvQkFDcEQsTUFBTSwrQkFBYyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqRCxNQUFNLCtCQUFjLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xELE1BQU0sK0JBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNsRCxNQUFNLCtCQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN0QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUEsQ0FBQyxDQUFDO2FBQ2Q7WUFBQyxPQUFPLFNBQVMsRUFBRTtnQkFDaEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMzQjtRQUNMLENBQUM7S0FBQTtDQUNKO0FBckJELDRCQXFCQyJ9