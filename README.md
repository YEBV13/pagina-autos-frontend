<<<<<<< HEAD
# Página de negocio de autos — Front (React + Vite)

Página informativa de un negocio de estética y protección de autos
(PPF, cerámica, wraps, polarizado, detallado). Diseño propio en
grafito cálido con naranja/ámbar.

> **Datos de ejemplo:** el nombre "Apex Shield Auto Studio", el teléfono
> 555, los precios y las reseñas son placeholders. Cambiar por los datos
> reales del negocio en `src/data.js`.

## Qué necesitas instalado

- **Node.js LTS** (versión 20 o mayor) — https://nodejs.org
- Un editor: **VS Code** (recomendado)

Comprueba la instalación:

```bash
node --version
npm --version
```

## Cómo correrlo en tu computadora

```bash
# 1. Entra a la carpeta del proyecto
cd pagina-autos-frontend

# 2. Instala las dependencias (solo la primera vez)
npm install

# 3. Arranca el servidor de desarrollo
npm run dev
```

Abre en el navegador la dirección que te muestra la terminal, por ejemplo
`http://localhost:5173`. Al guardar cambios en el código, la página se
actualiza sola (hot reload).

## Cómo generar la versión para publicar

```bash
npm run build
```

Eso crea la carpeta `dist/` con los archivos listos para Netlify.

## Estructura del proyecto

```
src/
  App.jsx                 Arma la página completa con sus secciones
  main.jsx                Punto de entrada de React
  index.css               Todos los estilos (colores, botones, tarjetas)
  data.js                 Datos del negocio: servicios, paquetes, reseñas, FAQ
  components/
    Header.jsx            Barra superior con navegación
    Hero.jsx              Portada con foto y números de confianza
    Services.jsx          Servicios con filtro por categoría
    Packages.jsx          Paquetes de PPF con precios
    Process.jsx           Proceso en 4 pasos
    Testimonials.jsx      Reseñas y galería de trabajos
    Faq.jsx               Preguntas frecuentes
    QuoteForm.jsx         Formulario de cotización
    QuoteSection.jsx      Sección de cotización, contacto y pie de página
    CartDrawer.jsx        Panel lateral del carrito con el resumen
```

## El carrito de cotización

- Cada servicio y cada paquete tiene el botón **Add to quote**: lo agrega
  al carrito y abre el panel lateral con el resumen.
- El carrito muestra los servicios agregados, sus precios, el total
  estimado (precios "desde"), permite quitar servicios y tiene el botón
  **Continue to quote**, que baja al formulario.
- El formulario muestra los servicios del carrito y los incluye en el
  resumen y en el POST a la API (`servicios` y `totalEstimado`).
- El estado del carrito vive en `App.jsx` y se pasa como props a
  `Header`, `Services`, `Packages`, `QuoteSection` y `CartDrawer`.

## El formulario de cotización

- Pide año, marca, modelo, servicio, cuándo lo quiere, cómo prefiere que
  lo contacten (llamada, texto o correo), nombre, teléfono, correo y notas.
- Si el cliente ya agregó servicios al carrito, el campo de servicio es
  opcional: el resumen usa lo del carrito.
- **Sin backend:** al enviar muestra el resumen con botones para mandarlo
  por correo o copiarlo para texto.
- **Con backend:** si existe la variable `VITE_API_URL`, envía un POST a
  `VITE_API_URL/api/cotizaciones` con los datos en JSON.

Para conectar la API, copia `.env.example` a `.env` y pon la URL:

```
VITE_API_URL=http://localhost:5000
```

## Dónde cambiar las cosas

| Quiero cambiar… | Archivo |
| --- | --- |
| Nombre, teléfono, dirección, horarios | `src/data.js` (BUSINESS) |
| Servicios y precios | `src/data.js` (SERVICES) |
| Paquetes PPF | `src/data.js` (PACKAGES) |
| Reseñas, FAQ, galería | `src/data.js` |
| Colores y estilos | `src/index.css` |
| Textos de cada sección | El componente de esa sección |

## Publicar en Netlify (borrador)

1. Sube el proyecto a un repositorio en GitHub.
2. En Netlify: **Add new site → Import an existing project**.
3. Build command: `npm run build` — Publish directory: `dist`.
4. Te da una URL temporal (por ejemplo `pagina-autos.netlify.app`) para
   que tu amigo la revise antes de apuntar el dominio real.
=======
# pagina-autos-frontend
>>>>>>> dbb2dc9d5a4587e3a879efc44223069b3cd83896
