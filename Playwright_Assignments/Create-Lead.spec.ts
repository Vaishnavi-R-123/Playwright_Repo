
// Home Assignment - Week 3 / Day 1

import test from "@playwright/test"

test("createLead", async({page}) => {

await page.goto("http://leaftaps.com/opentaps/control/main")     // Navigate to the URL

await page.locator("#username").fill("Demosalesmanager")         // Enter Username
await page.locator("#password").fill("crmsfa")                   // Enter Password
await page.locator(".decorativeSubmit").click()                  // Click Login Button

await page.locator(`text='CRM/SFA'`).click()                     // Click CRM/SFA Link

await page.locator(`text='Leads'`).click()                       // Click Leads Tab

await page.locator(`text='Create Lead'`).click()                 // Click Create Lead Option

await page.locator("#createLeadForm_companyName").fill("TestLeaf")   // Enter Company Name
await page.locator("#createLeadForm_firstName").fill("Vaishnavi")    // Enter First Name
await page.locator("#createLeadForm_lastName").fill("R")             // Enter Last Name
await page.locator("#createLeadForm_personalTitle").fill("Ms")       // Enter Salutation
await page.locator("#createLeadForm_generalProfTitle").fill("Tester") // Enter Title
await page.locator("#createLeadForm_annualRevenue").fill("100000")    // Enter Annual Revenue
await page.locator("#createLeadForm_departmentName").fill("QA")       // Enter Department
await page.locator("#createLeadForm_primaryPhoneNumber").fill("9080706030")   // Enter Phone Number

await page.locator(".smallSubmit").click()                        // Click Create Lead Button

await page.waitForTimeout(5000)

})