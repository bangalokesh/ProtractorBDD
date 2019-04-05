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
const homepage_1 = require("../Pages/PageClasses/homepage");
const todpage_1 = require("../Pages/PageClasses/todpage");
const node_localstorage_1 = require("node-localstorage");
const dbconnect_1 = require("../Utils/dbconnect");
const homepageObjects_1 = require("../Pages/PageObjects/homepageObjects");
const orglogin_1 = require("../Pages/PageClasses/orglogin");
const angularhome_1 = require("../Pages/PageClasses/angularhome");
const basepage_1 = require("../Pages/PageClasses/basepage");
const apiservicetest_1 = require("../Pages/PageClasses/apiservicetest");
const log4jconfig_1 = require("../log4jconfig");
const juliemrs_1 = require("../Pages/PageClasses/juliemrs");
const logger = require('node-file-logger');
logger.SetUserOptions(log4jconfig_1.options);
let home = new homepage_1.homepage();
let tod = new todpage_1.todpage();
let dbcon = new dbconnect_1.dbconnect();
let bp = new basepage_1.basepage();
let org = new orglogin_1.orglogin();
let localStorage = new node_localstorage_1.LocalStorage('./Utils/scratch');
let ang = new angularhome_1.angularhome();
let db = new dbconnect_1.dbconnect();
let apiser = new apiservicetest_1.apiservicetest();
let julimrcal = new juliemrs_1.juliemrs();
cucumber_1.Given('I go to the site', () => __awaiter(this, void 0, void 0, function* () {
    yield home.navigate().then(() => __awaiter(this, void 0, void 0, function* () {
        if (homepageObjects_1.homepageObjects.userName.isDisplayed()) {
            org.login();
        }
        yield logger.Info("given statement complete:");
    }));
}));
cucumber_1.When('I search for {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield home.search(string).then(() => __awaiter(this, void 0, void 0, function* () {
        yield logger.Info("when statement complete");
    }));
}));
cucumber_1.Then('I am navigated to', () => __awaiter(this, void 0, void 0, function* () {
    yield logger.Info("then statement complete");
}));
cucumber_1.Given('i go to talentonDemand', () => __awaiter(this, void 0, void 0, function* () {
    yield tod.navigate();
}));
cucumber_1.When('i enter pin number', () => __awaiter(this, void 0, void 0, function* () {
    yield tod.enterPin();
}));
cucumber_1.Then('get remaining PTO', () => __awaiter(this, void 0, void 0, function* () {
    yield tod.getPTORemaining();
}));
cucumber_1.Then('get remaining WellBeing Subsidy', () => __awaiter(this, void 0, void 0, function* () {
    yield tod.getWellBeingSubsidy();
}));
cucumber_1.Given('i go to Anuglar home', () => __awaiter(this, void 0, void 0, function* () {
    yield ang.navigate();
}));
cucumber_1.When('i click on getting started', () => __awaiter(this, void 0, void 0, function* () {
    let ang = yield new angularhome_1.angularhome();
    yield ang.getStarted();
}));
cucumber_1.When('i search for text', () => __awaiter(this, void 0, void 0, function* () {
    yield ang.search();
}));
cucumber_1.Given('db load', () => __awaiter(this, void 0, void 0, function* () {
    bp.getScenario().then(function (scenario) {
        let name = scenario.name;
        db.executeQuery(name);
    });
}));
cucumber_1.Given('i call the service', () => __awaiter(this, void 0, void 0, function* () {
    apiser.getServiceRequest();
}));
cucumber_1.Given('i post request', () => __awaiter(this, void 0, void 0, function* () {
    apiser.postServiceRequest();
}));
cucumber_1.Given('i would like to test calc', () => __awaiter(this, void 0, void 0, function* () {
    return julimrcal.calcMethod('+');
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcGRlZmluaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvc3RlcGRlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUE4RDtBQUs5RCw0REFBd0Q7QUFDeEQsMERBQXVEO0FBQ3ZELHlEQUE4QztBQUM5QyxrREFBK0M7QUFDL0MsMEVBQXVFO0FBQ3ZFLDREQUF5RDtBQUN6RCxrRUFBK0Q7QUFDL0QsNERBQXlEO0FBRXpELHdFQUFxRTtBQUNyRSxnREFBdUM7QUFDdkMsNERBQXlEO0FBQ3pELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxjQUFjLENBQUMscUJBQU8sQ0FBQyxDQUFDO0FBQy9CLElBQUksSUFBSSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO0FBQzFCLElBQUksR0FBRyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO0FBQ3hCLElBQUksS0FBSyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0FBQzVCLElBQUksRUFBRSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO0FBQ3hCLElBQUksR0FBRyxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO0FBQ3pCLElBQUksWUFBWSxHQUFHLElBQUksZ0NBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3ZELElBQUksR0FBRyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBQzVCLElBQUksRUFBRSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0FBQ3pCLElBQUksTUFBTSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO0FBQ2xDLElBQUksU0FBUyxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO0FBRzNCLGdCQUFLLENBQUMsa0JBQWtCLEVBQUUsR0FBUyxFQUFFO0lBQ2pDLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUks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