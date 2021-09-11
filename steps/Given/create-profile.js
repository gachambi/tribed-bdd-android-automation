const { Given } = require('cucumber');
const data = require('../../data/creds');
const myNamePage = require('../../pageobjects/create-profile/myNamePage');
const landingPage = require('../../pageobjects/landingPage');
const loginPage = require('../../pageobjects/loginPage');
const registerPage = require('../../pageobjects/registerPage');

Given(/user has not created a profile/,()=>{
    driver.pause(12000);
    if (landingPage.skipBTN.isExisting()) {
      landingPage.skipBTN.click();
    }

    // go to login page
    driver.touchPerform([
      { action: "press", options: { x: 500, y: 1280 } },
      { action: "wait", options: { ms: 1000 } },
      { action: "moveTo", options: { x: 500, y: 347 } },
      { action: "release" },
    ]);
    driver.pause(3000);
    registerPage.loginOptBTN.click();
    //login
    loginPage.emailForm.setValue(data.UserEmail);
    loginPage.passwordForm.setValue(data.Password);
    loginPage.findMyTribeBTN.click();
    driver.pause(12000);
    myNamePage.checkpage()

})
