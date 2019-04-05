import { element, by, ElementFinder } from "protractor";

export class orgloginObjects {
    public static userName:ElementFinder = element(by.xpath('//*[@id="userNameInput"]'));
    public static password:ElementFinder = element(by.xpath('//*[@id="passwordInput"]'));
    public static isDeloitteLaptop:ElementFinder = element(by.xpath('//*[@id="isLaptop"]'));
    public static isDeloitteSubmit:ElementFinder = element(by.xpath('//*[@id="submitButton"]'));
}