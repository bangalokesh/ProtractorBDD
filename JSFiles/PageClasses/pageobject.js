"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class pageobject {
}
pageobject.mydneturl = "https://my.dnet.deloitte.com/";
pageobject.deloitteNetNow = protractor_1.element(protractor_1.by.id('btnOk'));
pageobject.searchbar = protractor_1.element(protractor_1.by.css('[id=DCH_SearchInput]'));
pageobject.searchresults = protractor_1.element.all(protractor_1.by.repeater('category in resultItems'));
exports.pageobject = pageobject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZW9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VDbGFzc2VzL3BhZ2VvYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBNkM7QUFFN0MsTUFBYSxVQUFVOztBQUNMLG9CQUFTLEdBQUcsK0JBQStCLENBQUM7QUFDNUMseUJBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN6QyxvQkFBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7QUFDcEQsd0JBQWEsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztBQUp0RixnQ0FLQyJ9