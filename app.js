(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const data = window.MATE_CONTENT;
  if (!data) return;

  const steps = data.ritualSteps || [];
  const facts = data.facts || [];
  const tips = [
    "Antes de cebar, regalate un minuto para acomodar la mesa y estar presente. A veces, preparar el mate también es preparar una pausa.",
    "El agua no debe hervir: buscá una temperatura que cuide el sabor y que puedas disfrutar sin apuro.",
    "Si compartís una ronda nueva, preguntá con naturalidad cómo se manejan en esa casa. Cada familia tiene sus costumbres.",
    "No hace falta que el mate salga perfecto a la primera. Un poco de práctica y una charla amable hacen su parte.",
    "Si el mate se lava, no pasa nada: cambiá la yerba cuando quieras y seguí disfrutando el momento.",
    "Dejá un vaso de agua cerca. Acompañar el mate con agua también es una costumbre sencilla de cuidado.",
    "Si alguien no toma mate, ofrecé otra bebida. Compartir la mesa importa más que tomar lo mismo.",
    "Cuidá el mate y la bombilla con una limpieza adecuada y dejalos secar bien antes de guardarlos."
  ];

  let stepIndex = 0;
  let factIndex = 0;
  let tipIndex = 0;

  function renderStep() {
    if (!steps.length) return;
    const step = steps[stepIndex];
    $("step-count").innerHTML = String(stepIndex + 1).padStart(2, "0") + " <span>/ " + String(steps.length).padStart(2, "0") + "</span>";
    $("ritual-step-title").textContent = step.title;
    $("ritual-step-text").textContent = step.text;
    $("ritual-back").disabled = stepIndex === 0;
    $("ritual-next").textContent = stepIndex === steps.length - 1 ? "Volver al comienzo ↺" : "Siguiente →";
  }
  $("ritual-back").addEventListener("click", () => {
    stepIndex = Math.max(0, stepIndex - 1);
    renderStep();
  });
  $("ritual-next").addEventListener("click", () => {
    stepIndex = stepIndex === steps.length - 1 ? 0 : stepIndex + 1;
    renderStep();
  });
  $("next-fact").addEventListener("click", () => {
    if (!facts.length) return;
    factIndex = (factIndex + 1) % facts.length;
    $("fact-text").textContent = facts[factIndex];
  });
  $("next-tip").addEventListener("click", () => {
    tipIndex = (tipIndex + 1) % tips.length;
    $("tip-text").textContent = tips[tipIndex];
  });
  renderStep();
})();