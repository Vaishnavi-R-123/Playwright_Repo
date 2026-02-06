// Classroom Activity: Salesforce Application

import test, { expect } from '@playwright/test'

test("Salesforce Application", async ({ page }) => {

await page.goto("https://login.salesforce.com")           // Navigate to the URL

await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com ") // Enter Username
await page.locator("//input[@id='password']").fill("TestLeaf@2025") // Enter Password

await page.locator("//input[@id='Login']").click()   // Click Login Button


await page.locator("//div[@class='slds-icon-waffle']").click()  // Click App Launcher
await page.waitForTimeout(3000)

await page.getByRole('button', {name: 'View All Applications'}).click()   // Click View All Button

await page.getByPlaceholder("Search apps or items...").fill("Opportunities")  // Search for Opportunities

await page.locator("//p[@class='slds-truncate']").click() // Click Opportunities Link

await expect(page.locator("//h1[text()='Opportunities']")).toBeVisible()   // Verify Opportunities Page is displayed
await page.waitForTimeout(3000)

await page.getByRole('button', {name: 'New'}).click()   // Click New Button

await page.getByRole('textbox',{name:'Opportunity Name'}).fill("Vaishnavi")   // Enter Opportunity Name

await page.getByPlaceholder("Search Accounts...").click()   // Click Search Accounts
await page.waitForTimeout(3000)
await page.locator("(//span[@class='slds-listbox__option-text slds-listbox__option-text_entity']/span)[1]").click()  // Select the option from the dropdown


await page.locator("//div[@class='slds-form-element__control slds-input-has-icon slds-input-has-icon_right']/input").click() // Click Close Date
await page.getByRole('button', {name: 'Today'}).click()   // Click Today Button

await page.locator("(//button[@class='slds-combobox__input slds-input_faux fix-slds-input_faux slds-combobox__input-value'])[1]").click()   // Click Stage Dropdown
await page.getByRole('option', {name: 'Needs Analysis'}).click()   // Select Needs Analysis Option

await page.locator("//button[@name='SaveEdit']").click()  // Click Save Button

await expect(page.locator("//lightning-formatted-text[text()='Vaishnavi']")).toBeVisible()   // Verify Opportunity is created successfully
console.log("Opportunity created successfully")

})

