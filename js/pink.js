/* ════ PINK GARDEN ════ */
let pinkInited=false;
function initPink(){
  if(pinkInited)return; pinkInited=true;
  [{id:'pf2',d:300},{id:'pf1',d:1600},{id:'pf3',d:2800}].forEach(({id,d})=>{
    setTimeout(()=>{ const el=document.getElementById(id); if(el) el.classList.add('bloomed'); },d);
  });
}
