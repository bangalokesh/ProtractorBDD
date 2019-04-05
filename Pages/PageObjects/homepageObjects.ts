import { element, by, By, ElementFinder, ElementArrayFinder } from 'protractor';

export class homepageObjects {
    public static mydneturl:string = "https://my.dnet.deloitte.com/";
    public static deloitteNetNow:ElementFinder = element(by.id('btnOk'));
    public static searchbar:ElementFinder = element(by.css('[id=DCH_SearchInput]'));
    public static searchresults:ElementArrayFinder = element.all(by.repeater('category in resultItems'));
    public static userName:ElementFinder = element(by.id('userNameInput'));
    public static password:ElementFinder= element(by.id('passwordInput'));
    public static isDeloitteLaptop:ElementFinder = element(by.name('isLaptop'));
    public static isDeloitteSubmit:ElementFinder = element(by.id('submitButton'));
}

