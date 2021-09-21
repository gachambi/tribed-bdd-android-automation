const landingPage = require("../pageobjects/landingPage")

const loginDefaultUser = () =>{
    landingPage.skipBTN.waitForDisplayed({timeout:3000})
    landingPage.skipBTN.click()
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
}

module.exports = {loginDefaultUser}