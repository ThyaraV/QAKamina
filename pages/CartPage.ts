import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly checkoutButton: Locator;
    readonly backpackItem: Locator;
    readonly bikeLightItem: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.backpackItem = page.locator('[data-test="inventory-item-name"]', {
            hasText: 'Sauce Labs Backpack',
        });
        this.bikeLightItem = page.locator('[data-test="inventory-item-name"]', {
            hasText: 'Sauce Labs Bike Light',
        });
    }

    async validateCartProducts() {
        await expect(this.backpackItem).toBeVisible();
        await expect(this.bikeLightItem).toBeVisible();
    }

    async goToCheckout() {
        await this.checkoutButton.click();
    }
}