import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test.describe('Checkout - Sauce Demo', () => {
    test('@smoke @regression Flujo completo de checkout hasta confirmación', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.goToLoginPage();
        await loginPage.login('standard_user', 'secret_sauce');

        await inventoryPage.addBackpackToCart();
        await inventoryPage.addBikeLightToCart();

        await inventoryPage.goToCart();
        await cartPage.validateCartProducts();

        await page.screenshot({
            path: `evidencias/${testInfo.project.name}-checkout-carrito.png`,
            fullPage: true,
        });

        await cartPage.goToCheckout();

        await checkoutPage.fillCheckoutInformation('Christian', 'Narvaez', '170102');
        await checkoutPage.continueCheckout();
        await checkoutPage.validateCheckoutOverview();

        await page.screenshot({
            path: `evidencias/${testInfo.project.name}-checkout-resumen.png`,
            fullPage: true,
        });

        await checkoutPage.finishCheckout();
        await checkoutPage.validateOrderConfirmation();

        await page.screenshot({
            path: `evidencias/${testInfo.project.name}-checkout-confirmacion.png`,
            fullPage: true,
        });
    });
});