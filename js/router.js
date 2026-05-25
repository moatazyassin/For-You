/* ════ ROUTER ════ */
let currentPage = 'home';

function goHome(){
  showPage('home');
}

function showPage(id){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  currentPage = id;
  const navBack  = document.getElementById('navBack');
  const navTitle = document.getElementById('navTitle');
  if(id==='home'){
    navBack.style.display='none';
    navTitle.textContent='';
  } else {
    navBack.style.display='block';
    const p = PROJECTS.find(x=>x.id===id);
    navTitle.textContent = p ? p.title : '';
    navTitle.style.color = p ? p.navColor : 'var(--muted)';
    navTitle.style.textShadow = p ? `0 0 12px ${p.navColor}66` : '';
  }
  window.scrollTo(0,0);
  if(id==='orange')   initOrange();
  if(id==='blue')     initBlue();
  if(id==='valentine')initValentine();
  if(id==='pink')     initPink();
  if(id==='heart')    initHeart();
  if(id==='eid')      initEid();
}
