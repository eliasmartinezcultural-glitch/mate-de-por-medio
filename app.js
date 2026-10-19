(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const data = window.MATE_CONTENT || {};
  const stories = Array.isArray(data.stories) ? data.stories : [];
  const facts = Array.isArray(data.facts) ? data.facts : [];
  const tips = [
    {title:"No hace falta resolver todo hoy.",text:"Mientras se calienta el agua, aflojá los hombros. El mundo puede esperar lo que dura un mate."},
    {title:"Que el mate no sea otra carrera.",text:"Preparalo a tu manera y disfrutá el momento. No hay una única forma correcta de hacer una pausa."},
    {title:"Un paso chiquito también cuenta.",text:"Si tenés algo dando vueltas en la cabeza, anotá solo el primer paso posible. El resto puede esperar."},
    {title:"Compartir también es escuchar.",text:"A veces, una charla mejora cuando dejamos espacio para que la otra persona termine su historia."},
    {title:"Cuidá un ratito para vos.",text:"No tenés que ganarte el descanso haciendo todo primero. Una pausa breve también merece su lugar."},
    {title:"Lo imperfecto puede ser querido.",text:"Un dibujo torcido, una idea a medio hacer o un mate lavado no arruinan el momento. Seguí a tu manera."},
    {title:"Mirar cerca también es descubrir.",text:"Elegí una cosa cotidiana y mirala como si fuera la primera vez. La curiosidad no necesita ir lejos."},
    {title:"No todo necesita respuesta inmediata.",text:"Dejá el teléfono boca abajo unos minutos si te sirve. Algunas cosas se acomodan mejor cuando baja el ruido."}
  ];

  let storyIndex = 0;
  let factIndex = 0;
  let tipIndex = 0;

  function renderStory() {
    if (!stories.length) {
      $("story-title").textContent = "Un cuentito pronto llegará";
      $("story-text").textContent = "Estamos acomodando las historias para esta ronda.";
      return;
    }
    const story = stories[storyIndex];
    $("story-title").textContent = story.title || "Un cuentito de la ronda";
    $("story-tag").textContent = (story.tag || "Ficción breve").replace("CUENTITO DE LA RONDA · ", "");
    const copy = $("story-text");
    copy.replaceChildren();
    (story.paragraphs || []).forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      copy.appendChild(p);
    });
  }

  function renderFact() {
    if (!facts.length) return;
    $("fact-text").textContent = facts[factIndex];
  }

  function renderTip() {
    const tip = tips[tipIndex];
    $("tip-title").textContent = tip.title;
    $("tip-text").textContent = tip.text;
  }

  $("next-story").addEventListener("click", () => {
    storyIndex = stories.length ? (storyIndex + 1) % stories.length : 0;
    renderStory();
  });
  $("next-fact").addEventListener("click", () => {
    factIndex = facts.length ? (factIndex + 1) % facts.length : 0;
    renderFact();
  });
  $("next-tip").addEventListener("click", () => {
    tipIndex = (tipIndex + 1) % tips.length;
    renderTip();
  });

  // Único punto de configuración del aporte. Cargar aquí el alias confirmado;
  // mientras esté vacío, la web explica el estado y nunca inventa datos de pago.
  const COLLABORATION_ALIAS = "ocarina.guitarra";
  const alias = COLLABORATION_ALIAS.trim();
  const aliasNode = $("support-alias");
  const copyButton = $("copy-alias");
  const status = $("support-status-text");
  if (alias) {
    aliasNode.textContent = alias;
    copyButton.disabled = false;
    status.textContent = "La cajita está lista. Si te nace, podés copiar el alias y colaborar desde tu banco o billetera.";
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(alias);
        copyButton.textContent = "¡Alias copiado!";
        status.textContent = "Alias copiado. Gracias por acompañar este rinconcito, aportes o no.";
      } catch (_) {
        status.textContent = "No se pudo copiar automáticamente. Seleccioná el alias y copialo manualmente.";
      }
    });
  } else {
    copyButton.disabled = true;
    copyButton.title = "Se habilitará cuando se configure el alias confirmado.";
    status.textContent = "La cajita está preparada; falta cargar el alias confirmado para recibir aportes.";
  }

  renderStory();
  renderFact();
  renderTip();
})();