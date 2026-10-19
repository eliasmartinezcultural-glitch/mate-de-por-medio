# Lista de pruebas — El rinconcito de Elías

## Contenido e interacción
- [ ] La bienvenida explica el propósito del sitio sin exigir registro ni presencia del autor.
- [ ] “Leer otro cuentito” cambia el título, la etiqueta y los párrafos; recorrer varias historias.
- [ ] “Descubrir otra” cambia la curiosidad sin recargar la página.
- [ ] “Otro consejito” cambia el título y el texto.
- [ ] Los textos editoriales se muestran como texto, no se interpretan como HTML.
- [ ] El cierre y los enlaces de navegación llevan a sus secciones.

## Descargas
- [ ] Las tres vistas previas cargan: `descargas/dibujo-matero.svg`, `descargas/tarjetita-pausa.svg`, `descargas/fondo-matero.svg`.
- [ ] Cada enlace descarga el SVG correcto en lugar de llevar a una ruta inexistente.
- [ ] Los archivos se pueden abrir e imprimir en un navegador compatible.

## Colaboración voluntaria
- [ ] Sin alias, la cajita indica que está en preparación y el botón de copiar permanece deshabilitado.
- [ ] No aparece ningún alias ficticio ni dato de pago de ejemplo.
- [ ] Con alias confirmado en `COLLABORATION_ALIAS`, se muestra el alias y se habilita la copia.
- [ ] El acceso al resto del sitio no depende de colaborar.
- [ ] La interfaz no sugiere un monto ni presiona a la persona.

## Adaptabilidad y accesibilidad
- [ ] Probar anchos aproximados de 320, 390, 768 y 1280 píxeles.
- [ ] Confirmar que no hay desplazamiento horizontal.
- [ ] Navegar con teclado y comprobar el foco visible.
- [ ] Comprobar contraste y legibilidad en celular.
- [ ] Confirmar que las animaciones respetan `prefers-reduced-motion`.

## Técnica
- [ ] Confirmar que `content.js` carga antes que `app.js`.
- [ ] Revisar consola del navegador en busca de errores.
- [ ] Confirmar que todos los botones responden sin recargar la página.
- [ ] Verificar las rutas de recursos y que no haya IDs duplicados.
- [ ] Probar con alias vacío y, luego, con un alias real confirmado.

## Límite de la revisión
El estado de GitHub y las comprobaciones estáticas no prueban por sí solos la experiencia visual en un navegador real. No marcar como aprobadas las pruebas visuales o de interacción sin ejecutarlas en el sitio publicado.
