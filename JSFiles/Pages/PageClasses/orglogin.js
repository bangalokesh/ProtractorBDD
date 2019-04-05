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
const orgloginObjects_1 = require("../PageObjects/orgloginObjects");
const log4jconfig_1 = require("../../log4jconfig");
const logger = require('node-file-logger');
logger.SetUserOptions(log4jconfig_1.options);
class orglogin {
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (orgloginObjects_1.orgloginObjects.userName.isDisplayed()) {
                    yield orgloginObjects_1.orgloginObjects.userName.sendKeys("lbanga@deloitte.com");
                    yield orgloginObjects_1.orgloginObjects.password.sendKeys("Corp5%User");
                    yield orgloginObjects_1.orgloginObjects.isDeloitteLaptop.click();
                    yield orgloginObjects_1.orgloginObjects.isDeloitteSubmit.click();
                }
            }
            catch (Exception) {
                logger.Fatal(Exception);
            }
        });
    }
}
exports.orglogin = orglogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnbG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QYWdlcy9QYWdlQ2xhc3Nlcy9vcmdsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsb0VBQWlFO0FBQ2pFLG1EQUEwQztBQUMxQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMzQyxNQUFNLENBQUMsY0FBYyxDQUFDLHFCQUFPLENBQUMsQ0FBQztBQUUvQixNQUFhLFFBQVE7SUFFWCxLQUFLOztZQUNQLElBQUc7Z0JBQ0MsSUFBRyxpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBQztvQkFDdEMsTUFBTSxpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQztvQkFDL0QsTUFBTSxpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3RELE1BQU0saUNBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDL0MsTUFBTSxpQ0FBZSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNsRDthQUNKO1lBQUEsT0FBTSxTQUFTLEVBQUM7Z0JBQ2IsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMzQjtRQUNMLENBQUM7S0FBQTtDQUVKO0FBZkQsNEJBZUMifQ==