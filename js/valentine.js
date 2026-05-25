/* ════ VALENTINE ════ */
let vMsgIdx=0, vFontSize=22, vInited=false;
const vMsgs=["Are you sure?","Really sure??","Think again! 🥺","Pls reconsider...","The bear is sad...","Last chance!","Come on!!","PLEASEEE 😭","OK fine... just kidding YES!"];
function initValentine(){
  if(vInited)return; vInited=true;
  vMsgIdx=0; vFontSize=22;
  document.getElementById('vcard').style.display='flex';
  document.getElementById('vyesScreen').style.display='none';
  document.getElementById('vnoBtn').textContent='No';
  document.getElementById('vyesBtn').style.fontSize='22px';
}
function vSpawn(cont,n){ for(let i=0;i<n;i++) setTimeout(()=>{ const h=document.createElement('span'); h.className='heart'; h.textContent=['💖','💗','💝','💕','❤️'][Math.floor(Math.random()*5)]; const dx=(Math.random()-.5)*120,dy=-(40+Math.random()*80); h.style.cssText=`left:${20+Math.random()*80}px;top:${20+Math.random()*60}px;--dx:${dx}px;--dy:${dy}px;font-size:${14+Math.random()*14}px`; cont.appendChild(h); setTimeout(()=>h.remove(),1600); },i*120); }
function vNo(){
  const b=document.getElementById('vbear'); b.className='bear run'; setTimeout(()=>b.className='bear',500);
  document.getElementById('vnoBtn').textContent=vMsgs[vMsgIdx%vMsgs.length]; vMsgIdx++;
  vFontSize=Math.min(vFontSize*1.45,80);
  document.getElementById('vyesBtn').style.fontSize=vFontSize+'px';
  document.getElementById('vyesBtn').style.padding=`${10+vMsgIdx*2}px ${24+vMsgIdx*3}px`;
}
function vYes(){
  vSpawn(document.getElementById('vhearts'),8);
  document.getElementById('vbear').className='bear happy';
  setTimeout(()=>{
    document.getElementById('vcard').style.display='none';
    const ys=document.getElementById('vyesScreen'); ys.style.display='flex';
    function k(){ vSpawn(document.getElementById('vwinHearts'),6); } k(); setInterval(k,1800);
  },600);
}
