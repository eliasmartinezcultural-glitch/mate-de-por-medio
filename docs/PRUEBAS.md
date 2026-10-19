# Lista de pruebas antes de publicar

## Comprobaciones básicas
- [ ] Abrir el sitio y confirmar que se ve la casita ilustrada.
- [ ] Avanzar y retroceder por los cuatro momentos del ritual; al terminar, volver al comienzo.
- [ ] Abrir cada puerta de la mesa y cerrar el diálogo con el botón, el control de cierre y el fondo.
- [ ] Cambiar varios cuentos y confirmar que título y los tres párrafos se actualizan; recorrer las 15 historias.
- [ ] Cambiar la curiosidad varias veces.
- [ ] Confirmar que aparecen las tres postales locales y que cada enlace abre su fuente en otra pestaña.
- [ ] Revisar que las postales se construyen desde `content.js` y que el texto no se interpreta como HTML.
- [ ] Avanzar por las preguntas de la ronda y confirmar que las 16 rotan sin recargar.
- [ ] Cambiar las seis pequeñas prácticas y comprobar que cambian título y descripción.
- [ ] Confirmar que preguntas y prácticas no solicitan ni guardan respuestas.
- [ ] Visitar los cuatro lugares del pueblo ilustrado.
- [ ] Probar las tres opciones de la ronda.
- [ ] Cambiar todos los consejos para emprender.
- [ ] Elegir cada estado de ánimo y comprobar que cambia el texto.
- [ ] Escribir una nota, guardarla, recargar y confirmar que persiste en el mismo navegador.
- [ ] Borrar la nota y comprobar que desaparece.
- [ ] Abrir la cajita solidaria y comprobar que no muestra datos de pago inventados.
- [ ] Pausar y reanudar el movimiento suave.

## Escritorio y móvil
- [ ] Probar anchos aproximados de 320, 390, 768 y 1280 píxeles.
- [ ] Confirmar que no aparece desplazamiento horizontal.
- [ ] Revisar textos largos, botones, diálogos y campos de escritura.
- [ ] Navegar solo con teclado y comprobar que el foco se ve.
- [ ] Comprobar que las animaciones respetan la preferencia de movimiento reducido del sistema.

## Revisión técnica
- [ ] Confirmar que `content.js` carga antes que `app.js`.
- [ ] Revisar la consola del navegador en busca de errores.
- [ ] Verificar que no haya identificadores HTML duplicados ni referencias rotas.
- [ ] Comprobar que el sitio funciona sin iniciar sesión y sin backend propio.
- [ ] Confirmar que todos los controles responden desde que se abre la página, sin tener que pulsar primero otro control.
- [ ] No publicar el alias solidario hasta recibir el dato exacto y confirmado.

## Límite de las pruebas actuales
Las comprobaciones de repositorio pueden verificar sintaxis, estructura y referencias de archivos. Las pruebas visuales y las interacciones reales requieren abrir la versión publicada en un navegador. No marcar las pruebas visuales como aprobadas sin realizarlas en un navegador real.
