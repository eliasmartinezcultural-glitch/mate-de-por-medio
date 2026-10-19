# Arquitectura de Mate de por Medio

## Capas
- **Presentación:** `index.html` y `styles.css`. La página sigue funcionando como documento estático.
- **Contenido:** `content.js` publica el objeto `window.MATE_CONTENT`. Los textos pueden evolucionar sin reescribir los eventos.
- **Interacción:** `app.js` conecta los botones, muestra diálogos, cambia historias y curiosidades, y gestiona la nota personal.
- **Persistencia local:** solo se usa `localStorage` para la nota explícita del visitante. No hay cuenta ni sincronización.
- **Publicación:** GitHub Pages sirve archivos estáticos; no hay servidor propio ni base de datos.

## Reglas para mantenerlo estable
1. Cargar `content.js` antes de `app.js`.
2. Mantener los identificadores HTML que consume `app.js`.
3. Cuando se agregue un nuevo control, contemplar teclado, foco visible y mensajes comprensibles.
4. No agregar alias de pago hasta que Elías confirme el dato exacto.
5. No presentar historias ficticias como hechos históricos del Chañar.
6. Probar vista móvil, vista de escritorio, consola del navegador y guardado/borrado de la nota tras cada cambio grande.

## Alcance de privacidad
La nota permanece en el navegador y dispositivo donde se guardó. No es un servicio de notas seguro ni sincronizado; no debe usarse para contraseñas, datos financieros ni información sensible.
