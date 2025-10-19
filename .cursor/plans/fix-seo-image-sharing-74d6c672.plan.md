<!-- 74d6c672-48fa-4ee3-afc7-301c18cb2835 79591f9a-c8cb-45e5-bf88-573c4d752d2a -->
# Fix SEO Image Sharing

## Problema

La imagen SEO no se muestra correctamente al compartir enlaces en redes sociales (WhatsApp, Facebook, Instagram, etc.) porque el sitio usa `output: 'export'` (sitio estático) y las imágenes locales no están disponibles correctamente para los crawlers de redes sociales.

## Solución

Usar la imagen alojada externamente en ibb.co, siguiendo el mismo patrón exitoso de waisy-web.

## Cambios a Realizar

### 1. Actualizar `app/layout.tsx`

Reemplazar las URLs de imagen en `openGraph.images` y `twitter.images` para usar:

- URL principal: `https://i.ibb.co/bgdtPb3L/image-seo.png`
- Mantener dimensiones: width: 1200, height: 630
- Agregar `type: 'image/png'` como en waisy-web
- Confirmar que `metadataBase` usa `https://questly.fun`

### 2. Actualizar `app/privacy/page.tsx`

Cambiar las URLs de imagen en Open Graph y Twitter a `https://i.ibb.co/bgdtPb3L/image-seo.png`

### 3. Actualizar `app/terms/page.tsx`

Cambiar las URLs de imagen en Open Graph y Twitter a `https://i.ibb.co/bgdtPb3L/image-seo.png`

### 4. Actualizar `app/structured-data.ts`

Cambiar el campo `screenshot` a `https://i.ibb.co/bgdtPb3L/image-seo.png`

### 5. Commit y Push

Hacer commit con mensaje descriptivo y push a GitHub

## Resultado Esperado

Al compartir el enlace de questly.fun en redes sociales, se mostrará correctamente la imagen SEO alojada en ibb.co, tal como funciona en waisy-web.

### To-dos

- [ ] Actualizar app/layout.tsx con la URL de imagen de ibb.co
- [ ] Actualizar app/privacy/page.tsx con la URL de imagen de ibb.co
- [ ] Actualizar app/terms/page.tsx con la URL de imagen de ibb.co
- [ ] Actualizar app/structured-data.ts con la URL de imagen de ibb.co
- [ ] Hacer commit y push de los cambios