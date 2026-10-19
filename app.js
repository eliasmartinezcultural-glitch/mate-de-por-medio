(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const data = window.MATE_CONTENT;
  if (!data) {
    console.error("No se pudo cargar la biblioteca editorial de Mate de por Medio.");
    return;
  }

  const { ritualSteps, facts, stories, details, businessIdeas, moodResponses } = data;
  const dialog = $("#detail-dialog");
  const toast = $("#toast");
  let toastTimer;
  let ritualIndex = 0;
  let factIndex = 0;
  let storyIndex = 0;
  let ideaIndex = 0;
  let storageAvailable = true;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
  }

  function openDetail(key) {
    const item = details[key] || details.surprise;
    $("#dialog-kicker").textContent = item.kicker;
    $("#dialog-title").textContent = item.title;
    $("#dialog-content").innerHTML = item.html;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  function closeDetail() {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  }

  $$("[data-open]").forEach(button => {
    button.addEventListener("click", () => openDetail(button.dataset.open));
  });
  $("#dialog-done").addEventListener("click", closeDetail);
  dialog.addEventListener("click", event => {
    if (event.target === dialog) closeDetail();
  });

  function renderRitual() {
    const step = ritualSteps[ritualIndex];
    $("#step-count").textContent = "MOMENTO " + (ritualIndex + 1) + " DE " + ritualSteps.length;
    $("#ritual-step-title").textContent = step.title;
    $("#ritual-step-text").textContent = step.text;
    $$(".step-dots span").forEach((dot, index) => {
      dot.classList.toggle("active", index === ritualIndex);
    });
    $("#ritual-back").disabled = ritualIndex === 0;
    $("#ritual-next").innerHTML = ritualIndex === ritualSteps.length - 1
      ? "Volver al comienzo <span aria-hidden='true'>↺</span>"
      : "Siguiente momento <span aria-hidden='true'>→</span>";
    $("#ritual-kettle").classList.toggle("kettle-warm", ritualIndex > 0);
    $("#ritual-steam").classList.toggle("steam-strong", ritualIndex > 0);
  }

  $("#ritual-back").addEventListener("click", () => {
    ritualIndex = Math.max(0, ritualIndex - 1);
    renderRitual();
  });
  $("#ritual-next").addEventListener("click", () => {
    const wasLast = ritualIndex === ritualSteps.length - 1;
    ritualIndex = wasLast ? 0 : ritualIndex + 1;
    renderRitual();
    if (wasLast) showToast("La ronda puede empezar otra vez, cuando quieras.");
  });

  $("#next-idea").addEventListener("click", () => {
    ideaIndex = (ideaIndex + 1) % businessIdeas.length;
    $("#idea-text").textContent = businessIdeas[ideaIndex];
  });

  $$(".mood-choice").forEach(button => {
    button.addEventListener("click", () => {
      $$(".mood-choice").forEach(choice => {
        choice.setAttribute("aria-pressed", String(choice === button));
      });
      $("#mood-response").textContent = moodResponses[button.dataset.mood] || "La ronda está abierta.";
    });
  });

  const noteField = $("#private-note");
  const noteStatus = $("#note-status");

  function readPrivateNote() {
    try {
      const saved = window.localStorage.getItem("mate-de-por-medio:nota-v1");
      if (saved !== null) {
        noteField.value = saved;
        noteStatus.textContent = "Encontramos tu nota guardada en este navegador. Solo queda en este dispositivo.";
      }
    } catch (error) {
      storageAvailable = false;
      noteStatus.textContent = "Este navegador no permite guardar notas. Podés escribirla aquí, pero no quedará guardada al salir.";
    }
  }

  $("#save-note").addEventListener("click", () => {
    if (!storageAvailable) {
      noteStatus.textContent = "No se pudo guardar en este navegador. Copiá tu nota antes de salir si querés conservarla.";
      return;
    }
    try {
      window.localStorage.setItem("mate-de-por-medio:nota-v1", noteField.value);
      noteStatus.textContent = noteField.value.trim()
        ? "Tu nota quedó guardada en este dispositivo. No se envió a ningún sitio."
        : "Tu cuaderno quedó en blanco, listo para otra idea.";
      showToast("Tu nota quedó en tu cuaderno de este dispositivo.");
    } catch (error) {
      storageAvailable = false;
      noteStatus.textContent = "No se pudo guardar. El navegador puede tener el almacenamiento desactivado o lleno.";
    }
  });

  $("#clear-note").addEventListener("click", () => {
    noteField.value = "";
    try {
      window.localStorage.removeItem("mate-de-por-medio:nota-v1");
      noteStatus.textContent = "La nota se borró de este navegador.";
      showToast("Cuaderno en blanco, listo para otra idea.");
    } catch (error) {
      noteStatus.textContent = "La nota se borró del campo, pero el navegador no permitió actualizar el almacenamiento.";
    }
  });
  readPrivateNote();

  $("#next-fact").addEventListener("click", () => {
    factIndex = (factIndex + 1) % facts.length;
    $("#fact-text").textContent = facts[factIndex];
  });

  $("#another-story").addEventListener("click", () => {
    storyIndex = (storyIndex + 1) % stories.length;
    const story = stories[storyIndex];
    const copy = $(".notebook-copy");
    copy.querySelector(".story-tag").textContent = story.tag;
    copy.querySelector("h3").textContent = story.title;
    const paragraphs = copy.querySelectorAll("p:not(.eyebrow):not(.story-tag)");
    story.paragraphs.forEach((text, index) => {
      if (paragraphs[index]) paragraphs[index].textContent = text;
    });
    showToast("Una historia nueva para acompañar el mate.");
  });

  const choices = {
    cuento: "Un cuento siempre encuentra lugar en la ronda. El cuaderno ya quedó abierto.",
    tortas: "Algo rico, un mate calentito y una charla: combinación difícil de mejorar.",
    amigo: "Entonces corré un poquito la silla. Siempre hay lugar para una visita."
  };
  $$(".game-choice").forEach(button => {
    button.addEventListener("click", () => {
      $$(".game-choice").forEach(choice => {
        choice.setAttribute("aria-pressed", String(choice === button));
      });
      $("#game-response").textContent = choices[button.dataset.choice];
    });
  });

  function surprise() {
    const options = ["mate", "cuaderno", "ventana", "ronda", "jacinta", "toto", "plaza", "lola", "surprise"];
    openDetail(options[Math.floor(Math.random() * options.length)]);
  }
  $("#surprise-top").addEventListener("click", surprise);
  $("#donation-open").addEventListener("click", () => openDetail("donation"));

  $("#sound-toggle").addEventListener("click", () => {
    const paused = document.body.classList.toggle("motion-paused");
    $("#sound-toggle").setAttribute("aria-pressed", String(paused));
    $("#sound-toggle").querySelector("span").textContent = paused ? "Movimiento: pausado" : "Movimiento: suave";
    showToast(paused
      ? "El mundo se queda quietito un momento."
      : "El vapor y las hojas vuelven a moverse despacito.");
  });

  renderRitual();
})();
