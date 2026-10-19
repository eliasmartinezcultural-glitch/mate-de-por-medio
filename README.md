# Mate de por Medio

Un pequeño mundo ilustrado alrededor del ritual de tomar mate. La experiencia es apacible, artesanal y autónoma: una mesa matera, cuentos, curiosidades, un pueblo de ficción, una galería de dibujos originales, consejos sencillos para emprender y un cuaderno personal local.

## Cómo está organizado

- `index.html`: estructura semántica, navegación, escenas y controles.
- `styles.css`: sistema visual, colores, tipografías, composición adaptable y movimiento suave.
- `content.js`: biblioteca editorial: 4 momentos del ritual, 12 curiosidades, 15 cuentos breves, 8 consejos para emprender, 16 preguntas para conversar, 6 pequeñas prácticas opcionales y 3 postales locales con fuentes, respuestas para cuatro estados de ánimo y textos de 10 rincones/diálogos.
- `app.js`: comportamiento de la experiencia, diálogos, navegación por el ritual, cuentos y curiosidades rotativas, consejos, respuestas de ánimo, guardado local y controles accesibles.
- `docs/ARQUITECTURA.md`: capas técnicas y reglas para mantener el proyecto estable.
- `docs/PRUEBAS.md`: lista de comprobaciones antes de publicar cambios.
- `docs/CONTENIDO-Y-ESTILO.md`: dirección visual y criterios editoriales.

## Principios del proyecto

1. **Primero la calma:** nada de contadores regresivos, ventanas emergentes invasivas o estímulos estridentes.
2. **Acceso libre:** las historias y actividades no se bloquean por colaborar.
3. **Autonomía:** sitio estático, sin cuenta, servidor propio, base de datos ni servicio de pago.
4. **Privacidad prudente:** la nota personal se guarda solo en el almacenamiento local del navegador que la persona usa. No se transmite ni se sincroniza; borrar los datos del navegador puede borrarla.
5. **Accesibilidad:** controles con teclado, mensajes de estado, etiquetas, diseño adaptable y respeto por la preferencia de movimiento reducido del sistema.
6. **Claridad editorial:** los cuentos y habitantes son ficción. Los datos sobre San Patricio del Chañar deben verificarse y acreditarse antes de ampliar el contenido histórico.

## Publicación

Sitio estático preparado para GitHub Pages. Los archivos se cargan en el orden `content.js` y luego `app.js`.

## Pendiente antes de publicar una colaboración real

Configurar el alias correcto de la cajita solidaria. No se publica ningún alias inventado ni se bloquea contenido por colaborar.

## Notas de la versión

- El control superior pausa o reanuda el movimiento decorativo; no activa sonido.
- El cuaderno personal es local al navegador y no se comparte entre dispositivos.
- El proyecto no incorpora analítica ni rastreo propio.
