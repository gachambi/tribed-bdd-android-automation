const {Then} = require("cucumber")
const previewPage = require("../../pageobjects/create-profile/previewPage")

Then(/the changes should be reflected on preview/, ()=>{
    previewPage.checkIfNameIsEdited()
})