"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersPage = void 0;
const protractor_1 = require("protractor");
class usersPage {
    constructor() {
        this.newUserButton = protractor_1.element(protractor_1.by.buttonText('Novo Usuário'));
        this.usersTable = protractor_1.element(protractor_1.by.tagName('table'));
        this.searchInput = protractor_1.element(protractor_1.by.css("input[placeholder*='Search']"));
    }
    getNewUserNameInput() {
        let nameInput;
        if (protractor_1.element(protractor_1.by.css("div[role*='dialog']")).isPresent()) {
            nameInput = protractor_1.element(protractor_1.by.name('name'));
        }
        return nameInput;
    }
    getNewUserEmailInput() {
        let emailInput;
        if (protractor_1.element(protractor_1.by.css("div[role*='dialog']")).isPresent()) {
            emailInput = protractor_1.element(protractor_1.by.name('email'));
        }
        return emailInput;
    }
    getNewUserPassInput() {
        let passInput;
        if (protractor_1.element(protractor_1.by.css("div[role*='dialog']")).isPresent()) {
            passInput = protractor_1.element(protractor_1.by.name('password'));
        }
        return passInput;
    }
    getNewUserProfileInput() {
        let profileInput;
        if (protractor_1.element(protractor_1.by.css("div[role*='dialog']")).isPresent()) {
            profileInput = protractor_1.element(protractor_1.by.id('mui-component-select-profile'));
        }
        return profileInput;
    }
    //Esse elemento só aparece no código após um click no elemento acima
    getNewUserProfileOptions() {
        let profileOptions;
        if (protractor_1.element(protractor_1.by.css("div[role*='dialog']")).isPresent()) {
            profileOptions = protractor_1.element.all(protractor_1.by.css("li[role*='option'"));
        }
        return profileOptions;
    }
    getNewUserSaveButton() {
        let saveButton;
        if (protractor_1.element(protractor_1.by.css("div[role*='dialog']")).isPresent()) {
            saveButton = protractor_1.element(protractor_1.by.cssContainingText('.MuiButton-label', 'SALVAR'));
        }
        return saveButton;
    }
}
exports.usersPage = usersPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnNQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvdXNlcnNQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE0RTtBQUU1RSxNQUFhLFNBQVM7SUFRbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxtQkFBbUI7UUFDZixJQUFJLFNBQXlCLENBQUM7UUFDOUIsSUFBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFDO1lBQ2xELFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN4QztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxvQkFBb0I7UUFDaEIsSUFBSSxVQUEwQixDQUFBO1FBQzlCLElBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQztZQUNsRCxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDMUM7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBRUQsbUJBQW1CO1FBQ2YsSUFBSSxTQUF5QixDQUFDO1FBQzlCLElBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQztZQUNsRCxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDNUM7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQsc0JBQXNCO1FBQ2xCLElBQUksWUFBNEIsQ0FBQztRQUNqQyxJQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUM7WUFDbEQsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7U0FDakU7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRUQsb0VBQW9FO0lBQ3BFLHdCQUF3QjtRQUNwQixJQUFJLGNBQW1DLENBQUM7UUFDeEMsSUFBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFDO1lBQ2xELGNBQWMsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztTQUM3RDtRQUNELE9BQU8sY0FBYyxDQUFDO0lBQzFCLENBQUM7SUFFRCxvQkFBb0I7UUFDaEIsSUFBSSxVQUEwQixDQUFDO1FBQy9CLElBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQztZQUNsRCxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUNoRjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7Q0FFSjtBQS9ERCw4QkErREMifQ==