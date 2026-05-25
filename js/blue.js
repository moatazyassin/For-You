/* ════ BLUE GARDEN ════ */
let blueInited=false;
function initBlue(){
  if(blueInited)return; blueInited=true;
  const scene=document.getElementById('blue-scene');
  [{t:'5%',l:'12%',s:'2px',d:'2.1s',dl:'0s'},{t:'8%',l:'25%',s:'1px',d:'3.2s',dl:'.5s'},
   {t:'3%',l:'40%',s:'2px',d:'2.5s',dl:'.2s'},{t:'12%',l:'55%',s:'1px',d:'1.8s',dl:'1s'},
   {t:'6%',l:'70%',s:'2px',d:'2.8s',dl:'.7s'},{t:'15%',l:'82%',s:'1px',d:'3.5s',dl:'.3s'},
   {t:'18%',l:'92%',s:'2px',d:'2.2s',dl:'1.2s'},{t:'25%',l:'35%',s:'2px',d:'2.6s',dl:'.4s'}
  ].forEach(s=>{
    const el=document.createElement('div'); el.className='star';
    el.style.cssText=`width:${s.s};height:${s.s};top:${s.t};left:${s.l};animation-duration:${s.d};animation-delay:${s.dl}`;
    scene.insertBefore(el,scene.firstChild);
  });
  if(!document.getElementById('bl-kf')){ const st=document.createElement('style'); st.id='bl-kf'; st.textContent='@keyframes bl-grow{0%{opacity:0;transform:scaleY(0)}60%{opacity:1}100%{opacity:1;transform:scaleY(1)}}'; document.head.appendChild(st); }
  [{id:'bfl2',d:400},{id:'bfl1',d:1800},{id:'bfl3',d:3000}].forEach(({id,d})=>{
    setTimeout(()=>{ const el=document.getElementById(id); el.style.opacity='1'; el.style.animation='bl-grow 1.4s cubic-bezier(0.34,1.56,0.64,1) forwards'; el.style.transformOrigin='bottom center'; },d);
  });
}
