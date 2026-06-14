import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly cartBadge: Locator;
    readonly cartButton: Locator;
    readonly backpackAddButton: Locator;
    readonly bikeLightAddButton: Locator;
    readonly backpackRemoveButton: Locator;
    readonly bikeLightRemoveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
        this.cartButton = page.locator('[data-test="shopping-cart-link"]');
        this.backpackAddButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.bikeLightAddButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.backpackRemoveButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.bikeLightRemoveButton = page.locator('[data-test="remove-sauce-labs-bike-light"]');
    }

    async addBackpackToCart() {
        await this.backpackAddButton.click();
    }

    async addBikeLightToCart() {
        await this.bikeLightAddButton.click();
    }

    async validateCartCounter(expectedCount: string) {
        await expect(this.cartBadge).toHaveText(expectedCount);
    }

    async validateRemoveButtonsVisible() {
        await expect(this.backpackRemoveButton).toBeVisible();
        await expect(this.bikeLightRemoveButton).toBeVisible();
    }

    async goToCart() {
        await this.cartButton.click();
    }
}