// Search product, apply filters, add to cart in Decathlon

import test,{expect} from '@playwright/test'

test("Search Product_Decathlon",async({page})=>{

// Launch browser & Navigating to the URL
await page.goto("https://www.decathlon.in/")

// Verifying the Page title
const Pagetitle1 = await page.title()
console.log("Page Title is: " + Pagetitle1)

// Click on the Search icon on the home page
await page.locator("//div[@class='bg-grey-50 rounded-full']//span").first().click()

//Verify the search input field is visible & enabled
const searchBox = page.getByRole('textbox')
await expect(searchBox).toBeVisible()
await expect(searchBox).toBeEnabled()

// Enter the product name as "shoes" in the search field
await searchBox.fill("Shoes")

// Press Enter to search the product
await searchBox.press('Enter')

// Capture & print page title & Verify the page title is displayed as "Search | shoes"
await expect(page).toHaveTitle("Search | Shoes")
const Heading = await page.title()
console.log("Page title:" + Heading)

// Click on the "Running" category filter
await page.locator("//span[contains(text(),'Runn')]").click()
await page.waitForTimeout(2000)

// Click on the "Men" gender filter
await page.locator("//li[@class='flex items-center cursor-pointer']/span").first().click()
await page.waitForTimeout(2000)

//Click on the shoe size filter "UK 10.5"
await page.locator("//span[contains(text(),'Uk 10.5')]").click()
await page.waitForTimeout(2000)

// Click on the Sort option
await page.locator("//span[text()='Most Relevant']").click()

// Select the sorting option "Price: Low to High"
await page.locator("//a[text()='Price: Low to High']").click()
await page.waitForTimeout(3000)

// Click on the first product from the displayed product list
await page.locator("//div[@class='bg-grey-50']/img").first().click()

const pageTitle = await page.title()
console.log(pageTitle)

// Select the shoe size "UK 10.5 - EU 45" on the product detail page
await page.locator("//div[text()='UK 10.5 - EU 45']").click()

// Click on the "Add to Cart" button
await page.locator("//span[text()='ADD TO CART']").click()

// Verifying the pop-up
const popup = await page.locator("//h3[text()='Product added to cart']").isVisible()
console.log("popup shown successfully" + popup)
await page.waitForTimeout(3000)

// Click on the Cart option
await page.locator("//p[text()='Cart']").click()
await page.waitForTimeout(3000)

// Fetching & Printing the total cart value
const value = await page.locator("//div[@class='flex float-right font-semibold text-2xl']//p").innerText()
console.log("Total Cart Amount: " + value)

})