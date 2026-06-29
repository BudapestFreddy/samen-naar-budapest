const target = new Date('2026-07-08T00:00:00+02:00');
const ids = ['days','hours','minutes','seconds'];
function setText(id, value){ const el = document.getElementById(id); if(el) el.textContent = value; }
function tick(){
  const now = new Date();
  let diff = target - now;
  const caption = document.querySelector('.count-caption');
  const title = document.querySelector('.count-card .section-kicker');
  if(diff <= 0){
    diff = 0;
    if(title) title.textContent = 'We zijn in Budapest!';
    if(caption) caption.textContent = 'geniet van de reis.';
  }
  const total = Math.floor(diff / 1000);
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  setText('days', days);
  setText('hours', String(hours).padStart(2,'0'));
  setText('minutes', String(minutes).padStart(2,'0'));
  setText('seconds', String(seconds).padStart(2,'0'));
}
tick();
setInterval(tick, 1000);
