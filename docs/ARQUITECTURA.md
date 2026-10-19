# Arquitectura de El rinconcito de Elías

## Capas
- **Presentación:** `index.html` estructura la bienvenida, los tres ofrecimientos principales, los recursos descargables, la cajita voluntaria y el cierre.
- **Sistema visual:** `styles.css` mantiene la paleta crema, salvia y arcilla; tarjetas, espacios generosos, tipografía editorial, adaptación móvil y preferencia de movimiento reducido.
- **Biblioteca editorial:** `content.js` contiene los cuentos y curiosidades. El contenido se separa del comportamiento para facilitar cambios futuros.
- **Interacción:** `app.js` rota cuentos, datos y consejitos; construye los párrafos como texto, sin interpretar contenido editorial como HTML.
- **Recursos:** tres ilustraciones SVG se sirven como archivos reales en `descargas/`, enlazados con el atributo `download`.
- **Colaboración:** el alias se configura en una única constante de `app.js`. Vacío significa no configurado; no se inventan datos de pago. Con alias confirmado, se habilita copiarlo. El sitio no cobra ni valida transferencias.
- **Publicación:** GitHub Pages sirve todo como sitio estático. No requiere sesión del autor ni backend.

## Reglas de mantenimiento
1. Cargar `content.js` antes de `app.js`.
2. Si se cambian los identificadores de los botones o las zonas de contenido, actualizar ambos archivos de forma coordinada.
3. Mantener visibles los controles por teclado y respetar `prefers-reduced-motion`.
4. No inventar ni publicar un alias. Confirmarlo con Elías antes de configurarlo.
5. No bloquear cuentos, consejos ni descargas por colaborar.
6. Mantener las historias claramente identificadas como ficción cuando corresponda.
7. Verificar las rutas de los SVG tras mover o renombrar recursos.

## Alcance y privacidad
No se recogen nombres, correos ni respuestas del visitante. No hay cuentas ni analítica propia. El portapapeles solo se usa si el alias está configurado y la persona pulsa el botón. La transferencia se realiza fuera del sitio, desde la aplicación bancaria o billetera de la persona.
