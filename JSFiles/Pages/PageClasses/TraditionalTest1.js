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
const TraditionalTest1Objects_1 = require("../PageObjects/TraditionalTest1Objects");
//import { async } from "q";
const node_localstorage_1 = require("node-localstorage");
const basepage_1 = require("./basepage");
const log4jconfig_1 = require("../../log4jconfig");
const logger = require('node-file-logger');
logger.SetUserOptions(log4jconfig_1.options);
let localStorage = new node_localstorage_1.LocalStorage('./Utils/scratch');
var assert = require('chai').assert;
let bp = new basepage_1.basepage();
const wid = 1200;
const hgt = 700;
class TraditionalTest1 {
    navigate() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.driver.manage().window().setSize(wid, hgt);
                yield protractor_1.browser.waitForAngularEnabled(false);
                yield protractor_1.browser.get(TraditionalTest1Objects_1.TraditionalTest1Objects.test1url);
                //await browser.executeScript("document.body.style.zoom='68%'");
            }
            catch (Exception) {
                yield logger.Fatal(Exception);
            }
        });
    }
    navigatetosite2() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.driver.manage().window().setSize(wid, hgt);
                yield protractor_1.browser.waitForAngularEnabled(false);
                yield protractor_1.browser.get(TraditionalTest1Objects_1.TraditionalTest1Objects.test1url2);
                //await browser.executeScript("document.body.style.zoom='68%'");
            }
            catch (Exception) {
                yield logger.Fatal(Exception);
            }
        });
    }
    test1() {
        return __awaiter(this, void 0, void 0, function* () {
            let bname = yield bp.getCurrentBrowserName();
            var isDisplayed = yield TraditionalTest1Objects_1.TraditionalTest1Objects.searchField.isDisplayed();
            yield assert.isTrue(isDisplayed, 'found search field');
            if (isDisplayed == true) {
                yield bp.hackathonReporter(1, 'Search field is displayed', 'INPUTtext____42', "Pass", (wid + " * " + hgt), bname);
            }
            else {
                yield bp.hackathonReporter(1, 'Search field is displayed', 'INPUTtext____42', "Fail", (wid + " * " + hgt), bname);
            }
            isDisplayed = yield TraditionalTest1Objects_1.TraditionalTest1Objects.searchIcon.isDisplayed();
            if (isDisplayed == true) {
                yield bp.hackathonReporter(1, 'Search Icon is displayed', 'I__headericon__44', "Pass", (wid + " * " + hgt), bname);
            }
            else {
                yield bp.hackathonReporter(1, 'Search Icon is displayed', 'I__headericon__44', "Fail", (wid + " * " + hgt), bname);
            }
            yield assert.isTrue(isDisplayed, 'found search icon');
            yield this.test2();
        });
    }
    test2() {
        return __awaiter(this, void 0, void 0, function* () {
            let val = null;
            let bname = yield bp.getCurrentBrowserName();
            yield TraditionalTest1Objects_1.TraditionalTest1Objects.filterCheckboxBlack.click();
            yield TraditionalTest1Objects_1.TraditionalTest1Objects.filterValueBlack.getText().then(function (text) {
                return __awaiter(this, void 0, void 0, function* () {
                    val = parseInt(text);
                });
            });
            yield console.log("count of product label = " + val);
            yield TraditionalTest1Objects_1.TraditionalTest1Objects.filterButton.click();
            let sz = yield TraditionalTest1Objects_1.TraditionalTest1Objects.product.count();
            yield console.log("Number of products filtered = " + sz);
            if (sz == val) {
                yield bp.hackathonReporter(2, 'Number of Filtered Products', sz, "Pass", (wid + " * " + hgt), bname);
            }
            else {
                yield bp.hackathonReporter(2, 'Number of Filtered Products', sz, "Fail", (wid + " * " + hgt), bname);
            }
            yield assert.equal(sz, val, "Number of products filtered");
            yield this.test3();
        });
    }
    test3() {
        return __awaiter(this, void 0, void 0, function* () {
            let bname = yield bp.getCurrentBrowserName();
            TraditionalTest1Objects_1.TraditionalTest1Objects.product1.click();
            protractor_1.browser.sleep(3000);
            yield TraditionalTest1Objects_1.TraditionalTest1Objects.shoeName.getText().then(function (text) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield console.log("Shoe name = " + text);
                    yield assert.equal(text, "Appli Air x Night", "Shoe Name Check");
                    if (text == "Appli Air x Night") {
                        yield bp.hackathonReporter(3, 'Product Details Test', text, "Pass", (wid + " * " + hgt), bname);
                    }
                    else {
                        yield bp.hackathonReporter(3, 'Product Details Test', text, "Fail", (wid + " * " + hgt), bname);
                    }
                });
            });
        });
    }
    roughwork() {
        return __awaiter(this, void 0, void 0, function* () {
            /*TraditionalTest1Objects.filterLabels.each( async function(label, index) {
                // Will print 0 First, 1 Second, 2 Third.
                await label.getText().then(async function (text) {
                    await console.log(index, "--",  text);
                    if(text.localeCompare("Black")) {
                        await label.element(by.tagName("small")).getText().then(async function(t){
                            await label.element(by.tagName("span")).click();
                            await console.log(index, "--", t);
    
                        });
    
                        await bp.takeScreenshots();
                        //await label.element(by.css("input[type=checkbox]")).click();
                        
                        
                        //await browser.actions().sendKeys(Key.PAGE_DOWN).perform();
                        console.log("waiting for element");
                        await TraditionalTest1Objects.filterButton.click();
                        console.log("clicked on element");
                        await TraditionalTest1Objects.product.getSize().then(async function(sz){
                            await console.log("Number of products filtered = " + sz);
                        });
                        return;
                        //browser.executeScript("arguments[0].click()", element(by.xpath("//button[@id='filterBtn']")));
                    
                        //await browser.touchActions().tap(TraditionalTest1Objects.filterButton).perform();
                        
                    }
                    return;
                });
              });*/
        });
    }
}
exports.TraditionalTest1 = TraditionalTest1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhZGl0aW9uYWxUZXN0MS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1BhZ2VzL1BhZ2VDbGFzc2VzL1RyYWRpdGlvbmFsVGVzdDEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUE4RztBQUM5RyxvRkFBK0U7QUFDL0UsNEJBQTRCO0FBQzVCLHlEQUFpRDtBQUNqRCx5Q0FBc0M7QUFDdEMsbURBQTBDO0FBRTFDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxjQUFjLENBQUMscUJBQU8sQ0FBQyxDQUFDO0FBQy9CLElBQUksWUFBWSxHQUFHLElBQUksZ0NBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3ZELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUE7QUFDbkMsSUFBSSxFQUFFLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7QUFDeEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUVoQixNQUFhLGdCQUFnQjtJQUduQixRQUFROztZQUNWLElBQUc7Z0JBQ0MsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN6RCxNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsaURBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BELGdFQUFnRTthQUNuRTtZQUFDLE9BQU8sU0FBUyxFQUFDO2dCQUNmLE1BQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNqQztRQUNMLENBQUM7S0FBQTtJQUVLLGVBQWU7O1lB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