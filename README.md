# El rinconcito de Elías · Mate de por Medio

Una página independiente, cálida y sin apuro: cuentos breves, curiosidades sobre el mate, pequeños consejos y recursos originales para descargar. Está pensada para funcionar sola, sin que Elías tenga que atenderla todos los días.

## Experiencia pública

- **Bienvenida y pausa:** presentación breve, identidad visual artesanal y navegación sencilla.
- **Leer:** cuentos de ficción rotativos tomados de `content.js`.
- **Aprender:** curiosidades rotativas sobre el mate y el ritual.
- **Respirar:** consejitos breves que cambian sin recargar la página.
- **Llevar:** tres recursos originales en SVG, enlazados como descargas directas.
- **Colaborar:** cajita voluntaria visible, con el alias deliberadamente pendiente hasta confirmar el dato real. No hay presión, montos sugeridos ni contenido bloqueado.

## Estructura técnica

- `index.html`: estructura semántica, navegación, ofertas, descargas y cajita de colaboración.
- `styles.css`: sistema visual, paleta, composición responsive, foco accesible y movimiento reducido.
- `content.js`: biblioteca editorial de cuentos y curiosidades.
- `app.js`: rotación de contenido, renderizado seguro con `textContent` y configuración de colaboración.
- `descargas/dibujo-matero.svg`: lámina lineal para pintar.
- `descargas/tarjetita-pausa.svg`: tarjeta para guardar o compartir.
- `descargas/fondo-matero.svg`: fondo de pantalla.
- `docs/`: arquitectura, contenido y pruebas.

## Configurar la colaboración

En `app.js`, buscar la línea `const COLLABORATION_ALIAS = "";` y reemplazar las comillas vacías por el alias **exacto, confirmado por Elías**. No cargar un alias de ejemplo ni inventado. Una vez configurado, el botón permite copiarlo al portapapeles; la persona realiza la transferencia por su cuenta desde su banco o billetera. Si el alias está vacío, la cajita informa con claridad que está en preparación y mantiene deshabilitado el botón.

La colaboración es voluntaria. No debe condicionar el acceso a cuentos, curiosidades ni descargas. Este sitio no procesa pagos, no verifica transferencias y no necesita un servidor propio.

## Publicación y privacidad

Sitio estático para GitHub Pages; no usa cuentas, base de datos ni analítica propia. El sitio no solicita datos personales. Los archivos descargables están guardados directamente en el repositorio, no se generan mediante una sesión ni requieren que el autor esté conectado.

## Pruebas pendientes

Las comprobaciones de código y rutas no reemplazan la revisión visual en navegador real. Antes de considerar la versión terminada, probar escritorio y móvil, botones, descargas, foco de teclado y la configuración del alias confirmado.
