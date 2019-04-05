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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const dbconnect_1 = require("../Utils/dbconnect");
const node_localstorage_1 = require("node-localstorage");
const basepage_1 = require("../Pages/PageClasses/basepage");
const log4jconfig_1 = require("../log4jconfig");
const logger = require('node-file-logger');
logger.SetUserOptions(log4jconfig_1.options);
let db = new dbconnect_1.dbconnect();
let bp = new basepage_1.basepage();
let localStorage = new node_localstorage_1.LocalStorage('./Utils/scratch');
cucumber_1.Before((Scenario) => __awaiter(this, void 0, void 0, function* () {
    try {
        let name = Scenario.pickle.name;
        yield bp.setScenario(Scenario);
        yield logger.Info(name + ": test started");
        yield protractor_1.browser.driver.manage().window().maximize();
        yield db.executeQuery(name);
    }
    catch (Exception) {
        logger.Error(Exception);
    }
}));
cucumber_1.After(function (Scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let name = yield Scenario.pickle.name;
            yield logger.Info(name + ": test completed");
            yield protractor_1.browser.takeScreenshot().then((screenshot) => __awaiter(this, void 0, void 0, function* () {
                yield this.attach(screenshot, 'image/png');
                yield logger.Info(Scenario.result.status.toLowerCase());
                yield db.executeUpdate(localStorage.getItem('ID'), 'Status', Scenario.result.status.toLowerCase());
                yield db.executeUpdate(localStorage.getItem('ID'), 'ExecutionStatus', 'Executed');
            }));
        }
        catch (Exception) {
            logger.Error(Exception);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUFtRDtBQUNuRCwyQ0FBcUM7QUFDckMsa0RBQStDO0FBRS9DLHlEQUFpRDtBQUNqRCw0REFBeUQ7QUFDekQsZ0RBQXVDO0FBQ3ZDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxjQUFjLENBQUMscUJBQU8sQ0FBQyxDQUFDO0FBQy9CLElBQUksRUFBRSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0FBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO0FBQ3hCLElBQUksWUFBWSxHQUFHLElBQUksZ0NBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRW5ELGlCQUFNLENBQUMsQ0FBTyxRQUFRLEVBQUUsRUFBRTtJQUN0QixJQUFHO1FBQ0MsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQTtRQUMxQyxNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xELE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMvQjtJQUFDLE9BQU0sU0FBUyxFQUFFO1FBQ2YsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUMzQjtBQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLFVBQWdCLFFBQVE7O1FBQzFCLElBQUc7WUFDQyxJQUFJLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3RDLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUMsQ0FBQTtZQUM1QyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQU0sVUFBVSxFQUFFLEVBQUU7Z0JBQ3BELE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2dCQUN4RCxNQUFNLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztnQkFDbEcsTUFBTSxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDckYsQ0FBQyxDQUFBLENBQUMsQ0FBQztTQUNOO1FBQUMsT0FBTSxTQUFTLEVBQUU7WUFDZixNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9