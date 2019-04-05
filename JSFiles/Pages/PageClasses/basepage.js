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
}
exports.basepage = basepage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QYWdlcy9QYWdlQ2xhc3Nlcy9iYXNlcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUFxQztBQUVyQyxpRUFBbUQ7QUFDbkQsbURBQTBDO0FBQzFDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxjQUFjLENBQUMscUJBQU8sQ0FBQyxDQUFDO0FBRy9CLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QixJQUFJLFFBQVEsR0FBWSxJQUFJLENBQUM7QUFFN0IsTUFBYSxRQUFRO0lBRVgsZUFBZTs7WUFDakIsb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBTSxHQUFHLEVBQUMsRUFBRTtnQkFDdEMsSUFBSSxZQUFZLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUs7b0JBQzNDLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7SUFFSyxXQUFXOztZQUNiLE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxRQUFROztZQUN0QixRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLENBQUM7S0FBQTtDQUNKO0FBbEJELDRCQWtCQyJ9