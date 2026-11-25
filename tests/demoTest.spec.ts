import {test, expect} from "@playwright/test";

const LOGIN_URL = "https://coedemostand.vercel.app/";

test("Error message should be desplayed after the unsuccessful login", async({page}) => {

    await page.goto(LOGIN_URL);
    await expect(page.getByLabel("Username")).toBeVisible();

    await page.getByRole("button", {name:"Login"}).click();

    const erroMessage = page.getByText("invalid");
    await expect(erroMessage).toContainText("Your username is invalid", {ignoreCase: true});
});