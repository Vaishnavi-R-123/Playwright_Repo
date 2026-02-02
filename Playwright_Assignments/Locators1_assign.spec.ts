
import test from "@playwright/test";

test("testLeaf site", async({page}) => {

await page.goto("https://login.salesforce.com/?locale=in")
const title = await page.title()
const url = page.url()

console.log("Salesforce Login Page")
console.log("Title : "+title)
console.log("URL : "+url)

await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
await page.locator("#password").fill('TestLeaf@2025')
await page.locator("#Login").click()

await page.waitForTimeout(12000)

await page.locator(`text='App Launcher'`).click()
await page.waitForTimeout(3000)
   
})