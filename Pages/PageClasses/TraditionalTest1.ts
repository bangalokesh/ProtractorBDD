import { browser, element, ElementFinder, by, ElementArrayFinder, ExpectedConditions, Key } from "protractor";
import {TraditionalTest1Objects} from '../PageObjects/TraditionalTest1Objects';
//import { async } from "q";
import { LocalStorage } from 'node-localstorage';
import { basepage } from "./basepage";
import {options} from '../../log4jconfig';
import { watchFile } from "fs";
const logger = require('node-file-logger');
logger.SetUserOptions(options);
let localStorage = new LocalStorage('./Utils/scratch');
var assert = require('chai').assert
let bp = new basepage();
const wid = 1200;
const hgt = 700;

export class TraditionalTest1 {

    
    async navigate(){
        try{
            await browser.driver.manage().window().setSize(wid, hgt);
            await browser.waitForAngularEnabled(false);
            await browser.get(TraditionalTest1Objects.test1url);
            //await browser.executeScript("document.body.style.zoom='68%'");
        } catch (Exception){
            await logger.Fatal(Exception);
        }
    }

    async navigatetosite2(){
        try{
            await browser.driver.manage().window().setSize(wid, hgt);
            await browser.waitForAngularEnabled(false);
            await browser.get(TraditionalTest1Objects.test1url2);
            //await browser.executeScript("document.body.style.zoom='68%'");
        } catch (Exception){
            await logger.Fatal(Exception);
        }
    }

   

    async test1(){

        let bname = await bp.getCurrentBrowserName();
        var isDisplayed = await TraditionalTest1Objects.searchField.isDisplayed();
        await assert.isTrue(isDisplayed, 'found search field');
        if(isDisplayed == true){
            await bp.hackathonReporter(1, 'Search field is displayed', 'INPUTtext____42', "Pass", (wid +" * " + hgt), bname);
        }else{
            await bp.hackathonReporter(1, 'Search field is displayed', 'INPUTtext____42', "Fail", (wid +" * " + hgt), bname);
        }
        

        isDisplayed = await TraditionalTest1Objects.searchIcon.isDisplayed();
        if(isDisplayed==true){
            await bp.hackathonReporter(1, 'Search Icon is displayed', 'I__headericon__44', "Pass", (wid +" * " + hgt), bname);
        } else {
            await bp.hackathonReporter(1, 'Search Icon is displayed', 'I__headericon__44', "Fail", (wid +" * " + hgt), bname);
        }
        await assert.isTrue(isDisplayed, 'found search icon');
        
        await this.test2();
    }

    async test2(){

        let val:number = null;
        let bname = await bp.getCurrentBrowserName();
        await TraditionalTest1Objects.filterCheckboxBlack.click();
        await TraditionalTest1Objects.filterValueBlack.getText().then(async function (text){
            val = parseInt(text);
        });
        await console.log("count of product label = " + val);
        await TraditionalTest1Objects.filterButton.click();
        let sz:number = await TraditionalTest1Objects.product.count();
        await console.log("Number of products filtered = " + sz);
        if(sz==val){
            await bp.hackathonReporter(2, 'Number of Filtered Products', sz, "Pass", (wid +" * " + hgt), bname);
        } else {
            await bp.hackathonReporter(2, 'Number of Filtered Products', sz, "Fail", (wid +" * " + hgt), bname);
        }

        await assert.equal(sz, val, "Number of products filtered");
        await this.test3();
    }

    async test3(){
        let bname = await bp.getCurrentBrowserName();
        TraditionalTest1Objects.product1.click();
        browser.sleep(3000);
        await TraditionalTest1Objects.shoeName.getText().then(async function (text){
            await console.log("Shoe name = " + text);
            await assert.equal(text, "Appli Air x Night", "Shoe Name Check");
            if(text == "Appli Air x Night"){
                await bp.hackathonReporter(3, 'Product Details Test', text, "Pass", (wid +" * " + hgt), bname);
            } else{
                await bp.hackathonReporter(3, 'Product Details Test', text, "Fail", (wid +" * " + hgt), bname);
            }
            
        });
    }
    

    async roughwork(){
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
    }
}