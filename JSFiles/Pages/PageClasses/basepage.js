"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter = __importStar(require("cucumber-html-reporter"));
const log4jconfig_1 = require("../../log4jconfig");
const logger = require('node-file-logger');
logger.SetUserOptions(log4jconfig_1.options);
let fs = require('fs');
let scenario = null;
//const viewport = "1200x700";
const device = "Laptop";
class basepage {
    takeScreenshots() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.takeScreenshot().then((png) => __awaiter(this, void 0, void 0, function* () {
                let decodedImage = new Buffer(png, 'base64').toString('binary');
                let sc = this.getScenario().then(function (World) {
                    reporter.attach(decodedImage, 'image/png');
                });
            }));
        });
    }
    getScenario() {
        return __awaiter(this, void 0, void 0, function* () {
            return scenario;
        });
    }
    setScenario(Scenario) {
        return __awaiter(this, void 0, void 0, function* () {
            scenario = Scenario;
        });
    }
    getCurrentBrowserName() {
        return __awaiter(this, void 0, void 0, function* () {
            let bname = null;
            yield protractor_1.browser.getCapabilities().then(function (caps) {
                bname = caps.get('browserName');
            });
            return bname;
        });
    }
    hackathonReporter(task, testName, domId, comparisonResult, viewport, browser) {
        return __awaiter(this, void 0, void 0, function* () {
            fs.appendFileSync('Traditional-V1-TestResults.txt', `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`);
            return comparisonResult;
        });
    }
}
exports.basepage = basepage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QYWdlcy9QYWdlQ2xhc3Nlcy9iYXNlcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUFxQztBQUVyQyxpRUFBbUQ7QUFDbkQsbURBQTBDO0FBQzFDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxjQUFjLENBQUMscUJBQU8sQ0FBQyxDQUFDO0FBRy9CLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QixJQUFJLFFBQVEsR0FBWSxJQUFJLENBQUM7QUFDN0IsOEJBQThCO0FBQzlCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztBQUV4QixNQUFhLFFBQVE7SUFFWCxlQUFlOztZQUNqQixvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFNLEdBQUcsRUFBQyxFQUFFO2dCQUN0QyxJQUFJLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNqRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSztvQkFDM0MsUUFBUSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQy9DLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtJQUVLLFdBQVc7O1lBQ2IsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLFFBQVE7O1lBQ3RCLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDeEIsQ0FBQztLQUFBO0lBRUsscUJBQXFCOztZQUN2QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDakIsTUFBTSxvQkFBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7Z0JBQy9DLEtBQUssR0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1lBQ0wsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0tBQUE7SUFFSyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsT0FBTzs7WUFFOUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxnQ0FBZ0MsRUFBRSxVQUFVLElBQUksZ0JBQWdCLFFBQVEsYUFBYSxLQUFLLGNBQWMsT0FBTyxlQUFlLFFBQVEsYUFBYSxNQUFNLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbE8sT0FBTyxnQkFBZ0IsQ0FBQztRQUU1QixDQUFDO0tBQUE7Q0FDSjtBQWxDRCw0QkFrQ0MifQ==