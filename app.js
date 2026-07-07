const vertrek = new Date('2026-07-08T08:00:00+02:00');
function updateCountdown(){
  const now = new Date();
  let diff = vertrek - now;
  const d = document.getElementById('days'), h = document.getElementById('hours'), m = document.getElementById('minutes');
  if(!d || !h || !m) return;
  if(diff <= 0){ d.textContent='0'; h.textContent='0'; m.textContent='0'; return; }
  const days = Math.floor(diff / 86400000); diff -= days * 86400000;
  const hours = Math.floor(diff / 3600000); diff -= hours * 3600000;
  const minutes = Math.floor(diff / 60000);
  d.textContent = days; h.textContent = hours; m.textContent = minutes;
}
updateCountdown(); setInterval(updateCountdown, 60000);

const people = {
  anja: {name:'Anja', img:'anja.jpg', tag:'Thuiskomen', blocks:[
    ['Waarom ga ik mee naar Budapest?', 'Ik kijk ernaar uit om met andere mensen, ook over de landsgrenzen heen, ideeën uit te wisselen en te ontdekken hoe zij gesprekken en moeilijke situaties aanpakken. Ik hoop daar veel uit te leren.'],
    ['Wat betekent Tele-Onthaal voor mij?', 'Tele-Onthaal betekent voor mij oproepers het gevoel geven dat ze kunnen thuiskomen op momenten waarop ze de weg kwijt zijn.']
  ]},
  freddy: {name:'Freddy', img:'freddy.jpg', tag:'Herinneringen maken', blocks:[
    ['Waarom ga ik mee naar Budapest?', 'Ik wil nieuwe inzichten opdoen, mensen ontmoeten en samen met onze groep een inspirerende ervaring beleven. Het is een kans om te leren en die ervaring mee terug te brengen naar Tele-Onthaal.'],
    ['Waar kijk ik het meest naar uit?', 'Naar de ontmoetingen, de gesprekken en alles wat we samen zullen beleven. Ik hoop dat het een reis wordt die we nog lang zullen herinneren.'],
    ['Wat betekent Tele-Onthaal voor mij?', 'Tele-Onthaal betekent voor mij luisteren met aandacht, zonder te oordelen. Het is een plek waar een goed gesprek soms een wereld van verschil kan maken.'],
    ['Mijn quote', 'De mooiste herinneringen maak je samen.']
  ]},
  hilde: {name:'Hilde', img:'hilde.jpg', tag:'VerMILDeren', blocks:[
    ['Waarom ga ik mee naar Budapest?', 'Samen onderweg zijn met gelijkgestemden, met “The Human Touch” als verbindend thema.'],
    ['Waar kijk ik het meest naar uit?', 'Buiten de muren kijken. Rijker worden. Ontmoeten. Genieten.'],
    ['Wat betekent Tele-Onthaal voor mij?', 'Geven en krijgen. Een voortdurende “work in progress”, met beide voeten op de grond.'],
    ['Mijn quote', 'Positieve energie. Een open blik. VerMILDeren.']
  ]},
  hubert: {name:'Hubert', img:'hubert.jpg', tag:'Rust en hoop', blocks:[
    ['Waarom ga ik mee naar Budapest?', 'Om onze Tele-Onthaal-afdeling op een waardige manier te vertegenwoordigen.'],
    ['Waar kijk ik het meest naar uit?', 'Ik kijk ernaar uit om te leren hoe we op een goede manier kunnen omgaan met de snel evoluerende AI-technieken en nieuwe media. Daarnaast hoop ik gelijkgestemde mensen uit andere landen te ontmoeten en ervaringen uit te wisselen.'],
    ['Wat betekent Tele-Onthaal voor mij?', 'Tele-Onthaal doet mij telkens opnieuw beseffen hoe goed wij het zelf hebben. Tegelijk geeft het mij de kans om, al is het maar met een klein steentje, iemand een moment van rust en hoop te bieden.'],
    ['Mijn quote', 'Na regen komt altijd zonneschijn.']
  ]},
  myriam: {name:'Myriam', img:'myriam.jpg', tag:'Wij reizen om te leren', blocks:[
    ['Waarom ga ik mee naar Budapest?', 'Een zoveelste verandering dient zich aan: ook Emo-AI doet zijn intrede. Dit congres lijkt me dé ideale gelegenheid om daar meer over te leren.'],
    ['Waar kijk ik het meest naar uit?', 'Ik kijk uit naar de lezingen, de congressfeer, de internationale contacten, het verkennen van Budapest en... de zigeunermuziek!'],
    ['Wat betekent Tele-Onthaal voor mij?', 'Tele-Onthaal is voor mij één groot uitdagend avontuur.'],
    ['Mijn quote', 'Wij reizen om te leren.']
  ]}
};

const personDialog = document.getElementById('personDialog');
const personContent = document.getElementById('personContent');
document.querySelectorAll('.person').forEach(btn => {
  btn.addEventListener('click', () => {
    const p = people[btn.dataset.person];
    if(!p) return;
    const blocks = p.blocks.map(([title, text], i) => {
      if(title === 'Mijn quote') return `<blockquote>“${text}”</blockquote>`;
      return `<h3>${title}</h3><p>${text}</p>`;
    }).join('');
    personContent.innerHTML = `<article class="modal-person"><header><img src="${p.img}" alt="${p.name}"><div><p class="kicker">${p.tag}</p><h2>${p.name}</h2></div></header>${blocks}</article>`;
    personDialog.showModal();
  });
});

const compassDialog = document.getElementById('compassDialog');
document.getElementById('compassBtn')?.addEventListener('click', () => compassDialog.showModal());
document.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', () => btn.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', e => { if(e.target === dialog) dialog.close(); }));
