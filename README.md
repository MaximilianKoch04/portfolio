# Portfolio de Maximiliano Koch

Portfolio personal con estética pixel art: fondo negro, texto blanco, bordes de diálogo y tipografía original. Inspirado en los menús de juegos retro, sin utilizar imágenes ni recursos de Undertale.

## Stack

React 19, Vite 8, JavaScript y CSS. Las fuentes son locales: una tipografía pixel original y Ubuntu Mono, cuya licencia está en `public/fonts/LICENSE-Ubuntu.txt`.

## Ejecutar localmente

Requiere Node.js 22.13 o posterior (o una versión LTS posterior compatible con Vite).

```bash
npm install
npm run dev
```

Abrir la URL que muestra Vite. Para generar y revisar la versión de producción:

```bash
npm run build
npm run preview
```

## Contenido

- Presentación y botones a proyectos y contacto.
- Biografía de tres oraciones y habilidades por categoría.
- Futbolle, FoodRoute y el propio portfolio como tercer proyecto.
- Perfil de editor de video y sección independiente con cuatro miniaturas reales del portfolio de Canva.
- Email, enlace a GitHub y botón para copiar el email.
- Navegación con sección activa, enlace para saltar al contenido y estados de foco visibles.
- Diseño adaptable, fuentes locales y animación que respeta `prefers-reduced-motion`.

Los datos editables están en `src/App.jsx`. La biografía es un borrador que Maximiliano debe revisar y adaptar con sus palabras antes de entregar. El enlace real de LinkedIn proporcionado por Maximiliano ya está incluido en `profile.linkedin`. Completar también `profile.portfolioRepo` cuando exista el repositorio del portfolio.

## Subir a GitHub conservando los commits

El ZIP incluye una carpeta `.git` con el historial de creación por etapas. Descomprimir toda la carpeta (incluida `.git`). Crear un repositorio **público y vacío**, llamado `portfolio`, en la cuenta `MaximilianKoch04`. No inicializarlo con README ni `.gitignore`.

Desde la carpeta del proyecto:

```bash
git remote add origin https://github.com/MaximilianKoch04/portfolio.git
git push -u origin main
```

Estos comandos corresponden al nombre `portfolio`; si se elige otro nombre, cambiar la URL. Después de instalar dependencias, guardar el `package-lock.json` generado en un nuevo commit para fijar también las dependencias transitivas.

## Deploy público en GitHub Pages

En el repositorio, abrir **Settings → Pages → Build and deployment → Source → GitHub Actions**. El workflow incluido compila y publica el contenido de `dist` después de cada push a `main`. Si el primer workflow se ejecutó antes de activar Pages, volver a ejecutarlo desde Actions. La base relativa de Vite permite alojarlo en un subdirectorio del repositorio.

Alternativa: importar el repositorio en Vercel o Netlify, elegir Vite, usar `npm run build` y la carpeta de salida `dist`.

## Revisión antes de entregar

1. Revisar y personalizar la biografía.
2. Revisar que los enlaces de GitHub y LinkedIn abran correctamente.
3. Agregar el enlace del portfolio a `profile.portfolioRepo`.
4. Publicar el repositorio con su historial de commits y activar Pages.
5. Abrir el deploy en 360, 768 y 1280 píxeles; comprobar que no haya scroll horizontal.
6. Recorrer los enlaces con Tab y probar contacto y copiar email.
7. Entregar el enlace público del repositorio y el deploy.

No se incluye formulario: la consigna lo permite como opcional. El botón de email abre el cliente de correo del visitante. Copiar email usa el portapapeles en contextos compatibles; si no está disponible, muestra el texto para copiar manualmente. El puntaje Lighthouse no se ha medido.

## Edición de video

La sección de edición presenta cuatro miniaturas de trabajos reales encontrados en el Canva proporcionado por Maximiliano. El botón abre el portfolio original de Canva. No se incorporaron tarifas, packs ni promesas comerciales al sitio.

Los MP4 de Canva no se pudieron exportar: sus reproductores usan URLs `blob` limitadas a la sesión del navegador. Por eso esta versión muestra miniaturas y un enlace a Canva, sin simular reproducción local. Cuando estén disponibles los archivos originales, copiarlos a `public/edicion/` y completar `src` en el arreglo `edits` de `src/App.jsx` (por ejemplo `src: 'llados.mp4'`). El componente reemplaza automáticamente la miniatura por un reproductor nativo con controles. Revisar el tamaño de los videos antes de publicarlos en GitHub Pages; para videos grandes es preferible usar un alojamiento de video.
