/* ════ EID MUBARAK ════ */
function initEid(){
  const page = document.getElementById('page-eid');
  page.classList.remove('eid-go');
  void page.offsetHeight; // force reflow so animations restart on every visit
  page.classList.add('eid-go');
  /* parallax tilt */
  const card = document.getElementById('eidCard');
  if(card._eidReady) return;
  card._eidReady = true;
  let rafId=null, tx=0, ty=0, cx=0, cy=0;
  function lerp(a,b,t){return a+(b-a)*t;}
  function tick(){
    cx=lerp(cx,tx,0.08); cy=lerp(cy,ty,0.08);
    card.style.transform=`perspective(900px) rotateX(${cy}deg) rotateY(${cx}deg) translateZ(4px)`;
    rafId=requestAnimationFrame(tick);
  }
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    tx= ((e.clientX-(r.left+r.width/2)) /(r.width/2))*6;
    ty=-((e.clientY-(r.top+r.height/2))/(r.height/2))*6;
    if(!rafId) tick();
  });
  card.addEventListener('mouseleave',()=>{
    tx=0; ty=0;
    setTimeout(()=>{cancelAnimationFrame(rafId);rafId=null;card.style.transform='';},800);
  });
  card.addEventListener('touchstart',()=>{
    card.style.transition='transform 0.4s cubic-bezier(0.23,1,0.32,1)';
    card.style.transform='perspective(900px) translateZ(10px) scale(1.01)';
  },{passive:true});
  card.addEventListener('touchend',()=>{ card.style.transform=''; });
}
