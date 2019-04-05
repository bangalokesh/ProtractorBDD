"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class homepageObjects {
}
homepageObjects.mydneturl = "https://my.dnet.deloitte.com/";
homepageObjects.deloitteNetNow = protractor_1.element(protractor_1.by.id('btnOk'));
homepageObjects.searchbar = protractor_1.element(protractor_1.by.css('[id=DCH_SearchInput]'));
homepageObjects.searchresults = protractor_1.element.all(protractor_1.by.repeater('category in resultItems'));
exports.homepageObjects = homepageObjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2VPYmplY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZUNsYXNzZXMvaG9tZXBhZ2VPYmplY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTZDO0FBRTdDLE1BQWEsZUFBZTs7QUFDVix5QkFBUyxHQUFHLCtCQUErQixDQUFDO0FBQzVDLDhCQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDekMseUJBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0FBQ3BELDZCQUFhLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7QUFKdEYsMENBS0MifQ==