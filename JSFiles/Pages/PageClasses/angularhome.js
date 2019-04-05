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
const angularhomeObjects_1 = require("../PageObjects/angularhomeObjects");
const dbconnect_1 = require("../../Utils/dbconnect");
const node_localstorage_1 = require("node-localstorage");
const log4jconfig_1 = require("../../log4jconfig");
const logger = require('node-file-logger');
logger.SetUserOptions(log4jconfig_1.options);
let localStorage = new node_localstorage_1.LocalStorage('./Utils/scratch');
let db = new dbconnect_1.dbconnect();
class angularhome {
    navigate() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.get(angularhomeObjects_1.angularhomeObjects.angularurl).then(() => __awaiter(this, void 0, void 0, function* () {
                    yield protractor_1.browser.getTitle().then(function (title) {
                        return __awaiter(this, void 0, void 0, function* () {
                            yield logger.Info("Title = " + title);
                            db.executeUpdate(localStorage.getItem('ID'), 'Title', title);
                        });
                    });
                }));
            }
            catch (Exception) {
                yield logger.Fatal(Exception);
            }
        });
    }
    getStarted() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield angularhomeObjects_1.angularhomeObjects.gettingstartedLink.click().then(() => __awaiter(this, void 0, void 0, function* () {
                    yield protractor_1.browser.sleep(2000);
                    yield logger.Info('clicked on getting started');
                }));
            }
            catch (Exception) {
                yield logger.Fatal(Exception);
            }
        });
    }
    search() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield db.executeSelectQuery(localStorage.getItem('ID'), 'Data1').then(function (res) {
                    return __awaiter(this, void 0, void 0, function* () {
                        yield logger.Info('Query Result = ' + res);
                        yield angularhomeObjects_1.angularhomeObjects.searchBox.sendKeys(res).then(() => __awaiter(this, void 0, void 0, function* () {
                            protractor_1.browser.sleep(1000);
                        }));
                    });
                });
            }
            catch (Exception) {
                yield logger.Fatal(Exception);
            }
        });
    }
}
exports.angularhome = angularhome;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcmhvbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QYWdlcy9QYWdlQ2xhc3Nlcy9hbmd1bGFyaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLDBFQUF1RTtBQUV2RSxxREFBa0Q7QUFDbEQseURBQWlEO0FBR2pELG1EQUEwQztBQUMxQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMzQyxNQUFNLENBQUMsY0FBYyxDQUFDLHFCQUFPLENBQUMsQ0FBQztBQUMvQixJQUFJLFlBQVksR0FBRyxJQUFJLGdDQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN2RCxJQUFJLEVBQUUsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUV6QixNQUFhLFdBQVc7SUFFZCxRQUFROztZQUNWLElBQUc7Z0JBQ0MsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBUSxFQUFFO29CQUM1RCxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWdCLEtBQUs7OzRCQUMvQyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFFLEtBQUssQ0FBQyxDQUFDOzRCQUNyQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUNqRSxDQUFDO3FCQUFBLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUEsQ0FBQyxDQUFDO2FBQ047WUFBQyxPQUFPLFNBQVMsRUFBQztnQkFDZixNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7YUFDaEM7UUFDTCxDQUFDO0tBQUE7SUFFSyxVQUFVOztZQUNaLElBQUk7Z0JBQ0EsTUFBTSx1Q0FBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBUSxFQUFFO29CQUMvRCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMxQixNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztnQkFDcEQsQ0FBQyxDQUFBLENBQUMsQ0FBQzthQUNOO1lBQUMsT0FBTyxTQUFTLEVBQUM7Z0JBQ2YsTUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFBO2FBQ2hDO1FBQ0wsQ0FBQztLQUFBO0lBRUssTUFBTTs7WUFDUixJQUFHO2dCQUNDLE1BQU0sRUFBRSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQWUsR0FBVTs7d0JBQzNGLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUMsQ0FBQzt3QkFDM0MsTUFBTSx1Q0FBa0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFPLEVBQUU7NEJBQzNELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN4QixDQUFDLENBQUEsQ0FBQyxDQUFDO29CQUNQLENBQUM7aUJBQUEsQ0FBQyxDQUFDO2FBQ047WUFBQyxPQUFPLFNBQVMsRUFBQztnQkFDZixNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7YUFDaEM7UUFDTCxDQUFDO0tBQUE7Q0FFSjtBQXZDRCxrQ0F1Q0MifQ==