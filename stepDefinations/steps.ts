import {Given, When, Then} from "cucumber";
import { browser, by } from "protractor";
import chai, { expect } from "chai";
import { loginPage } from "../pageObjects/loginPage";
import { sideMenuPage } from "../pageObjects/sideMenuPage";
import { usersPage } from "../pageObjects/usersPage";

let login = new loginPage();
let sideMenu = new sideMenuPage();
let usuarios = new usersPage();        

Given('I will navigate to Aura Push page {string}', async(string) => {        
  browser.waitForAngularEnabled(false);
  browser.get(string);    
  });

  Given('I will login with a {string} user and {string} pass', async(string1, string2) => {
    await login.email.sendKeys(string1);
    await login.pass.sendKeys(string2);
    await login.singIn.click();
    await browser.sleep(3000);
  });
  
  Given('Navigate to User page', async() => {    
    await sideMenu.usuariosMenu.click();
    await browser.waitForAngular();
    await browser.sleep(3000);
  });

  When('I click in Add User', async() => {
    await usuarios.newUserButton.click();
  });

  When('I fill all fields correctly, select Admin profile and click in Save', async() => {    
    await usuarios.getNewUserNameInput().sendKeys('usuario teste');
    await usuarios.getNewUserEmailInput().sendKeys('mail@mail.com');
    await usuarios.getNewUserPassInput().sendKeys('1234');
    await usuarios.getNewUserProfileInput().click();
    await usuarios.getNewUserProfileOptions().get(0).click();
    await browser.sleep(3000);
    await usuarios.getNewUserSaveButton().click();
    await browser.sleep(3000);
  });

  Then('A new Admin user must be added.', async() => {
    await usuarios.searchInput.sendKeys('usuario teste').then(async () =>{
      browser.driver.findElement(by.css('td.MuiTableCell-alignLeft:nth-child(1)')).isDisplayed().then(async (isDisplayed) =>{
        expect(isDisplayed).be.true;
      });
      //let userName = usuarios.usersTable.element(by.css('td.MuiTableCell-alignLeft:nth-child(1)'));
      //let userMail = usuarios.usersTable.element(by.css('td.MuiTableCell-alignLeft:nth-child(2)'));
      //let userProfile = usuarios.usersTable.element(by.css('td.MuiTableCell-alignLeft:nth-child(3)'));

      //expect(userName).to.contain('usuario teste');
      //expect(userMail).be('mail@mail.com');
      //expect(userProfile).be('Administrador'); 
            
    });
  });