import {After, Before} from "cucumber";
import { browser } from "protractor";

Before(function(){
    browser.manage().window().maximize();
});

After(function(){

});