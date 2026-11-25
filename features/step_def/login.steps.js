const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('node:assert/strict');

Given('user is on the login page', async function () {
    await this.page.goto('https://www.saucedemo.com/');
});

When('user enters username {string} and password {string}', async function (username, password) {
    await this.page.locator('#user-name').fill(username);
    await this.page.locator('#password').fill(password);
});

When('user clicks the login button', async function () {
    await this.page.locator('#login-button').click();
});

Then('products page should be displayed', async function () {
    await this.page.waitForURL('**/inventory.html');

    const title = await this.page.locator('.title').innerText();

    assert.strictEqual(title, 'Products');
});