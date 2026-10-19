/* Tomar mates con Elías · interacciones pequeñas, sin rastreo ni servicios externos */
(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#site-navigation");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(open));
      navigation.classList.toggle("is-open", open);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        navigation.classList.remove("is-open");
      });
    });
  }

  const quotes = [
    "A veces, estar un rato también es hacer algo bueno.",
    "No todo lo lindo tiene que servir para algo.",
    "El mundo puede esperar mientras se enfría el agua.",
    "Hay días que piden menos ruido y más cielo.",
    "Las cosas pequeñas también merecen su tiempo.",
    "Un ratito de calma no necesita explicación."
  ];
  const quoteButton = document.querySelector("#pause-button");
  const quoteText = document.querySelector("#pause-quote");
  let quoteIndex = 0;

  if (quoteButton && quoteText) {
    quoteButton.addEventListener("click", () => {
      quoteIndex = (quoteIndex + 1) % quotes.length;
      quoteText.textContent = quotes[quoteIndex];
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const targetId = link.getAttribute("href").slice(1);
    if (targetId && !document.getElementById(targetId)) {
      link.setAttribute("aria-disabled", "true");
      link.addEventListener("click", (event) => event.preventDefault());
    }
  });
})();
