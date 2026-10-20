const stories=[
{category:"PARA LEER DESPACITO",title:"El banco de la plaza",paragraphs:["Hay bancos que conocen más secretos que cualquier diario. Este guardaba el de un hombre que todos los jueves llevaba dos mandarinas.","Una era para él. La otra, decía, por si alguien se sentaba a conversar. Durante años nadie preguntó por qué. Hasta que un jueves llegó una mujer con una noticia triste y se sentó a su lado. Él le alcanzó la mandarina sin decir una palabra.","A veces, acompañar es eso: hacer un lugarcito y quedarse."]},
{category:"UNA HISTORIA DE TODOS LOS DÍAS",title:"La vecina de las plantas",paragraphs:["En la cuadra todos conocían a Marta por sus plantas. Regaba temprano, hablaba con los malvones y rescataba cualquier maceta rota.","Un día alguien le preguntó cómo hacía para que todo creciera. Marta se encogió de hombros: “No crecen porque les hablo. Crecen porque vuelvo a mirarlas”.","Desde entonces, el vecino empezó a cuidar también su pequeño jardín. Y, de paso, a llamar más seguido a su hermano."]},
{category:"PARA GUARDAR EN EL BOLSILLO",title:"La tarde sin planes",paragraphs:["El sábado amaneció con una lista larga de cosas por hacer. Pero el viento movía las cortinas y el sol dibujaba una mancha tibia en el piso.","Él dejó la lista sobre la mesa y se sentó junto a la ventana. No pasó nada extraordinario. La pava silbó, el mate se lavó y una nube cruzó despacio.","A la noche, por primera vez en mucho tiempo, sintió que el día había sido suyo."]}
];
const facts=[
"En muchas casas, ofrecer el primer mate es una forma de recibir a alguien. No hace falta una ceremonia: alcanza con hacerle un lugar.",
"El mate se comparte con un ritmo propio. A veces la ronda sigue conversando y, otras veces, el silencio también tiene su lugar.",
"La palabra “mate” viene del quechua “mati”, nombre de la calabaza que se usaba como recipiente. Una palabra viajera para una costumbre muy nuestra.",
"En una ronda de mate, pasar el recipiente es también una pequeña coreografía de confianza: cada persona espera su turno y la charla sigue.",
"El mate puede acompañar mañanas de trabajo, tardes de visita y caminos largos. Cambia el paisaje, pero la pausa suele viajar con uno."
];
const tips=[
{title:"Aflojá los hombros.",text:"Soltá un poquito la mandíbula, apoyá bien los pies y respirá sin apurarte. No tenés que resolver todo en este instante."},
{title:"Hacé una cosa por vez.",text:"Elegí lo siguiente que realmente necesita tu atención. Lo demás puede esperar en una lista, no dando vueltas en tu cabeza."},
{title:"Tomá aire cerca de una ventana.",text:"Mirá un detalle de afuera: una nube, una rama, la luz en una pared. Quedate ahí unas respiraciones, sin exigirte sentir nada especial."},
{title:"Mandá ese mensajito.",text:"Si alguien se te vino a la cabeza, tal vez alcance con un “¿cómo andás?”. Los vínculos también se cuidan con gestos chiquitos."},
{title:"Date permiso de parar.",text:"Descansar no es un premio por terminar todo. A veces la pausa es lo que necesitás para seguir de una manera más amable."}
];
let storyIndex=0,factIndex=0,tipIndex=0;
const byId=id=>document.getElementById(id);
function showStory(){const s=stories[storyIndex];byId("story-category").textContent=s.category;byId("story-title").textContent=s.title;byId("story-text").replaceChildren(...s.paragraphs.map(text=>{const p=document.createElement("p");p.textContent=text;p.style.marginBottom="9px";return p;}));}
function nextStory(){storyIndex=(storyIndex+1)%stories.length;showStory();}
function nextFact(){factIndex=(factIndex+1)%facts.length;byId("fact-text").textContent=facts[factIndex];}
function nextTip(){tipIndex=(tipIndex+1)%tips.length;byId("tip-title").textContent=tips[tipIndex].title;byId("tip-text").textContent=tips[tipIndex].text;}
byId("next-story").addEventListener("click",nextStory);
byId("next-fact").addEventListener("click",nextFact);
byId("next-tip").addEventListener("click",nextTip);
const alias="ocarina.guitarra";
byId("support-alias").textContent=alias;
byId("copy-alias").addEventListener("click",async()=>{const status=byId("support-status-text");try{await navigator.clipboard.writeText(alias);status.textContent="Alias copiado. Gracias por pensar en este rinconcito; colaborar sigue siendo opcional.";}catch{const range=document.createRange();range.selectNodeContents(byId("support-alias"));const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);status.textContent="Seleccionamos el alias para que puedas copiarlo manualmente: Ctrl+C o Copiar.";}});
byId("year").textContent=new Date().getFullYear();
