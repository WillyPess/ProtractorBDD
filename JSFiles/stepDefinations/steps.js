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
let helpernovo = require("../../helper/helpernovo")
let login = new loginPage_1.loginPage();
let sideMenu = new sideMenuPage_1.sideMenuPage();
let usuarios = new usersPage_1.usersPage();


cucumber_1.Given('I will navigate to Aura Push page {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.get(string);
}));

cucumber_1.Given('I will login with a {string} user and {string} pass', (string1, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield login.email.sendKeys(string1);
    yield login.pass.sendKeys(string2);
    yield login.singIn.click();
    yield protractor_1.browser.sleep(3000);
}));

cucumber_1.Given('Navigate to User page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield sideMenu.usuariosMenu.click();
    yield protractor_1.browser.waitForAngular();
    yield protractor_1.browser.sleep(5000);
}));

cucumber_1.When('I click in Add User', () => __awaiter(void 0, void 0, void 0, function* () {
    yield usuarios.newUserButton.click();
}));

cucumber_1.When('I fill all fields correctly, select Admin profile and click in Save', () => __awaiter(void 0, void 0, void 0, function* () {
    yield usuarios.getNewUserNameInput().sendKeys('usuario teste');
    yield usuarios.getNewUserEmailInput().sendKeys(helpernovo.gerarNome(5), '@email.com');
    yield usuarios.getNewUserPassInput().sendKeys('1234');
    yield usuarios.getNewUserProfileInput().click();
    yield usuarios.getNewUserProfileOptions().get(0).click();
    yield protractor_1.browser.sleep(3000);
    yield usuarios.getNewUserSaveButton().click();
    yield protractor_1.browser.sleep(6000);
}));

cucumber_1.Then('A new Admin user must be added.', () => __awaiter(void 0, void 0, void 0, function* () {
    yield usuarios.searchInput.sendKeys('usuario teste').then(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.driver.findElement(protractor_1.by.css('td.MuiTableCell-alignLeft:nth-child(1)')).isDisplayed().then((isDisplayed) => __awaiter(void 0, void 0, void 0, function* () {
            chai_1.expect(isDisplayed).be.true;
            yield protractor_1.browser.sleep(6000);
        }));
        //let userName = usuarios.usersTable.element(by.css('td.MuiTableCell-alignLeft:nth-child(1)'));
        //let userMail = usuarios.usersTable.element(by.css('td.MuiTableCell-alignLeft:nth-child(2)'));
        //let userProfile = usuarios.usersTable.element(by.css('td.MuiTableCell-alignLeft:nth-child(3)'));
        //expect(userName).to.contain('usuario teste');
        //expect(userMail).be('mail@mail.com');
        //expect(userProfile).be('Administrador'); 
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBMkM7QUFDM0MsMkNBQXlDO0FBQ3pDLCtCQUFvQztBQUNwQyx3REFBcUQ7QUFDckQsOERBQTJEO0FBQzNELHdEQUFxRDtBQUVyRCxJQUFJLEtBQUssR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUM1QixJQUFJLFFBQVEsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztBQUNsQyxJQUFJLFFBQVEsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUUvQixnQkFBSyxDQUFDLDRDQUE0QyxFQUFFLENBQU0sTUFBTSxFQUFFLEVBQUU7SUFDbEUsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxxREFBcUQsRUFBRSxDQUFNLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUNyRixNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBUSxFQUFFO0lBQ3ZDLE1BQU0sUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDL0IsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHFCQUFxQixFQUFFLEdBQVEsRUFBRTtJQUNwQyxNQUFNLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDdkMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxxRUFBcUUsRUFBRSxHQUFRLEVBQUU7SUFDcEYsTUFBTSxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0QsTUFBTSxRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDaEUsTUFBTSxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEQsTUFBTSxRQUFRLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoRCxNQUFNLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6RCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGlDQUFpQyxFQUFFLEdBQVEsRUFBRTtJQUNoRCxNQUFNLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFTLEVBQUU7UUFDbkUsb0JBQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFPLFdBQVcsRUFBRSxFQUFFO1lBQ3BILGFBQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQzlCLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFDSCwrRkFBK0Y7UUFDL0YsK0ZBQStGO1FBQy9GLGtHQUFrRztRQUVsRywrQ0FBK0M7UUFDL0MsdUNBQXVDO1FBQ3ZDLDJDQUEyQztJQUU3QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9