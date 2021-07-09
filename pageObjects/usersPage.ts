import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class usersPage{

    newUserButton : ElementFinder;
    usersTable : ElementFinder;
    searchInput : ElementFinder;
    


    constructor(){
        this.newUserButton = element(by.buttonText('Novo Usuário'));
        this.usersTable = element(by.tagName('table'));
        this.searchInput = element(by.css("input[placeholder*='Search']"));
    }

    getNewUserNameInput(){
        let nameInput : ElementFinder;
        if(element(by.css("div[role*='dialog']")).isPresent()){
            nameInput = element(by.name('name'));            
        }
        return nameInput;
    }

    getNewUserEmailInput(){
        let emailInput : ElementFinder
        if(element(by.css("div[role*='dialog']")).isPresent()){
            emailInput = element(by.name('email'));
        }
        return emailInput;
    }

    getNewUserPassInput(){
        let passInput : ElementFinder;
        if(element(by.css("div[role*='dialog']")).isPresent()){
            passInput = element(by.name('password'));
        }
        return passInput;
    }

    getNewUserProfileInput(){
        let profileInput : ElementFinder;
        if(element(by.css("div[role*='dialog']")).isPresent()){
            profileInput = element(by.id('mui-component-select-profile'));
        }
        return profileInput;
    }

    //Esse elemento só aparece no código após um click no elemento acima
    getNewUserProfileOptions(){
        let profileOptions : ElementArrayFinder;
        if(element(by.css("div[role*='dialog']")).isPresent()){
            profileOptions = element.all(by.css("li[role*='option'"));
        }
        return profileOptions;
    }

    getNewUserSaveButton(){
        let saveButton : ElementFinder;
        if(element(by.css("div[role*='dialog']")).isPresent()){
            saveButton = element(by.cssContainingText('span.MuiButton-label', 'SALVAR'));
        }
        return saveButton;
    }
    
}