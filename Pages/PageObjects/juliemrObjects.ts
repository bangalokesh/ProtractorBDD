import { ElementFinder, element, by, ElementArrayFinder } from 'protractor';

export class juliemrObjects {

    public static jmrurl:string = "https://juliemr.github.io/protractor-demo/";

    public static firstTextBox:ElementFinder = element(by.model('first'));

    public static secondTextBox:ElementFinder = element(by.model('second'));

    public static goButton:ElementFinder = element(by.id('gobutton'));

    public static calcValue:ElementFinder = element(by.className('ng-binding'));

    public static operation:ElementFinder = element(by.model('operator'));

    public static history:ElementArrayFinder = element.all(by.repeater('result in memory'));

    public static historyDetails:ElementFinder = element(by.css('td:nth-child(3)'));
}