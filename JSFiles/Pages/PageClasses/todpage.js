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
const todObjects_1 = require("../PageObjects/todObjects");
const orglogin_1 = require("./orglogin");
const dbconnect_1 = require("../../Utils/dbconnect");
const node_localstorage_1 = require("node-localstorage");
const log4jconfig_1 = require("../../log4jconfig");
const logger = require('node-file-logger');
logger.SetUserOptions(log4jconfig_1.options);
let orglog = new orglogin_1.orglogin();
let localStorage = new node_localstorage_1.LocalStorage('./Utils/scratch');
let dbcon = new dbconnect_1.dbconnect();
class todpage {
    navigate() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.waitForAngularEnabled(false);
                yield protractor_1.browser.get(todObjects_1.todObjects.url).then(function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        yield protractor_1.browser.getTitle().then(function (title) {
                            return __awaiter(this, void 0, void 0, function* () {
                                yield logger.Info("Title of Page = " + title);
                                if (title === 'Sign in to your account') {
                                    yield todObjects_1.todObjects.loginEmail.sendKeys('lbanga@deloitte.com');
                                    yield todObjects_1.todObjects.loginEmailNext.click();
                                }
                                else if (title === 'Enter Your PIN') {
                                    yield logger.Info("talent on demand navigation started, move to enter your pin.");
                                }
                                else if (title === 'TalentOnDemand') {
                                    yield logger.Info("talent on demand navigation completed.");
                                }
                                else if (title === 'Deloittenet-Splash') {
                                    yield todObjects_1.todObjects.enterDeloitteNet.click();
                                    yield orglog.login();
                                }
                            });
                        });
                    });
                });
            }
            catch (Exception) {
                logger.Fatal(Exception);
            }
        });
    }
    enterPin() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.getTitle().then(function (title) {
                    return __awaiter(this, void 0, void 0, function* () {
                        yield logger.Info('Title of page = ' + title);
                        if (title === 'Enter Your PIN') {
                            dbcon.executeSelectQuery(localStorage.getItem('ID'), 'Data1').then((pinCode) => __awaiter(this, void 0, void 0, function* () {
                                yield logger.Info(pinCode);
                                yield todObjects_1.todObjects.pinEdit.sendKeys(pinCode);
                                yield todObjects_1.todObjects.pinButton.click().then(() => __awaiter(this, void 0, void 0, function* () {
                                    yield protractor_1.browser.waitForAngularEnabled(true);
                                }));
                            }));
                        }
                    });
                });
            }
            catch (Exception) {
                logger.Fatal(Exception);
            }
        });
    }
    getPTORemaining() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.getTitle().then(function (title) {
                    return __awaiter(this, void 0, void 0, function* () {
                        yield logger.Info(title);
                        if (title === 'TalentOnDemand') {
                            todObjects_1.todObjects.ptoText.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function* () {
                                    yield logger.Info(text);
                                });
                            });
                        }
                    });
                });
            }
            catch (Exception) {
                logger.Fatal(Exception);
            }
        });
    }
    getWellBeingSubsidy() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                todObjects_1.todObjects.wellBeing.each(function (item) {
                    item.element(protractor_1.by.xpath('//div[@class="ng-transclude"]')).getText().then(function (text) {
                        return __awaiter(this, void 0, void 0, function* () {
                            yield logger.Info(text);
                        });
                    });
                });
            }
            catch (Exception) {
                logger.Fatal(Exception);
            }
        });
    }
}
exports.todpage = todpage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1BhZ2VzL1BhZ2VDbGFzc2VzL3RvZHBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFxRjtBQUNyRiwwREFBdUQ7QUFFdkQseUNBQXNDO0FBQ3RDLHFEQUFrRDtBQUNsRCx5REFBOEM7QUFDOUMsbURBQTBDO0FBQzFDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxjQUFjLENBQUMscUJBQU8sQ0FBQyxDQUFDO0FBQy9CLElBQUksTUFBTSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO0FBQzVCLElBQUksWUFBWSxHQUFHLElBQUksZ0NBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3ZELElBQUksS0FBSyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0FBQzVCLE1BQWEsT0FBTztJQUNWLFFBQVE7O1lBQ1YsSUFBRztnQkFDQyxNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7O3dCQUNuQyxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWUsS0FBSzs7Z0NBQzlDLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsQ0FBQztnQ0FDOUMsSUFBRyxLQUFLLEtBQUsseUJBQXlCLEVBQUM7b0NBQ25DLE1BQU0sdUJBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0NBQzVELE1BQU0sdUJBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7aUNBQzNDO3FDQUFNLElBQUcsS0FBSyxLQUFLLGdCQUFnQixFQUFFO29DQUNs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