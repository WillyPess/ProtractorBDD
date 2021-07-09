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
const protractor_1 = require("protractor");
const loginPage_1 = require("./pageObjects/loginPage");
const sideMenuPage_1 = require("./pageObjects/sideMenuPage");
const usersPage_1 = require("./pageObjects/usersPage");
describe('Aura Push test', () => {
    it('Login Aura Push', () => __awaiter(void 0, void 0, void 0, function* () {
        let login = new loginPage_1.loginPage();
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get("https://aurapushui-dev.telefonicabigdata.com/login");
        yield login.email.sendKeys("admin@telefonica.com");
        yield login.pass.sendKeys("@admin");
        yield login.singIn.click();
        yield protractor_1.browser.sleep(3000);
        let sideMenu = new sideMenuPage_1.sideMenuPage();
        yield sideMenu.usuariosMenu.click();
        yield protractor_1.browser.waitForAngular();
        yield protractor_1.browser.sleep(3000);
        let usuarios = new usersPage_1.usersPage();
        yield usuarios.newUserButton.click();
        yield usuarios.getNewUserNameInput().sendKeys('usuario teste');
        yield usuarios.getNewUserEmailInput().sendKeys('mail@mail.com');
        yield usuarios.getNewUserPassInput().sendKeys('1234');
        yield usuarios.getNewUserProfileInput().click();
        yield usuarios.getNewUserProfileOptions().get(0).click();
        yield protractor_1.browser.sleep(3000);
        yield usuarios.getNewUserSaveButton().click();
        yield protractor_1.browser.sleep(3000);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtQztBQUNuQyx1REFBb0Q7QUFDcEQsNkRBQTBEO0FBQzFELHVEQUFvRDtBQUVwRCxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsR0FBRSxFQUFFO0lBRTNCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxHQUFPLEVBQUU7UUFDM0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFFNUIsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1FBRWxFLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNuRCxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksUUFBUSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1FBQ2xDLE1BQU0sUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0IsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLFFBQVEsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUUvQixNQUFNLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckMsTUFBTSxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDL0QsTUFBTSxRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDaEUsTUFBTSxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEQsTUFBTSxRQUFRLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoRCxNQUFNLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6RCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==