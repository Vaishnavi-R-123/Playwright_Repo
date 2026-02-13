// Verify dynamic movie ticket booking flow in PVR Cinemas website

import test from '@playwright/test'

test("PVR Booking", async({page})=>{

// Launch the browser & Navigate to URL
await page.goto("https://www.pvrcinemas.com/")

// Select the required location
await page.getByPlaceholder("Search for city").fill("Chennai")
await page.getByRole('option',{name:"Chennai"}).click()
await page.waitForTimeout(3000)

// Click on the Cinema option
await page.locator("//span[text()='Cinema']").click()

//  Click on Select Cinema dropdown
await page.locator("//span[text()='Select Cinema']").click()

// Select any available cinema from the list
await page.locator("//span[text()='INOX National,Virugambakkam Chennai']").click()
await page.waitForTimeout(3000)

// Select any available date (Today/Tomorrow/Upcoming)
await page.locator(".p-dropdown-item").first().click()

// Select any available movie from the movie list
await page.getByText("POOKIE").nth(1).click()


// Select any available show time
//await page.locator("//span[text()='Select Timing']").click()
await page.locator("//span[@class='mx-2']").nth(13).click()

// Click on the Submit button
await page.locator("//button[@class='p-button p-component sc-hjsuWn kDwaXw bgColor filter-btn']/span").click()
await page.waitForTimeout(2000)

// Accept the consent/cookie popup if displayed
await page.getByRole('button',{name:"Accept"}).click()

// Select any available seat from the seating layout
await page.locator("//span[@id='SL.SILVER|D:14']").click()

// Verify the selected seat information is displayed
const seatnumber= await page.locator("//p[text()='D14']").innerText()
console.log("Seat Number:" + seatnumber)

// Verify the total ticket amount is displayed
const amount = await page.locator("//h6[text()='218.02']").innerText()
console.log("Total Amount:" + amount)

// Click on the Proceed button
await page.locator("//button[text()='Proceed']").click()
await page.waitForTimeout(3000)



















})

