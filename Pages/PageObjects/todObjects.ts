import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';

export class todObjects {
    
    public static url:string = "https://talentondemand.deloittenet.deloitte.com/#!/";

    public static enterDeloitteNet:ElementFinder = element(by.xpath('//*[starts-with(@id,"ContentPlaceHolder"]'));

    public static loginEmail:ElementFinder = element(by.name('loginfmt'));

    public static loginEmailNext:ElementFinder = element(by.id('idSIButton9'));

    public static pinEdit:ElementFinder = element(by.xpath('//*[@id="main_txtPIN"]'));

    public static pinButton:ElementFinder = element(by.xpath('//*[@id="cmdContinue"]')); 

    public static ptoText:ElementFinder = element(by.xpath('//*[@id="ptoChart"]/svg/g/text[4]'));

    public static wellBeing:ElementArrayFinder = element.all(by.repeater('cardUser in vm.cards'));

    public static wellBeingSubsidy:ElementFinder = element(by.xpath('//div[@class="ng-transclude"]'));
   
}