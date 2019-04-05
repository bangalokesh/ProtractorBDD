"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class homepageObjects {
}
homepageObjects.mydneturl = "https://my.dnet.deloitte.com/";
homepageObjects.deloitteNetNow = protractor_1.element(protractor_1.by.id('btnOk'));
homepageObjects.searchbar = protractor_1.element(protractor_1.by.css('[id=DCH_SearchInput]'));
homepageObjects.searchresults = protractor_1.element.all(protractor_1.by.repeater('category in resultItems'));
homepageObjects.userName = protractor_1.element(protractor_1.by.id('userNameInput'));
homepageObjects.password = protractor_1.element(protractor_1.by.id('passwordInput'));
homepageObjects.isDeloitteLaptop = protractor_1.element(protractor_1.by.name('isLaptop'));
homepageObjects.isDeloitteSubmit = protractor_1.element(protractor_1.by.id('submitButton'));
exports.homepageObjects = homepageObjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2VPYmplY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vUGFnZXMvUGFnZU9iamVjdHMvaG9tZXBhZ2VPYmplY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWdGO0FBRWhGLE1BQWEsZUFBZTs7QUFDVix5QkFBUyxHQUFVLCtCQUErQixDQUFDO0FBQ25ELDhCQUFjLEdBQWlCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELHlCQUFTLEdBQWlCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7QUFDbEUsNkJBQWEsR0FBc0Isb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7QUFDdkYsd0JBQVEsR0FBaUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFDekQsd0JBQVEsR0FBZ0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFDeEQsZ0NBQWdCLEdBQWlCLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQzlELGdDQUFnQixHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQVJsRiwwQ0FTQyJ9