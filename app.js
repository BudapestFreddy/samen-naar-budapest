const vertrek = new Date('2026-07-08T00:00:00+02:00');
function updateCountdown(){
  const now = new Date();
  let diff = vertrek - now;
  if(diff < 0) diff = 0;
  const sec = Math.floor(diff/1000);
  const days = Math.floor(sec/86400);
  const hours = Math.floor((sec%86400)/3600);
  const minutes = Math.floor((sec%3600)/60);
  const seconds = sec%60;
  const set=(id,val)=>{ const el=document.getElementById(id); if(el) el.textContent=String(val).padStart(2,'0'); };
  set('days',days); set('hours',hours); set('minutes',minutes); set('seconds',seconds);
}
updateCountdown(); setInterval(updateCountdown,1000);

const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuBtn?.addEventListener('click',()=>{
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const profiles = {
  anja: {name:'Anja', img:'assets/anja.jpg', answers:[
    ['Waarom ga ik mee?', 'Binnenkort komt hier Anja’s korte antwoord.'],
    ['Waar kijk ik naar uit?', 'Binnenkort ingevuld.'],
    ['Tele-Onthaal betekent voor mij', 'Binnenkort ingevuld.'],
    ['Mijn quote', 'Binnenkort ingevuld.']
  ]},
  freddy: {name:'Freddy', img:'assets/freddy.jpg', answers:[
    ['Waarom ga ik mee?', 'Binnenkort komt hier Freddy’s korte antwoord.'],
    ['Waar kijk ik naar uit?', 'Binnenkort ingevuld.'],
    ['Tele-Onthaal betekent voor mij', 'Binnenkort ingevuld.'],
    ['Mijn quote', 'Een herinnering die we samen bouwen.']
  ]},
  hilde: {name:'Hilde', img:'assets/hilde.jpg', answers:[
    ['Waarom ga ik mee?', 'Binnenkort komt hier Hilde’s korte antwoord.'],
    ['Waar kijk ik naar uit?', 'Binnenkort ingevuld.'],
    ['Tele-Onthaal betekent voor mij', 'Binnenkort ingevuld.'],
    ['Mijn quote', 'Binnenkort ingevuld.']
  ]},
  hubert: {name:'Hubert', img:'assets/hubert.jpg', answers:[
    ['Waarom ga ik mee?', 'Binnenkort komt hier Hubert’s korte antwoord.'],
    ['Waar kijk ik naar uit?', 'Binnenkort ingevuld.'],
    ['Tele-Onthaal betekent voor mij', 'Binnenkort ingevuld.'],
    ['Mijn quote', 'Binnenkort ingevuld.']
  ]},
  myriam: {name:'Myriam', img:'assets/myriam.jpg', answers:[
    ['Waarom ga ik mee?', 'Binnenkort komt hier Myriam’s korte antwoord.'],
    ['Waar kijk ik naar uit?', 'Binnenkort ingevuld.'],
    ['Tele-Onthaal betekent voor mij', 'Binnenkort ingevuld.'],
    ['Mijn quote', 'Binnenkort ingevuld.']
  ]}
};
const dialog = document.getElementById('profileDialog');
const dialogContent = document.getElementById('dialogContent');
document.querySelectorAll('.profile').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const p = profiles[btn.dataset.profile]; if(!p) return;
    dialogContent.innerHTML = `<div class="dialog-head"><img src="${p.img}" alt="${p.name}"><div><p class="eyebrow dark">Onze reisgroep</p><h3>${p.name}</h3></div></div><div class="qa">${p.answers.map(([q,a])=>`<div><strong>${q}</strong><p>${a}</p></div>`).join('')}</div>`;
    dialog.showModal();
  });
});
document.querySelector('.close-dialog')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click', e=>{ if(e.target === dialog) dialog.close(); });

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
document.querySelectorAll('.gallery-item').forEach(btn=>{
  btn.addEventListener('click',()=>{ lightboxImg.src = btn.dataset.full; lightbox.showModal(); });
});
document.querySelector('.close-lightbox')?.addEventListener('click',()=>lightbox.close());
lightbox?.addEventListener('click', e=>{ if(e.target === lightbox) lightbox.close(); });
