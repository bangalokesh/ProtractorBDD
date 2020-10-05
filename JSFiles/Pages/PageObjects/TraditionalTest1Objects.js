"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class TraditionalTest1Objects {
}
TraditionalTest1Objects.test1url = "https://demo.applitools.com/gridHackathonV1.html";
TraditionalTest1Objects.test1url2 = "https://demo.applitools.com/gridHackathonV2.html";
TraditionalTest1Objects.searchField = protractor_1.element(protractor_1.by.id("INPUTtext____42"));
TraditionalTest1Objects.searchIcon = protractor_1.element(protractor_1.by.id("I__headericon__44"));
TraditionalTest1Objects.filterLabels = protractor_1.element.all(protractor_1.by.xpath("//div[@id='filter_1']/ul/li"));
TraditionalTest1Objects.filterButton = protractor_1.element(protractor_1.by.xpath("//button[@id='filterBtn']"));
TraditionalTest1Objects.product = protractor_1.element.all(protractor_1.by.xpath("//div[@id='product_grid']/div"));
TraditionalTest1Objects.product1 = protractor_1.element.all(protractor_1.by.xpath("//div[@id='product_grid']/div[1]"));
TraditionalTest1Objects.filterCheckboxBlack = protractor_1.element(protractor_1.by.xpath("//span[@id='SPAN__checkmark__107']"));
TraditionalTest1Objects.filterValueBlack = protractor_1.element(protractor_1.by.xpath("//label[contains(text(),'Black')]/small"));
TraditionalTest1Objects.shoeName = protractor_1.element(protractor_1.by.id("shoe_name"));
exports.TraditionalTest1Objects = TraditionalTest1Objects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhZGl0aW9uYWxUZXN0MU9iamVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QYWdlcy9QYWdlT2JqZWN0cy9UcmFkaXRpb25hbFRlc3QxT2JqZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE0RTtBQUc1RSxNQUFhLHVCQUF1Qjs7QUFFbEIsZ0NBQVEsR0FBVSxrREFBa0QsQ0FBQztBQUVyRSxpQ0FBUyxHQUFVLGtEQUFrRCxDQUFDO0FBRXRFLG1DQUFXLEdBQWlCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7QUFFOUQsa0NBQVUsR0FBaUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztBQUUvRCxvQ0FBWSxHQUFzQixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztBQUV2RixvQ0FBWSxHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO0FBRTVFLCtCQUFPLEdBQXNCLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO0FBRXBGLGdDQUFRLEdBQXNCLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO0FBRXhGLDJDQUFtQixHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO0FBRTVGLHdDQUFnQixHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQyxDQUFDO0FBRTlGLGdDQUFRLEdBQWlCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBdEJ2RSwwREF5QkMifQ==