import { ElementFinder, element, by } from 'protractor';


export class angularhomeObjects{

    public static angularurl:string = "https://angular.io/";

    public static gettingstartedLink:ElementFinder = element(by.xpath('//a[@class="button hero-cta"]'));
    
    public static searchBox:ElementFinder = element(by.tagName('[aria-label ="search"]'));
    
}