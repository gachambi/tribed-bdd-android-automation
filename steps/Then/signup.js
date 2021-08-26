const {Then} =require('cucumber')
const data = require('../../data/creds')
const landingPage = require('../../pageobjects/landingPage')
const registerPage = require('../../pageobjects/registerPage')

Then(/user attempts to signup/, ()=>{
    landingPage.skipBTN.click()
    registerPage.firstNameInput.setValue(data.fname)
    registerPage.lastNameInput.setValue(data.lname)
    registerPage.emailInput.setValue(data.UserEmail)
    registerPage.passwordInput.setValue(data.Password)
    registerPage.findMyTribeBTN.click()
    driver.pause(5000)
})