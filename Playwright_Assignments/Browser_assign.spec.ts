import test, { chromium, webkit } from '@playwright/test'

// Launchning Redbus in Edge Browser 

test("Launch a browser", async()  => {

const browser = await chromium.launch({channel:"msedge", headless: false})
const context = await browser.newContext()
const page = await context.newPage()

await page.goto("https://www.redbus.in/")

const title1 = await page.title()
const url1 = page.url()

console.log("Redbus - Edge browser")
console.log("Title : "+title1)
console.log("URL : "+url1)


/// Launching Filpkart in Webkit Browser

const browser2 = await webkit.launch({headless: false})
const context2 = await browser2.newContext()
const page2 = await context2.newPage()

await page2.goto("https://www.flipkart.com/")

const title2 =  await page2.title()
const url2 =  page2.url()

console.log("Filpkart - Webkit Browser")
console.log("Title : "+title2)
console.log("URL : "+url2)
}
)

