"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const loginPage_1 = require("../pageObjects/loginPage");
const sideMenuPage_1 = require("../pageObjects/sideMenuPage");
const usersPage_1 = require("../pageObjects/usersPage");
let login = new loginPage_1.loginPage();
let sideMenu = new sideMenuPage_1.sideMenuPage();
let usuarios = new usersPage_1.usersPage();
cucumber_1.When('I click in delete User', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.findElement(protractor_1.by.css('button.MuiButtonBase-root:nth-child(2)')).click();
}));
cucumber_1.Then('The user must be deleted.', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.sleep(1000);
    yield protractor_1.browser.driver.findElement(protractor_1.by.css('button.MuiButton-root:nth-child(2)')).click();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHNEZWxldGVVc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluYXRpb25zL3N0ZXBzRGVsZXRlVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUEyQztBQUMzQywyQ0FBeUM7QUFFekMsd0RBQXFEO0FBQ3JELDhEQUEyRDtBQUMzRCx3REFBcUQ7QUFFckQsSUFBSSxLQUFLLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFDNUIsSUFBSSxRQUFRLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7QUFDbEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFHL0IsZUFBSSxDQUFDLHdCQUF3QixFQUFFLEdBQVMsRUFBRTtJQUN0QyxNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUU3RixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDJCQUEyQixFQUFFLEdBQVEsRUFBRTtJQUMxQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUd6RixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=