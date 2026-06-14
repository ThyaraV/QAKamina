## Grupo 3: Automatización de UI

Para la automatización de interfaz se utilizó Playwright con TypeScript, aplicando el patrón Page Object Model para separar los selectores y acciones de cada página respecto a los archivos de prueba.

### Escenarios automatizados

1. Login exitoso y login fallido.
2. Agregar productos al carrito y validar contador y contenido.
3. Flujo completo de checkout hasta la pantalla de confirmación.

### Decisiones técnicas

Se eligió Playwright porque ofrece esperas automáticas, buena estabilidad en pruebas end-to-end, soporte para múltiples navegadores y reportes integrados.

### Ejecución

Instalar dependencias:

```bash
npm install
```

Ejecutar todos los tests:
```bash
npm test
```

Ejecutar tests con UI:
```bash
npm run test:ui
```

Ejecutar tests en modo no headless (ventana visible):
```bash
npm run test:headed
```

### Estructura del proyecto

- `pages/`: Contiene los Page Objects para cada página de la aplicación (LoginPage, InventoryPage, CartPage, CheckoutPage).
- `tests/`: Contiene los archivos de prueba agrupados por feature (login.spec.ts, cart.spec.ts, checkout.spec.ts).
- `playwright.config.ts`: Configuración del runner.
- `package.json`: Definición de scripts de automatización.

### Valor agregado en automatización UI

Además de cubrir los escenarios solicitados, se incorporaron algunas mejoras a esta automatización:

- Capturas automáticas como evidencia en pasos críticos del flujo(Carpeta Evidencias).
- Uso de tags `@smoke` y `@regression` para ejecutar subconjuntos de pruebas.
- Ejecución cross-browser en Chromium, Firefox y WebKit.
- Generación de reportes con Playwright HTML Report y Allure Report.

### Ejecución de reportes

Para generar y visualizar los reportes de ejecución, utilizar los siguientes comandos:

Generar el reporte HTML de Playwright:
```bash
npm run test:report
```

Generar y visualizar el reporte Allure:
```bash
npm run allure:generate  
npm run allure:open      
```