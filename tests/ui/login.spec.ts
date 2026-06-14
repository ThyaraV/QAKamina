import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Login - Sauce Demo', () => {
    test('@smoke Login exitoso con usuario válido', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);

        await loginPage.goToLoginPage();
        await page.screenshot({
            path: `evidencias/${testInfo.project.name}-login-pagina-inicial.png`,
            fullPage: true,
        });

        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.validateSuccessfulLogin();

        await page.screenshot({
            path: `evidencias/${testInfo.project.name}-login-exitoso.png`,
            fullPage: true,
        });
    });

    test('@regression Login fallido con contraseña incorrecta', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);

        await loginPage.goToLoginPage();
        await loginPage.login('standard_user', 'password_incorrecto');
        await loginPage.validateLoginError('Username and password do not match');

        await page.screenshot({
            path: `evidencias/${testInfo.project.name}-login-fallido.png`,
            fullPage: true,
        });
    });
});