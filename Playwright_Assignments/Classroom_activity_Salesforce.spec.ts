// Classroom Activity: Salesforce Application

import test, { expect } from '@playwright/test'

test("Salesforce Application", async ({ page }) => {

await page.goto("https://login.salesforce.com")

await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com ")
await page.locator("//input[@id='password']").fill("TestLeaf@2025")

await page.locator("//input[@id='Login']").click()


await page.locator("//div[@class='slds-icon-waffle']").click()
await page.waitForTimeout(3000)

await page.getByRole('button', {name: 'View All Applications'}).click()

await page.getByPlaceholder("Search apps or items...").fill("Opportunities")

await page.locator("//p[@class='slds-truncate']").click()

await expect(page.locator("//h1[text()='Opportunities']")).toBeVisible()
await page.waitForTimeout(3000)

await page.getByRole('button', {name: 'New'}).click()

await page.getByRole('textbox',{name:'Opportunity Name'}).fill("Vaishnavi")

await page.getByPlaceholder("Search Accounts...").click()
await page.waitForTimeout(3000)
await page.locator("(//span[@class='slds-listbox__option-text slds-listbox__option-text_entity']/span)[1]").click()


await page.locator("//div[@class='slds-form-element__control slds-input-has-icon slds-input-has-icon_right']/input").click()
await page.getByRole('button', {name: 'Today'}).click()

await page.locator("(//button[@class='slds-combobox__input slds-input_faux fix-slds-input_faux slds-combobox__input-value'])[1]").click()
await page.getByRole('option', {name: 'Needs Analysis'}).click()

await page.locator("//button[@name='SaveEdit']").click()

await expect(page.locator("//lightning-formatted-text[text()='Vaishnavi']")).toBeVisible()
console.log("Opportunity created successfully")

})

