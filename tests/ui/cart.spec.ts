import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';

test.describe('Carrito - Sauce Demo', () => {
    test('@regression Agregar productos al carrito y validar contador y contenido', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);

        await loginPage.goToLoginPage();
        await loginPage.login('standard_user', 'secret_sauce');

        await inventoryPage.addBackpackToCart();
        await inventoryPage.addBikeLightToCart();

        await inventoryPage.validateCartCounter('2');
        await inventoryPage.validateRemoveButtonsVisible();

        await page.screenshot({
            path: `evidencias/${testInfo.project.name}-productos-agregados.png`,
            fullPage: true,
        });

        await inventoryPage.goToCart();
        await cartPage.validateCartProducts();

        await page.screenshot({
            path: `evidencias/${testInfo.project.name}-contenido-carrito.png`,
            fullPage: true,
        });
    });
});