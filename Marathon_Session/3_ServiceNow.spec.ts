// ServiceNow Application - Marathon Session 3

import test,{expect} from '@playwright/test'

test("ServiceNow Application", async({page})=>{

await page.goto("https://dev363522.service-now.com/")
await page.locator("//input[@id='user_name']").fill("admin")
await page.locator("//input[@id='user_password']").fill("mf=3hp^0UJMZ")
await page.locator("//button[text()='Log in']").click()

// Verifying the Page title
const Page1 = await page.title()
console.log("Page Title is: " + Page1)
expect(Page1).toBe("ServiceNow")

// Clicking on the "ALL" menu and then on "Service Catalog"
await page.getByRole('menuitem', { name: 'All' }).click()
await page.getByText('Service Catalog').click()

//handling iframe
const frame = page.frameLocator('#gsft_main')

// Select Mobiles option from the Service Catalog
await frame.getByAltText('Mobiles').click()

// Click on Apple iPhone 13 pro
await frame.getByRole('link', { name: 'Apple iPhone 13 pro' }).click();

// Filling the details
await frame.locator("//label[text()='Yes']").click()
await frame.locator("input[class='cat_item_option sc-content-pad form-control']").fill("9905432450")
await frame.getByRole('combobox', { name: 'Monthly data allowance' }).selectOption({ label: 'Unlimited [add $4.00]' })
await frame.locator("//label[text()='Sierra Blue']").click()
await frame.locator("//label[text()='512 GB [add $300.00]']").click()

// Click on Order Now button
await frame.getByTitle('Order Now').click()

// Verifying the order confirmation message
const order = await frame.locator("//div[@class='notification notification-success']").innerText()
console.log("Order Confirmation: " + order)
expect(order).toContain("Thank you, your request has been submitted")

// Full page screenshot
await page.screenshot({ path: 'Screenshots/ServiceNow.png', fullPage: true})

})

