"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('get all elements', () => {
    //global variables - locators
    var firstTextBox = protractor_1.element(protractor_1.by.model('first'));
    var secondTextBox = protractor_1.element(protractor_1.by.model('second'));
    var goButton = protractor_1.element(protractor_1.by.id('gobutton'));
    var calcValue = protractor_1.element(protractor_1.by.className('ng-binding'));
    var operation = protractor_1.element(protractor_1.by.model('operator'));
    var history = protractor_1.element.all(protractor_1.by.repeater('result in memory'));
    var historyDetails = protractor_1.element(protractor_1.by.css('td:nth-child(3)'));
    var sum = 0;
    var count = 0;
    beforeEach(function () {
        protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
    });
    function add(a, b, op) {
        firstTextBox.sendKeys(a);
        secondTextBox.sendKeys(b);
        operation.sendKeys(op);
        goButton.click();
        count = count++;
    }
    function calc(a, b, op) {
        firstTextBox.sendKeys(a);
        secondTextBox.sendKeys(b);
        protractor_1.element.all(protractor_1.By.tagName('option')).each(function (item) {
            item.getAttribute('value').then(function (values) {
                if (values == op) {
                    item.click();
                    count = count++;
                }
            });
        });
    }
    it('check all values', () => __awaiter(this, void 0, void 0, function* () {
        yield calc(2, 3, 'DIVISION');
        yield add(2, 3, '+');
        yield add(3, 4, '+');
        yield add(4, 5, '*');
        sum = 0;
        expect(history.count()).toEqual(count);
        history.each((item) => {
            item.element(protractor_1.by.css('td:nth-child(3)')).getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                sum = sum + Number(text);
                console.log(sum);
            }));
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdFNwZWMxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdGVzdFNwZWMxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSwyQ0FBb0Q7QUFHcEQsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEdBQUUsRUFBRTtJQUM3Qiw2QkFBNkI7SUFDN0IsSUFBSSxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDOUMsSUFBSSxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDaEQsSUFBSSxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsSUFBSSxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDcEQsSUFBSSxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsSUFBSSxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDM0QsSUFBSSxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUN4RCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFFZCxVQUFVLENBQUM7UUFDUixvQkFBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0lBQzlELENBQUMsQ0FBQyxDQUFDO0lBRUgsU0FBUyxHQUFHLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2xCLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixLQUFLLEdBQUcsS0FBSyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQixZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDaEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxNQUFNO2dCQUMzQyxJQUFHLE1BQU0sSUFBSSxFQUFFLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNiLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQztpQkFDbkI7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVELEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxHQUFPLEVBQUU7UUFDNUIsTUFBTSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM3QixNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckIsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRVIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBTSxJQUFJLEVBQUUsRUFBRTtnQkFDaEUsR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDIn0=