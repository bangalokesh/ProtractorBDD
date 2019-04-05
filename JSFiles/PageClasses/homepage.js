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
const homepageObjects_1 = require("./homepageObjects");
const protractor_1 = require("protractor");
class homepage {
    navigate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.waitForAngularEnabled(false);
            yield protractor_1.browser.get(homepageObjects_1.homepageObjects.mydneturl).then(() => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.sleep(4000);
                yield protractor_1.browser.getCurrentUrl().then(function (title) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (title.includes('DNetSplashPage.aspx')) {
                            yield homepageObjects_1.homepageObjects.deloitteNetNow.click();
                            yield console.log('DeloitteNet--Splash');
                        }
                        else {
                            yield console.log('DeloitteNet');
                        }
                    });
                });
            }));
        });
    }
    search(searchText) {
        return __awaiter(this, void 0, void 0, function* () {
            yield homepageObjects_1.homepageObjects.searchbar.sendKeys(searchText).then(() => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.sleep(3000);
                homepageObjects_1.homepageObjects.searchresults.each((itemName) => __awaiter(this, void 0, void 0, function* () {
                    yield itemName.element(protractor_1.by.css('li[class=if-result ng-scope selected active]')).getText().then(function (text) {
                        return __awaiter(this, void 0, void 0, function* () {
                            yield console.log(text);
                            if (text.includes(searchText)) {
                                yield itemName.click();
                            }
                        });
                    });
                }));
            }));
        });
    }
}
exports.homepage = homepage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlQ2xhc3Nlcy9ob21lcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdURBQW9EO0FBQ3BELDJDQUFxRjtBQUdyRixNQUFhLFFBQVE7SUFFWixRQUFROztZQUNULE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVEsRUFBRTtnQkFDeEQsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFnQixLQUFLOzt3QkFDcEQsSUFBRyxLQUFLLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7NEJBQ3RDLE1BQU0saUNBQWUsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQzdDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO3lCQUM1Qzs2QkFBTTs0QkFDSCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7eUJBQ3BDO29CQUNMLENBQUM7aUJBQUEsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtJQUVLLE1BQU0sQ0FBQyxVQUFpQjs7WUFDMUIsTUFBTSxpQ0FBZSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVMsRUFBRTtnQkFDakUsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsaUNBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQU0sUUFBUSxFQUFFLEVBQUU7b0JBQ2pELE1BQU0sUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBZSxJQUFJOzs0QkFDN0csTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUN4QixJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUM7Z0NBQ3pCLE1BQU0sUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDOzZCQUMxQjt3QkFDTCxDQUFDO3FCQUFBLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUEsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtDQUNKO0FBOUJELDRCQThCQyJ9