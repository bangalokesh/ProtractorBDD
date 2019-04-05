"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class juliemrObjects {
}
juliemrObjects.jmrurl = "https://juliemr.github.io/protractor-demo/";
juliemrObjects.firstTextBox = protractor_1.element(protractor_1.by.model('first'));
juliemrObjects.secondTextBox = protractor_1.element(protractor_1.by.model('second'));
juliemrObjects.goButton = protractor_1.element(protractor_1.by.id('gobutton'));
juliemrObjects.calcValue = protractor_1.element(protractor_1.by.className('ng-binding'));
juliemrObjects.operation = protractor_1.element(protractor_1.by.model('operator'));
juliemrObjects.history = protractor_1.element.all(protractor_1.by.repeater('result in memory'));
juliemrObjects.historyDetails = protractor_1.element(protractor_1.by.css('td:nth-child(3)'));
exports.juliemrObjects = juliemrObjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVsaWVtck9iamVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QYWdlcy9QYWdlT2JqZWN0cy9qdWxpZW1yT2JqZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE0RTtBQUU1RSxNQUFhLGNBQWM7O0FBRVQscUJBQU0sR0FBVSw0Q0FBNEMsQ0FBQztBQUU3RCwyQkFBWSxHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUV4RCw0QkFBYSxHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUUxRCx1QkFBUSxHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUVwRCx3QkFBUyxHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUU5RCx3QkFBUyxHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUV4RCxzQkFBTyxHQUFzQixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUUxRSw2QkFBYyxHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0FBaEJwRix3Q0FpQkMifQ==