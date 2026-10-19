(() => {
  "use strict";
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const dialog = $("#detail-dialog");
  const toast = $("#toast");
  let toastTimer;
  let ritualIndex = 0;
  let factIndex = 0;
  let storyIndex = 0;
  let storageAvailable = true;

  const ritualSteps = [
    {title:"Primero, calentamos el agua.", text:"La pava empieza a cantar bajito. Mientras tanto, buscamos el mate, la yerba y un lugar cómodo para sentarnos."},
    {title:"Acomodamos la yerba.", text:"Llenamos el mate hasta un poco más de la mitad y la acomodamos suavemente hacia un costado. Cada quien tiene su manera de preparar la ronda."},
    {title:"Llega el momento de cebar.", text:"Ponemos la bombilla y servimos el agua tibia primero, sin apurarnos. El agua no necesita hervir: el mate se disfruta mejor sin quemar la yerba."},
    {title:"Ahora sí: que empiece la ronda.", text:"Un mate, una charla, una pausa. Puede haber palabras, risas o un silencio compartido. Lo importante es tener tiempo para estar."}
  ];
  const facts = [
    "La palabra «mate» viene del quechua «mati», nombre de la calabaza que tradicionalmente se usaba como recipiente.",
    "El mate no tiene una sola manera correcta de prepararse: cada familia y cada persona suele tener sus costumbres.",
    "En una ronda tradicional, quien ceba suele alcanzar el mate a cada persona y recuperarlo para preparar el siguiente.",
    "La yerba mate proviene de las hojas de Ilex paraguariensis, una planta originaria de Sudamérica.",
    "El mate puede acompañar una charla, una lectura o un momento de silencio. A veces, compartir el tiempo es todo el ritual."
  ];
  const stories = [
    {tag:"CUENTITO DE LA RONDA · FICCIÓN", title:"El mate que esperaba", paragraphs:["Don Jacinto siempre dejaba un mate preparado junto a la ventana. Decía que nunca se sabía cuándo podía llegar alguien con ganas de conversar.","Una tarde apareció una vecina preocupada por su pequeño negocio. No hubo grandes discursos: compartieron unos mates, anotaron tres ideas en un papel y se rieron de una equivocación de cuentas.","Al despedirse, ella se llevó las ideas. Don Jacinto se quedó con algo mejor: la certeza de que una charla sencilla también puede abrir caminos."]},
    {tag:"CUENTITO DE LA RONDA · FICCIÓN", title:"La pava de los días lentos", paragraphs:["Toto tenía una pava vieja que tardaba un poquito más que las demás. Él decía que no estaba rota: simplemente conocía el secreto de no correr.","Mientras calentaba el agua, arreglaba una silla, dibujaba una idea o escuchaba el viento del patio. Un día se dio cuenta de que, sin proponérselo, había terminado todo lo que venía postergando.","Desde entonces, cuando alguien le decía que no tenía tiempo, Toto le ofrecía un mate y un minuto de silencio antes de responder."]},
    {tag:"CUENTITO DE LA RONDA · FICCIÓN", title:"Un dibujo para llevar", paragraphs:["Lola dibujaba las cosas pequeñas del pueblo: una maceta torcida, la sombra de un árbol, la taza despareja de la panadería.","Una mañana le regaló a Jacinta un dibujo de su jardín. «No se parece tanto», dijo Jacinta. «Se parece a como me siento cuando estoy acá», contestó Lola.","Jacinta colgó el papel junto a la puerta. Desde entonces, cada visitante dejó una pequeña marca: una flor, una palabra o un recuerdo."]}
  ];
  const details = {
    mate:{kicker:"El ritual",title:"Un mate, muchas costumbres",html:"<p>En cada casa hay pequeños secretos: la yerba preferida, la bombilla heredada, el primer mate que siempre ceba alguien y esa silla que todos saben que tiene dueño.</p><p>El mate es una infusión tradicional de Sudamérica preparada con hojas de yerba mate. Su ritual puede cambiar de una persona a otra; lo lindo es compartirlo a nuestra manera.</p><p class='small-label'>Una pregunta para la ronda</p><p>¿En tu casa el primer mate sale perfecto o siempre hay que ajustar algo?</p>"},
    cuaderno:{kicker:"El cuaderno",title:"Ideas que caben en una hoja",html:"<p>Una idea no necesita empezar grande. A veces alcanza con escribir qué sabés hacer, a quién podría ayudarle y qué primer paso podés dar con lo que ya tenés.</p><ul><li>Elegí una sola idea para probar.</li><li>Preguntale a una persona qué le resultaría útil.</li><li>Anotá qué aprendiste antes de gastar dinero.</li></ul><p>El cuaderno de esta ronda guarda historias, dibujos y consejos sencillos para llevar a la vida real.</p>"},
    ventana:{kicker:"La ventana",title:"Una mirada al Chañar",html:"<p>San Patricio del Chañar está en el norte de la Patagonia, en la provincia de Neuquén. El valle del río Neuquén y su actividad agrícola forman parte del paisaje y de la vida de la zona.</p><p>En este rincón iremos reuniendo postales, curiosidades y recuerdos locales. Cuando una historia sea inventada, lo vamos a decir; cuando sea un dato histórico, procuraremos identificar su fuente.</p><p class='small-label'>Una invitación</p><p>¿Qué paisaje, rincón o costumbre de tu lugar te gustaría guardar en un cuaderno?</p>"},
    ronda:{kicker:"Los vecinos",title:"En esta mesa siempre cabe alguien más",html:"<p>Elías recibe a quienes llegan. Jacinta sabe de plantas, Toto inventa cosas con lo que encuentra y Lola dibuja los detalles que nadie había mirado.</p><p>Son personajes de ficción, nacidos de la vida cotidiana y de las ganas de compartir. Cada uno tiene su manera de mirar el mundo, y todos pueden aportar algo a la ronda.</p><p>Las sillas están abiertas: elegí un rincón, escuchá una historia o seguí paseando.</p>"},
    jacinta:{kicker:"La casa de Jacinta",title:"El patio donde todo crece",html:"<p>Jacinta conversa con sus plantas mientras riega. Dice que para cuidar algo hay que aprender a mirarlo: reconocer cuándo necesita agua, cuándo necesita sol y cuándo conviene dejarlo tranquilo.</p><p>En su patio podés descubrir pequeñas curiosidades de hojas, semillas y flores. Los consejos sobre plantas siempre deben adaptarse a la especie y al clima de cada lugar.</p><p class='small-label'>Una pregunta de Jacinta</p><p>¿Qué planta te recuerda a alguien querido?</p>"},
    toto:{kicker:"El taller de Toto",title:"Inventar con lo que hay",html:"<p>Toto guarda frascos, retazos, maderas y cuadernos. No junta cosas por juntar: le gusta pensar qué problema pequeño podría resolver con ellas.</p><p>Su consejo para quien emprende es empezar por una prueba sencilla. Antes de comprar herramientas o materiales, averiguá si la idea realmente ayuda a alguien.</p><p>Hoy está intentando reparar una silla que cruje. Si escuchás un ruido raro, no te preocupes: es parte del taller.</p>"},
    plaza:{kicker:"La placita",title:"Una ronda sin reloj",html:"<p>En la placita nadie lleva la cuenta de cuánto tiempo pasó. A veces se comparte un cuento, a veces una receta, a veces solo se escucha el viento entre los árboles.</p><p>Elegí una de las historias del cuaderno, invitá a alguien imaginario a sentarse o descansá un momento antes de volver a pasear.</p>"},
    lola:{kicker:"El rincón de Lola",title:"Mirar como si fuera la primera vez",html:"<p>Lola lleva un lápiz en el bolsillo y dibuja las cosas que otros pasan por alto: una sombra, una baldosa rota, una nube con forma de animal.</p><p>Probá su juego: elegí un objeto que tengas cerca y buscá tres detalles que nunca habías notado. No hace falta dibujarlos bien. Solo mirarlos.</p><p>La curiosidad es una forma tranquila de descubrir el mundo.</p>"},
    donation:{kicker:"Una colaboración voluntaria",title:"La cajita solidaria",html:"<p>Si este rinconcito te hizo bien y algún día querés ayudar a sostenerlo, acá habrá una manera sencilla de colaborar.</p><p>La visita, los cuentos y las actividades siempre serán de acceso libre. No hace falta aportar para disfrutar del lugar.</p><p><strong>El alias de colaboración todavía no está configurado.</strong> No vamos a publicar ni inventar datos de pago. Cuando se agregue el alias correcto, la cajita podrá mostrarlo y ofrecer un botón para copiarlo.</p>"},
    surprise:{kicker:"Una sorpresa de la ronda",title:"Un pequeño recordatorio",html:"<p>No todo lo que vale la pena tiene que ser productivo. A veces, descansar, mirar por la ventana o compartir un mate es suficiente.</p><p>Si querés llevarte algo de este ratito, que sea permiso para ir un poco más despacio.</p>"}
  };
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
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
  $$("[data-open]").forEach(button => button.addEventListener("click", () => openDetail(button.dataset.open)));
  $("#dialog-done").addEventListener("click", closeDetail);
  dialog.addEventListener("click", event => { if (event.target === dialog) closeDetail(); });
  function renderRitual() {
    const step = ritualSteps[ritualIndex];
    $("#step-count").textContent = "MOMENTO " + (ritualIndex + 1) + " DE " + ritualSteps.length;
    $("#ritual-step-title").textContent = step.title;
    $("#ritual-step-text").textContent = step.text;
    $$(".step-dots span").forEach((dot, index) => dot.classList.toggle("active", index === ritualIndex));
    $("#ritual-back").disabled = ritualIndex === 0;
    $("#ritual-next").innerHTML = ritualIndex === ritualSteps.length - 1 ? "Volver al comienzo <span aria-hidden='true'>↺</span>" : "Siguiente momento <span aria-hidden='true'>→</span>";
    $("#ritual-kettle").classList.toggle("kettle-warm", ritualIndex > 0);
    $("#ritual-steam").classList.toggle("steam-strong", ritualIndex > 0);
  }
  $("#ritual-back").addEventListener("click", () => { ritualIndex = Math.max(0, ritualIndex - 1); renderRitual(); });
  $("#ritual-next").addEventListener("click", () => {
    ritualIndex = ritualIndex === ritualSteps.length - 1 ? 0 : ritualIndex + 1;
  
  const moodResponses = {
    calma: "Entonces no hace falta hacer nada más. Respirar, mirar el vapor y quedarse un ratito también es un plan.",
    idea: "Llevate una pregunta sencilla: ¿qué cosa pequeña podría mejorarle el día a alguien? Las ideas lindas suelen empezar así.",
    sonrisa: "Toto dice que hasta los días torcidos tienen una esquina graciosa. Pasá por el taller: seguro encontrás algo para sonreír.",
    curiosidad: "La curiosidad ya abrió la ventana. Buscá una hoja, una nube o una historia del pueblo: siempre hay algo que mirar de nuevo."
  };
  $(".mood-choice").forEach(button => button.addEventListener("click", () => {
    $(".mood-choice").forEach(choice => choice.setAttribute("aria-pressed", String(choice === button)));
    $("#mood-response").textContent = moodResponses[button.dataset.mood] || "La ronda está abierta.";
  }));
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

  renderRitual();
    if (ritualIndex === 0) showToast("La ronda puede empezar otra vez, cuando quieras.");
  });
  $("#next-fact").addEventListener("click", () => { factIndex = (factIndex + 1) % facts.length; $("#fact-text").textContent = facts[factIndex]; });
  $("#another-story").addEventListener("click", () => {
    storyIndex = (storyIndex + 1) % stories.length;
    const story = stories[storyIndex];
    const copy = $(".notebook-copy");
    copy.querySelector(".story-tag").textContent = story.tag;
    copy.querySelector("h3").textContent = story.title;
    const paragraphs = copy.querySelectorAll("p:not(.eyebrow):not(.story-tag)");
    story.paragraphs.forEach((text, index) => { if (paragraphs[index]) paragraphs[index].textContent = text; });
    showToast("Una historia nueva para acompañar el mate.");
  });
  const choices = {
    cuento:"Un cuento siempre encuentra lugar en la ronda. El cuaderno ya quedó abierto.",
    tortas:"Algo rico, un mate calentito y una charla: combinación difícil de mejorar.",
    amigo:"Entonces corré un poquito la silla. Siempre hay lugar para una visita."
  };
  $$(".game-choice").forEach(button => button.addEventListener("click", () => {
    $$(".game-choice").forEach(choice => choice.setAttribute("aria-pressed", String(choice === button)));
    $("#game-response").textContent = choices[button.dataset.choice];
  }));
  function surprise() {
    const options = ["mate","cuaderno","ventana","ronda","jacinta","toto","plaza","lola","surprise"];
    openDetail(options[Math.floor(Math.random() * options.length)]);
  }
  $("#surprise-top").addEventListener("click", surprise);
  $("#donation-open").addEventListener("click", () => openDetail("donation"));
  $("#sound-toggle").addEventListener("click", () => {
    const paused = document.body.classList.toggle("motion-paused");
    $("#sound-toggle").setAttribute("aria-pressed", String(paused));
    $("#sound-toggle").querySelector("span").textContent = paused ? "Movimiento: pausado" : "Movimiento: suave";
    showToast(paused ? "El mundo se queda quietito un momento." : "El vapor y las hojas vuelven a moverse despacito.");
  });
  renderRitual();
})();