import { browser, ElementFinder, element, by } from 'protractor';

export class apiservicetestObjects{

    public static weatherservice:string = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8798416990564baefe42a06f33ec8515";
    //d1d0c1d852f1f1a29c6e87ba5e22fb9b
    public static postservicejson:object = {"name": "lokesh", "id": 34};
   
    public static postserviceurl:string = "https://jsonplaceholder.typicode.com/posts";

}