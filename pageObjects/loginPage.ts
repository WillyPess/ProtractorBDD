import { ElementFinder, element, by } from "protractor";

export class loginPage{
    
    email : ElementFinder;
    pass : ElementFinder;
    singIn : ElementFinder;

    constructor(){
        this.email = element(by.id("email"));
        this.pass = element(by.id("password"));
        this.singIn = element(by.tagName("button"));
    }
}