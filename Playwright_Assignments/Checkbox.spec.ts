// Checkbox Activity

import test,{expect} from '@playwright/test'

test ("checkbox", async({page})=>{

await page.goto("https://leafground.com/checkbox.xhtml")

// Basic Checkbox
await page.locator("//span[text()='Basic']").click()

// Notification checkbox
await page.locator("//span[text()='Ajax']").click()

// To verify the notification text
await expect(page.getByRole('alert')).toHaveText('InformationChecked')
console.log("Notification text is visible")

// Click on your favorite language
await page.locator("//label[text()='Javascript']").click()
await page.locator("//label[text()='Python']").click()
await page.waitForTimeout(3000)

// Click on the "Tri-State Checkbox."
await page.locator("//div[contains(@class,'ui-chkbox-box')]").nth(7).click()

// Click on the "Toggle Switch."
await page.locator("//div[@class='ui-toggleswitch-slider']").click()

//Verify that the expected message is displayed.
await expect(page.getByRole('alert')).toHaveText('InformationChecked')
console.log("Notification text is visible")

//  Verify if the Checkbox is disabled. 
await expect(page.getByLabel("Disabled")).toBeDisabled()
console.log("Checkbox is Disabled")

//  Select multiple options on the page
await page.locator("//ul[@class='ui-selectcheckboxmenu-multiple-container ui-widget ui-inputfield ui-state-default ui-corner-all']").click()
await page.locator("//label[text()='Paris']").nth(1).click()
await page.locator("//label[text()='Rome']").nth(1).click()

})