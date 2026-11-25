
import { test, expect } from "@playwright/test";



test("Navigation test", async ({ page }) => {
await page.goto('https://coedemostand.vercel.app/');
await expect(page.getByRole('link', { name: 'Logo' })).toBeVisible();
await expect(page.getByRole('heading', { name: 'Web Testing', exact: true })).toBeVisible();
await expect(page.getByRole('button', { name: 'Tasks' })).toBeVisible();
await expect(page.getByRole('button', { name: 'About us' })).toBeVisible();
await expect(page.getByRole('button', { name: 'Contacts' })).toBeVisible();
await expect(page.getByRole('button', { name: 'One more button' })).toBeVisible();
 
});


test("Content test", async ({ page }) => {
// await expect(page.getByRole('link', { name: 'Logo' })).toContainText("");
await expect(page.getByRole('heading', { name: 'Web Testing', exact: true })).toContainText("Web Testingfff");
await expect(page.getByRole('button', { name: 'Tasks' })).toContainText("Tasks");
await expect(page.getByRole('button', { name: 'About us' })).toContainText("About us");
await expect(page.getByRole('button', { name: 'Contacts' })).toContainText("Contacts");
await expect(page.getByRole('button', { name: 'One more button' })).toContainText("One more button");
 
});

test("Href test", async ({ page }) => {
await page.goto('https://playwright.dev/');
await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', "/docs/intro");
await expect(page.getByRole('link', { name: 'MCP', exact: true })).toHaveAttribute('href',"/mcp/introduction");
await expect(page.getByRole('link', { name: 'CLI', exact: true })).toHaveAttribute('href',"/agent-cli/introduction");
});

test("light mode test", async ({ page }) => {
await page.goto('https://playwright.dev/');
await expect(page.getByLabel('Switch between dark and light mode (currently system mode)').click());
await expect (page.locator('html')).toHaveAttribute('data-theme', 'dark');

});



test("First Playwright test", async ({ page }) => {

    // 1. Open website
    await page.goto("https://www.saucedemo.com/");
    await expect(page.getByPlaceholder("Username")).toBeVisible();
    await (page.getByPlaceholder('Username').fill('standard_user'));
    await expect(page.getByPlaceholder("Password")).toBeVisible();
    await (page.getByPlaceholder('Password').fill('secret_sauce'));
    await (page.getByRole('button',{name: "login"})).click()
      await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    // 2. Check page title
    // await expect(page).toHaveTitle('Swag Labs');

});


// <input id="email" placeholder="Enter email">

// <button id="submit-btn" name="send">
//     Submit
// </button>

// <a href="/home">Home</a>

// <label for="password">Password</label>
// <input id="password" type="password">


test("Playwright test1", async ({ page }) => {

    // 1. Open website
    await page.goto("https://www.saucedemo.com/");
    page.locator("Email");
    await expect(page.getByRole("button", {name:'Submit'}));
    await expect(page.getByRole("link", {name:'"Home"'})).toHaveAttribute('href', "/home");    
    await page.getByLabel("Password");
    page.locator("#submit-btn");
});


test("Playwright test2", async ({ page }) => {

    // 1. Open website
    await page.goto("https://www.saucedemo.com/");
    page.locator("#username");
    page.locator('//input[@name="pass"]');
    page.locator("login-form.#login-btn");
    page.locator('//button[@text="Login"]');
    await expect(page.getByRole("button", {name:'Submit'}));
    await expect(page.getByRole("link", {name:'"Home"'})).toHaveAttribute('href', "/home");    
    await page.getByLabel("Password");
    page.locator("#submit-btn");
});

test("Playwright test3", async ({ page, context }) => {

    // 1. Open website
    // await page.goto("https://www.saucedemo.com/");
    // await page.reload();
    // await page.goBack();
    // await page.goForward();

    const newPage = await context.newPage();

    await newPage.goto("https://www.saucedemo.com/");

   const newPage2 = await context.newPage();
   await newPage2.goto("https://www.google.com/");
   console.log(context.pages().length)

   page.locator("#username");
   page.locator("[name ='Password']");
   page.getByRole('button', {name: 'Login'});
   page.locator("//button[text()='Login']");
   page.locator("input").all();

});


test("Playwright test4", async ({ page }) => {
   
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("Lisa");
    await page.locator("#user-name").clear();

});



test("Steam checks", async ({ page, context }) => {
   
    await page.goto("https://store.steampowered.com/");
    await expect(page.getByRole('link', { name: 'Link to the Steam Homepage' })).toBeVisible();
    // await page.waitForLoadState();
    // await page.getByRole('link', { name: 'About Valve' }).click();
    // await expect(page).toHaveURL('https://www.valvesoftware.com/en/about');
    const pagePromise = context.waitForEvent('page');
    await page.getByRole('link', { name: 'About Valve' }).click();
    const newTab = await pagePromise;
    await expect(newTab).toHaveURL("https://www.valvesoftware.com/en/about");
    await expect(page.getByRole('link', { name: 'Install Steam' }).click());
    await expect(page.getByText('Steam is the ultimate')).toBeVisible();
    



});