const departure = new Date('2026-07-08T08:00:00+02:00');
function updateCountdown(){
  const diff = departure - new Date();
  const total = Math.max(0, Math.floor(diff/1000));
  const days = Math.floor(total/86400);
  const hours = Math.floor((total%86400)/3600);
  const minutes = Math.floor((total%3600)/60);
  const seconds = total%60;
  [['days',days],['hours',hours],['minutes',minutes],['seconds',seconds]].forEach(([id,val])=>{
    const el=document.getElementById(id); if(el) el.textContent=String(val).padStart(id==='days'?1:2,'0');
  });
}
updateCountdown(); setInterval(updateCountdown,1000);

const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false')});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const profiles={
  anja:{name:'Anja',img:'anja.jpg',answers:[['Waarom ga ik mee?','Tekst volgt.'],['Waar kijk ik naar uit?','Tekst volgt.'],['Tele-Onthaal betekent voor mij','Tekst volgt.'],['Mijn quote','Tekst volgt.']]},
  freddy:{name:'Freddy',img:'freddy.jpg',answers:[['Waarom ga ik mee?','Ik wil nieuwe inzichten opdoen, mensen ontmoeten en samen met onze groep een inspirerende ervaring beleven. Het is een kans om te leren en die ervaring mee terug te brengen naar Tele-Onthaal.'],['Waar kijk ik naar uit?','Naar de ontmoetingen, de gesprekken en alles wat we samen zullen beleven. Ik hoop dat het een reis wordt die we nog lang zullen herinneren.'],['Tele-Onthaal betekent voor mij','Luisteren met aandacht, zonder te oordelen. Het is een plek waar een klein gebaar of een goed gesprek een groot verschil kan maken.'],['Mijn quote','De mooiste herinneringen maak je samen.']]},
  hilde:{name:'Hilde',img:'hilde.jpg',answers:[['Waarom ga ik mee?','Tekst volgt.'],['Waar kijk ik naar uit?','Tekst volgt.'],['Tele-Onthaal betekent voor mij','Tekst volgt.'],['Mijn quote','Tekst volgt.']]},
  hubert:{name:'Hubert',img:'hubert.jpg',answers:[['Waarom ga ik mee?','Tekst volgt.'],['Waar kijk ik naar uit?','Tekst volgt.'],['Tele-Onthaal betekent voor mij','Tekst volgt.'],['Mijn quote','Tekst volgt.']]},
  myriam:{name:'Myriam',img:'myriam.jpg',answers:[['Waarom ga ik mee?','Tekst volgt.'],['Waar kijk ik naar uit?','Tekst volgt.'],['Tele-Onthaal betekent voor mij','Tekst volgt.'],['Mijn quote','Tekst volgt.']]}
};
const dialog=document.getElementById('profileDialog');
const dialogContent=document.getElementById('dialogContent');
document.querySelectorAll('.profile').forEach(btn=>btn.addEventListener('click',()=>{
  const p=profiles[btn.dataset.profile]; if(!p) return;
  dialogContent.innerHTML=`<div class="dialog-head"><img src="${p.img}" alt="${p.name}"><h3>${p.name}</h3></div><div class="qa">${p.answers.map(([q,a])=>`<div><strong>${q}</strong><p>${a}</p></div>`).join('')}</div>`;
  dialog.showModal();
}));
document.querySelectorAll('.close-dialog').forEach(btn=>btn.addEventListener('click',()=>btn.closest('dialog').close()));

const aboutBtn=document.getElementById('aboutBtn'); const aboutDialog=document.getElementById('aboutDialog');
aboutBtn?.addEventListener('click',()=>aboutDialog.showModal());

const lightbox=document.getElementById('lightbox'); const lightboxImg=document.getElementById('lightboxImg');
document.querySelectorAll('.gallery-item').forEach(btn=>btn.addEventListener('click',()=>{lightboxImg.src=btn.dataset.full;lightbox.showModal();}));
document.querySelector('.close-lightbox')?.addEventListener('click',()=>lightbox.close());
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));
