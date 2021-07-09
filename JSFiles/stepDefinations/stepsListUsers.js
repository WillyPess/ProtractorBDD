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
cucumber_1.Then('The a list with users must be shown.', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.sleep(3000);
    yield usuarios.searchInput.sendKeys('Teste leitura').then(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.driver.findElement(protractor_1.by.css('td.MuiTableCell-alignLeft:nth-child(1)')).isDisplayed().then((isDisplayed) => __awaiter(void 0, void 0, void 0, function* () {
            chai_1.expect(isDisplayed).be.true;
        }));
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHNMaXN0VXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHNMaXN0VXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBMkM7QUFDM0MsMkNBQXlDO0FBQ3pDLCtCQUFvQztBQUNwQyx3REFBcUQ7QUFDckQsOERBQTJEO0FBQzNELHdEQUFxRDtBQUVyRCxJQUFJLEtBQUssR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUM1QixJQUFJLFFBQVEsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztBQUNsQyxJQUFJLFFBQVEsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUcvQixlQUFJLENBQUMsc0NBQXNDLEVBQUUsR0FBUyxFQUFFO0lBQ3BELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLE1BQU0sUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVMsRUFBRTtRQUNuRSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQU8sV0FBVyxFQUFFLEVBQUU7WUFDcEgsYUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=