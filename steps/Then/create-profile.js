const { Then } = require('cucumber');
const myFilesAndLinks = require('../../pageobjects/create-profile/myFilesAndLinks');

Then(/they can create a profile/, ()=>{
  myFilesAndLinks.previewBTN.click();
  driver.touchPerform([
    { action: "press", options: { x: 500, y: 1280 } },
    { action: "wait", options: { ms: 1000 } },
    { action: "moveTo", options: { x: 500, y: 347 } },
    { action: "release" },
  ]);
})