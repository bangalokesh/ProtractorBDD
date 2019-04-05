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
const api_1 = require("../../Utils/api");
const protractor_1 = require("protractor");
const apiservicetestObjects_1 = require("../PageObjects/apiservicetestObjects");
const log4jconfig_1 = require("../../log4jconfig");
const logger = require('node-file-logger');
logger.SetUserOptions(log4jconfig_1.options);
let apitest = new api_1.api();
class apiservicetest {
    getServiceRequest() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.wait(apitest.getRequest(apiservicetestObjects_1.apiservicetestObjects.weatherservice), 3000).then((json) => __awaiter(this, void 0, void 0, function* () {
                    let myobj = yield JSON.parse(JSON.stringify(json));
                    yield logger.Info('response from service request: ' + json);
                }));
            }
            catch (Exception) {
                logger.Fatal(Exception);
            }
        });
    }
    postServiceRequest() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let myobj = apiservicetestObjects_1.apiservicetestObjects.postservicejson; //{"id": "file", "value": "File"};
                yield protractor_1.browser.wait(apitest.postRequest(apiservicetestObjects_1.apiservicetestObjects.postserviceurl, myobj), 3000);
                yield logger.Info('post request completed');
            }
            catch (Exception) {
                logger.Fatal(Exception);
            }
        });
    }
}
exports.apiservicetest = apiservicetest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpc2VydmljZXRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QYWdlcy9QYWdlQ2xhc3Nlcy9hcGlzZXJ2aWNldGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EseUNBQXNDO0FBQ3RDLDJDQUFxQztBQUNyQyxnRkFBNkU7QUFDN0UsbURBQTBDO0FBQzFDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxjQUFjLENBQUMscUJBQU8sQ0FBQyxDQUFDO0FBQy9CLElBQUksT0FBTyxHQUFHLElBQUksU0FBRyxFQUFFLENBQUM7QUFFeEIsTUFBYSxjQUFjO0lBRWpCLGlCQUFpQjs7WUFDbkIsSUFBRztnQkFDQyxvQkFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLDZDQUFxQixDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFNLElBQUksRUFBQSxFQUFFO29CQUMxRixJQUFJLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNuRCxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUNBQWlDLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQ2hFLENBQUMsQ0FBQSxDQUFDLENBQUM7YUFDTjtZQUFDLE9BQU8sU0FBUyxFQUFFO2dCQUNoQixNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzNCO1FBRUwsQ0FBQztLQUFBO0lBRUssa0JBQWtCOztZQUNwQixJQUFHO2dCQUNDLElBQUksS0FBSyxHQUFHLDZDQUFxQixDQUFDLGVBQWUsQ0FBQyxDQUFDLGtDQUFrQztnQkFDckYsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLDZDQUFxQixDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUYsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7YUFDL0M7WUFBQyxPQUFPLFNBQVMsRUFBRTtnQkFDaEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMzQjtRQUNMLENBQUM7S0FBQTtDQUNKO0FBdkJELHdDQXVCQyJ9