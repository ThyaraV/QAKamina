## Grupo 3: Automatización de UI

Para la automatización de interfaz se utilizó Playwright con TypeScript, aplicando el patrón Page Object Model para separar los selectores y acciones de cada página respecto a los archivos de prueba.

### Escenarios automatizados

1. Login exitoso y login fallido.
2. Agregar productos al carrito y validar contador y contenido.
3. Flujo completo de checkout hasta la pantalla de confirmación.

### Ejecución

Instalar dependencias para que todo funcione correctamente:

```bash
npm install
```

```bash
npx playwright install
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

- `Casos de prueba y reporte de bugs/`: Esta carpeta contiene los excels de los primeros dos grupos del reto (Grupo 1 y 2)
- `api testing/`: Esta carpeta contiene el collection y environment de las apis probadas en postman (Grupo 4)

Y, para el Grupo 3 tenemos: 
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
## Grupo 4 - Pruebas API

Para las pruebas de API se utilizó Postman sobre la API pública Restful Booker

### Casos cubiertos

- API-001: Obtener token de autenticación.
- API-002: Crear una reserva.
- API-003: Consultar una reserva creada.
- API-004: Actualizar una reserva autenticada.
- API-005: Eliminar una reserva.
- API-006: Validar que una reserva eliminada ya no existe.
- API-007: Crear una reserva con campos faltantes (caso negativo).
- API-008: Actualizar una reserva sin token (caso negativo).

### Validaciones realizadas

- Códigos de respuesta HTTP.
- Existencia y contenido de campos en el body.
- Persistencia de datos entre operaciones.
- Autenticación mediante token.
- Restricciones de autorización.
- Validación del ciclo completo CRUD.

### Hallazgo relevante

Se identificó que al intentar crear una reserva con campos obligatorios faltantes, la API responde con:

```text
500 Internal Server Error
```

Desde una perspectiva de calidad, sería recomendable responder con:

```text
400 Bad Request
```

indicando explícitamente los campos requeridos.

### Ejecución

1. Importar la colección en postman:
   - `RestfulBooker.postman_collection.json`

2. Importar el environment en postman:
   - `RestfulBooker.postman_environment.json`

3. Seleccionar el environment Restful Booker Env para que todo la colección se pueda ejecutar correctamente.

4. Ejecutar la colección completa.
   
## Decisiones Técnicas

- Se utilizó Playwright con TypeScript para la automatización UI debido a su estabilidad, soporte moderno y esperas automáticas.
- Se implementó el patrón Page Object Model (POM) para mejorar la mantenibilidad y reutilización del código.
- Se utilizaron etiquetas Smoke y Regression para facilitar la ejecución selectiva de pruebas.
- Se incorporó ejecución cross-browser en Chromium, Firefox y WebKit.
- Se generaron capturas de pantalla automáticas como evidencia en puntos clave de los flujos automatizados.
- Se implementaron reportes mediante Playwright HTML Report y Allure Report.
- Para las pruebas API se utilizó Postman, aprovechando variables de entorno para encadenar solicitudes y reutilizar datos dinámicos como token y bookingId.

## Qué Mejoraría con Más Tiempo

- Integrar la ejecución automática de pruebas mediante GitHub Actions.
- Ejecutar la colección de Postman utilizando Newman para integrarla en pipelines CI/CD.
- Centralizar los datos de prueba y configuraciones por ambiente.
- Ampliar la cobertura de pruebas negativas y escenarios límite.
- Consolidar reportes de UI y API en una estrategia única de ejecución y monitoreo.
