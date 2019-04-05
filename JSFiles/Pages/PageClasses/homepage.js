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
const homepageObjects_1 = require("../PageObjects/homepageObjects");
const protractor_1 = require("protractor");
const log4jconfig_1 = require("../../log4jconfig");
const logger = require('node-file-logger');
logger.SetUserOptions(log4jconfig_1.options);
class homepage {
    navigate() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.waitForAngularEnabled(false);
                yield protractor_1.browser.get(homepageObjects_1.homepageObjects.mydneturl).then(() => __awaiter(this, void 0, void 0, function* () {
                    yield protractor_1.browser.sleep(4000);
                    yield protractor_1.browser.getCurrentUrl().then(function (title) {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (title.includes('DNetSplashPage.aspx')) {
                                yield homepageObjects_1.homepageObjects.deloitteNetNow.click();
                                yield logger.Info('DeloitteNet--Splash');
                            }
                            else {
                                yield logger.Info('DeloitteNet');
                            }
                        });
                    });
                }));
            }
            catch (Exception) {
                logger.Fatal(Exception);
            }
        });
    }
    search(searchText) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield homepageObjects_1.homepageObjects.searchbar.sendKeys(searchText).then(() => __awaiter(this, void 0, void 0, function* () {
                    yield protractor_1.browser.sleep(3000);
                    homepageObjects_1.homepageObjects.searchresults.each((itemName) => __awaiter(this, void 0, void 0, function* () {
                        yield itemName.element(protractor_1.by.css('li[class=if-result ng-scope selected active]')).getText().then(function (text) {
                            return __awaiter(this, void 0, void 0, function* () {
                                yield logger.Info(text);
                                if (text.includes(searchText)) {
                                    yield itemName.click();
                                }
                            });
                        });
                    }));
                }));
            }
            catch (Exception) {
                logger.Fatal(Exception);
            }
        });
    }
    loginPage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (homepageObjects_1.homepageObjects.userName.isDisplayed()) {
                    yield homepageObjects_1.homepageObjects.userName.sendKeys("lbanga@deloitte.com");
                    yield homepageObjects_1.homepageObjects.password.sendKeys("Corp5%User");
                    yield homepageObjects_1.homepageObjects.isDeloitteLaptop.click();
                    yield homepageObjects_1.homepageObjects.isDeloitteSubmit.click();
                }
            }
            catch (Exception) {
                logger.Fatal(Exception);
            }
        });
    }
}
exports.homepage = homepage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QYWdlcy9QYWdlQ2xhc3Nlcy9ob21lcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsb0VBQWlFO0FBQ2pFLDJDQUFxRjtBQUVyRixtREFBMEM7QUFDMUMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxxQkFBTyxDQUFDLENBQUM7QUFFL0IsTUFBYSxRQUFRO0lBRVosUUFBUTs7WUFDVixJQUFHO2dCQUNFLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0MsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFRLEVBQUU7b0JBQ3hELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzFCLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBZ0IsS0FBSzs7NEJBQ3BELElBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO2dDQUN0QyxNQUFNLGlDQUFlLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2dDQUM3QyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQzs2QkFDNUM7aUNBQU07Z0NBQ0gsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzZCQUNwQzt3QkFDTCxDQUFDO3FCQUFBLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUEsQ0FBQyxDQUFDO2FBQ1A7WUFBQSxPQUFNLFNBQVMsRUFBQztnQkFDYixNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzNCO1FBQ0osQ0FBQztLQUFBO0lBRUssTUFBTSxDQUFDLFVBQWlCOztZQUMxQixJQUFHO2dCQUNDLE1BQU0saUNBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFTLEVBQUU7b0JBQ2pFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzFCLGlDQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFNLFFBQVEsRUFBRSxFQUFFO3dCQUNqRCxNQUFNLFFBQVEsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWUsSUFBSTs7Z0NBQzdHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FDeEIsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFDO29DQUN6QixNQUFNLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQ0FDMUI7NEJBQ0wsQ0FBQzt5QkFBQSxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFBLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUEsQ0FBQyxDQUFDO2FBQ047WUFBQyxPQUFNLFNBQVMsRUFBQztnQkFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzNCO1FBQ0wsQ0FBQztLQUFBO0lBRUssU0FBUzs7WUFDWCxJQUFHO2dCQUNDLElBQUcsaUNBQWUsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQUM7b0JBQ3RDLE1BQU0saUNBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0JBQy9ELE1BQU0saUNBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN0RCxNQUFNLGlDQUFlLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQy9DLE1BQU0saUNBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDbEQ7YUFDSjtZQUFDLE9BQU0sU0FBUyxFQUFDO2dCQUNkLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDM0I7UUFDTCxDQUFDO0tBQUE7Q0FFSjtBQXBERCw0QkFvREMifQ==