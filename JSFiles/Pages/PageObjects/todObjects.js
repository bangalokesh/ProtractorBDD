"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class todObjects {
}
todObjects.url = "https://talentondemand.deloittenet.deloitte.com/#!/";
todObjects.enterDeloitteNet = protractor_1.element(protractor_1.by.xpath('//*[starts-with(@id,"ContentPlaceHolder"]'));
todObjects.loginEmail = protractor_1.element(protractor_1.by.name('loginfmt'));
todObjects.loginEmailNext = protractor_1.element(protractor_1.by.id('idSIButton9'));
todObjects.pinEdit = protractor_1.element(protractor_1.by.xpath('//*[@id="main_txtPIN"]'));
todObjects.pinButton = protractor_1.element(protractor_1.by.xpath('//*[@id="cmdContinue"]'));
todObjects.ptoText = protractor_1.element(protractor_1.by.xpath('//*[@id="ptoChart"]/svg/g/text[4]'));
todObjects.wellBeing = protractor_1.element.all(protractor_1.by.repeater('cardUser in vm.cards'));
todObjects.wellBeingSubsidy = protractor_1.element(protractor_1.by.xpath('//div[@class="ng-transclude"]'));
exports.todObjects = todObjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kT2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1BhZ2VzL1BhZ2VPYmplY3RzL3RvZE9iamVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBNEU7QUFFNUUsTUFBYSxVQUFVOztBQUVMLGNBQUcsR0FBVSxxREFBcUQsQ0FBQztBQUVuRSwyQkFBZ0IsR0FBaUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsQ0FBQztBQUVoRyxxQkFBVSxHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUV4RCx5QkFBYyxHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUU3RCxrQkFBTyxHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0FBRXBFLG9CQUFTLEdBQWlCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7QUFFdEUsa0JBQU8sR0FBaUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztBQUUvRSxvQkFBUyxHQUFzQixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztBQUVoRiwyQkFBZ0IsR0FBaUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztBQWxCdEcsZ0NBb0JDIn0=