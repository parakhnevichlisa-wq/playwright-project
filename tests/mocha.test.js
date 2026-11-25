import { test, expect, describe } from "@playwright/test";
const assert = require('node:assert/strict');

describe("Web Testing website", () => {

    // Выполняется перед каждым тестом внутри этой группы
    test.beforeEach(async ({ page }) => {
        await page.goto('https://coedemostand.vercel.app/');
    });

    test("Navigation test", async ({ page }) => {
        await expect(page.getByRole('link', { name: 'Logo' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Web Testing', exact: true })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Tasks' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'About us' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Contacts' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'One more button' })).toBeVisible();
    });

    test("Content test", async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Web Testing', exact: true })).toContainText("Web Testingfff");
        await expect(page.getByRole('button', { name: 'Tasks' })).toContainText("Tasks");
        await expect(page.getByRole('button', { name: 'About us' })).toContainText("About us");
        await expect(page.getByRole('button', { name: 'Contacts' })).toContainText("Contacts");
        await expect(page.getByRole('button', { name: 'One more button' })).toContainText("One more button");
    });

});

describe("Playwright website", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://playwright.dev/');
    });

    test("Href test", async ({ page }) => {
        await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', "/docs/intro");
        await expect(page.getByRole('link', { name: 'MCP', exact: true })).toHaveAttribute('href', "/mcp/introduction");
        await expect(page.getByRole('link', { name: 'CLI', exact: true })).toHaveAttribute('href', "/agent-cli/introduction");
    });

});