import { ElementFinder, element, by, ElementArrayFinder } from 'protractor';


export class TraditionalTest1Objects{

    public static test1url:string = "https://demo.applitools.com/gridHackathonV1.html";

    public static test1url2:string = "https://demo.applitools.com/gridHackathonV2.html";

    public static searchField:ElementFinder = element(by.id("INPUTtext____42"));

    public static searchIcon:ElementFinder = element(by.id("I__headericon__44"));

    public static filterLabels:ElementArrayFinder = element.all(by.xpath("//div[@id='filter_1']/ul/li"));

    public static filterButton:ElementFinder = element(by.xpath("//button[@id='filterBtn']"));

    public static product:ElementArrayFinder = element.all(by.xpath("//div[@id='product_grid']/div"));

    public static product1:ElementArrayFinder = element.all(by.xpath("//div[@id='product_grid']/div[1]"));

    public static filterCheckboxBlack:ElementFinder = element(by.xpath("//span[@id='SPAN__checkmark__107']"));

    public static filterValueBlack:ElementFinder = element(by.xpath("//label[contains(text(),'Black')]/small"));

    public static shoeName:ElementFinder = element(by.id("shoe_name"));

    
}