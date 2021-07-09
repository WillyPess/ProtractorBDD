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
const chai_1 = require("chai");
const loginPage_1 = require("../pageObjects/loginPage");
const sideMenuPage_1 = require("../pageObjects/sideMenuPage");
const usersPage_1 = require("../pageObjects/usersPage");
let login = new loginPage_1.loginPage();
let sideMenu = new sideMenuPage_1.sideMenuPage();
let usuarios = new usersPage_1.usersPage();
cucumber_1.Given('Search by {string} user', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield usuarios.searchInput.clear().then(() => __awaiter(void 0, void 0, void 0, function* () {
        usuarios.searchInput.sendKeys(string);
        protractor_1.browser.sleep(3000);
    }));
}));
cucumber_1.When('I click in Edit User', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.findElement(protractor_1.by.css('.MuiTableCell-paddingNone > div:nth-child(1) > button:nth-child(1)')).click();
}));
cucumber_1.When('I change name field  to {string} and click in Save', (string) => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.sleep(3000);
    yield protractor_1.browser.driver.findElement(protractor_1.by.name('name')).sendKeys(protractor_1.Key.chord(protractor_1.Key.CONTROL, 'a'));
    yield protractor_1.browser.driver.findElement(protractor_1.by.name('name')).sendKeys(protractor_1.Key.DELETE);
    yield protractor_1.browser.driver.findElement(protractor_1.by.name('name')).clear().then(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.driver.findElement(protractor_1.by.name('name')).sendKeys(string).then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield protractor_1.browser.driver.findElement(protractor_1.by.name('password')).sendKeys('1234').then(() => __awaiter(void 0, void 0, void 0, function* () {
                yield protractor_1.browser.driver.findElement(protractor_1.by.css('.MuiButton-text')).click();
                protractor_1.browser.sleep(3000);
            }));
        }));
    }));
}));
cucumber_1.Then('The user must have name edited to {string}.', (string) => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.sleep(3000);
    yield usuarios.searchInput.sendKeys(string).then(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.driver.findElement(protractor_1.by.css('.MuiTableCell-paddingNone > div:nth-child(1) > button:nth-child(1)')).isDisplayed().then((isDisplayed) => __awaiter(void 0, void 0, void 0, function* () {
            chai_1.expect(isDisplayed).be.true;
        }));
        //chai_1.expect(string).be.true;
        //browser.driver.findElement(by.css('td.MuiTableCell-alignLeft:nth-child(1)')).isDisplayed().then(async (isDisplayed) =>{
        //  expect(isDisplayed).be.true;
        //});              
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHNFZGl0VXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9ucy9zdGVwc0VkaXRVc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTJDO0FBQzNDLDJDQUF1RDtBQUN2RCwrQkFBb0M7QUFDcEMsd0RBQXFEO0FBQ3JELDhEQUEyRDtBQUMzRCx3REFBcUQ7QUFFckQsSUFBSSxLQUFLLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFDNUIsSUFBSSxRQUFRLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7QUFDbEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFFL0IsZ0JBQUssQ0FBQyx5QkFBeUIsRUFBRSxDQUFNLE1BQU0sRUFBRSxFQUFFO0lBQzdDLE1BQU0sUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBUyxFQUFFO1FBQy9DLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHNCQUFzQixFQUFFLEdBQVMsRUFBRTtJQUN0QyxNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9FQUFvRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN6SCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLG9EQUFvRCxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDMUUsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBRyxDQUFDLEtBQUssQ0FBQyxnQkFBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZ0JBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2RSxNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQVEsRUFBRTtRQUNyRSxNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFTLEVBQUU7WUFDL0UsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBUyxFQUFFO2dCQUNuRixNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN4RSxDQUFDLENBQUEsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDZDQUE2QyxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDbkUsTUFBTSxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBUyxFQUFFO1FBQ3hELGFBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ3JCLHlIQUF5SDtRQUN6SCxnQ0FBZ0M7UUFDaEMsbUJBQW1CO0lBQ3JCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=