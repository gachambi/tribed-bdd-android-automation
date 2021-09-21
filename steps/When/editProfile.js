const {When} = require("cucumber")
const myNamePage = require("../../pageobjects/create-profile/myNamePage")
const previewPage = require("../../pageobjects/create-profile/previewPage")

When(/the user edits any of the details/, ()=>{
    //change name
    previewPage.editIcon.click()
    myNamePage.firstNameForm.setValue(data.fname)
    myNamePage.lastNameForm.setValue(data.lname)
    myNamePage.updateChangesBTN.click()
})