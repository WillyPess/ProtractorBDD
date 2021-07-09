import {Given, When, Then} from "cucumber";
import { browser, by } from "protractor";
import chai, { expect } from "chai";
import { loginPage } from "../pageObjects/loginPage";
import { sideMenuPage } from "../pageObjects/sideMenuPage";
import { usersPage } from "../pageObjects/usersPage";

let login = new loginPage();
let sideMenu = new sideMenuPage();
let usuarios = new usersPage(); 


Then('The a list with users must be shown.', async () => {
    browser.sleep(3000);
    await usuarios.searchInput.sendKeys('Teste leitura').then(async () =>{
      browser.driver.findElement(by.css('td.MuiTableCell-alignLeft:nth-child(1)')).isDisplayed().then(async (isDisplayed) =>{
        expect(isDisplayed).be.true;
      });
            
    });
  });
