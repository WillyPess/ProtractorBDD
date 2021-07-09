import {Given, When, Then} from "cucumber";
import { browser, by } from "protractor";
import chai, { expect } from "chai";
import { loginPage } from "../pageObjects/loginPage";
import { sideMenuPage } from "../pageObjects/sideMenuPage";
import { usersPage } from "../pageObjects/usersPage";

let login = new loginPage();
let sideMenu = new sideMenuPage();
let usuarios = new usersPage(); 


When('I click in delete User', async () => {
    await browser.driver.findElement(by.css('button.MuiButtonBase-root:nth-child(2)')).click();
    
  });

  Then('The user must be deleted.', async() =>{
    browser.sleep(1000);
    await browser.driver.findElement(by.css('button.MuiButton-root:nth-child(2)')).click();
    
    
  });