import {Given, When, Then} from "cucumber";
import { browser, by, element, Key } from "protractor";
import chai, { expect } from "chai";
import { loginPage } from "../pageObjects/loginPage";
import { sideMenuPage } from "../pageObjects/sideMenuPage";
import { usersPage } from "../pageObjects/usersPage";

let login = new loginPage();
let sideMenu = new sideMenuPage();
let usuarios = new usersPage(); 

Given('Search by {string} user', async(string) => {
    await usuarios.searchInput.clear().then(async () => {
        usuarios.searchInput.sendKeys(string);
        browser.sleep(3000);
    });
  });

  When('I click in Edit User', async () => {
    await browser.driver.findElement(by.css('.MuiTableCell-paddingNone > div:nth-child(1) > button:nth-child(1)')).click();
  });

  When('I change name field  to {string} and click in Save', async (string) => {
    browser.sleep(3000);    
    await browser.driver.findElement(by.name('name')).sendKeys(Key.chord(Key.CONTROL, 'a'));
    await browser.driver.findElement(by.name('name')).sendKeys(Key.DELETE);
    await browser.driver.findElement(by.name('name')).clear().then(async() =>{
        await browser.driver.findElement(by.name('name')).sendKeys(string).then(async () =>{
            await browser.driver.findElement(by.name('password')).sendKeys('1234').then(async () =>{
                await browser.driver.findElement(by.css('.MuiButton-text')).click();        
            });
        });
    }); 
  });

  Then('The user must have name edited to {string}.', async (string) => {    
    await usuarios.searchInput.sendKeys(string).then(async () =>{
        
        browser.driver.findElement(by.css('td.MuiTableCell-alignLeft:nth-child(1)')).isDisplayed().then(async (isDisplayed) =>{
          expect(isDisplayed).be.true;
        });              
      });
  });