/* Tomar mates con Elías
   La navegación funciona con enlaces HTML, incluso si JavaScript está desactivado.
   Este archivo queda reservado para mejoras pequeñas y accesibles, sin servicios externos.
*/
(() => {
  "use strict";
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    const targetId = link.getAttribute("href").slice(1);
    if (!targetId) return;
    const target = document.getElementById(targetId);
    if (!target) {
      link.setAttribute("aria-disabled", "true");
      link.addEventListener("click", (event) => event.preventDefault());
    }
  });
})();
