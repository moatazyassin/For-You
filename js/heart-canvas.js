/* ════ HEART CANVAS ════ */
let heartInited=false, heartColorScheme='green';
const HEART_COLORS={
  green: {primary:'#00ff88',particle:'#00ffaa',bg:'rgba(0,0,0,0.16)'},
  purple:{primary:'#cc44ff',particle:'#dd88ff',bg:'rgba(0,0,0,0.16)'},
  cyan:  {primary:'#00eeff',particle:'#88ffff',bg:'rgba(0,0,0,0.16)'},
  red:   {primary:'#ff3355',particle:'#ff88aa',bg:'rgba(0,0,0,0.16)'},
};
function setHeartColor(s){
  heartColorScheme=s;
  document.querySelectorAll('.h-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('hbtn-'+s).classList.add('active');
}
function initHeart(){
  if(heartInited)return; heartInited=true;
  const canvas=document.getElementById('heartCanvas');
  const ctx=canvas.getContext('2d');
  function resize(){ canvas.width=canvas.parentElement.clientWidth; canvas.height=canvas.parentElement.clientHeight-60; }
  resize(); window.addEventListener('resize',resize);
  const N=1800, particles=[];
  function hp(t){ const cx=canvas.width/2,cy=canvas.height/2+20,sc=Math.min(canvas.width,canvas.height)*0.28; return {x:cx+sc*16*Math.pow(Math.sin(t),3)/16,y:cy-sc*(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))/16}; }
  const path=[]; for(let i=0;i<360;i++) path.push(hp(i*Math.PI/180));
  for(let i=0;i<N;i++){ const t=path[Math.floor(Math.random()*path.length)]; particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,tx:t.x+(Math.random()-.5)*18,ty:t.y+(Math.random()-.5)*18,vx:0,vy:0,size:.8+Math.random()*1.6,alpha:.4+Math.random()*.6,speed:.04+Math.random()*.06,scatter:Math.random()>.85}); }
  let cometT=0, trail=[];
  function frame(){
    const col=HEART_COLORS[heartColorScheme];
    ctx.fillStyle=col.bg; ctx.fillRect(0,0,canvas.width,canvas.height);
    cometT=(cometT+1.8)%360;
    const cp=hp(cometT*Math.PI/180); trail.push({x:cp.x,y:cp.y}); if(trail.length>28) trail.shift();
    trail.forEach((tp,i)=>{ ctx.globalAlpha=(i/trail.length)*.9; ctx.fillStyle=col.primary; ctx.beginPath(); ctx.arc(tp.x,tp.y,(i/trail.length)*5,0,Math.PI*2); ctx.fill(); });
    ctx.globalAlpha=1; const g=ctx.createRadialGradient(cp.x,cp.y,0,cp.x,cp.y,14); g.addColorStop(0,col.primary); g.addColorStop(1,'transparent'); ctx.fillStyle=g; ctx.beginPath(); ctx.arc(cp.x,cp.y,14,0,Math.PI*2); ctx.fill();
    particles.forEach(p=>{ if(p.scatter){p.vx+=(Math.random()-.5)*.3;p.vy+=(Math.random()-.5)*.3;p.vx*=.96;p.vy*=.96;}else{p.vx+=(p.tx-p.x)*p.speed;p.vy+=(p.ty-p.y)*p.speed;p.vx*=.88;p.vy*=.88;} p.x+=p.vx;p.y+=p.vy; ctx.globalAlpha=p.alpha*.85; ctx.fillStyle=col.particle; ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2); ctx.fill(); });
    ctx.globalAlpha=1; requestAnimationFrame(frame);
  }
  frame();
}
