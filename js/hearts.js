/* ════ FLOATING HEARTS BACKGROUND ════ */
(function(){
  const c = document.getElementById('heartsCanvas');
  const ctx = c.getContext('2d');
  function resize(){ c.width = innerWidth; c.height = innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  const HEARTS = Array.from({length:28}, () => ({
    x: Math.random() * innerWidth,
    y: innerHeight + Math.random() * 200,
    size: 8 + Math.random() * 18,
    speed: 0.3 + Math.random() * 0.6,
    drift: (Math.random()-0.5) * 0.4,
    opacity: 0.06 + Math.random() * 0.12,
    rot: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random()-0.5) * 0.01,
    emoji: ['💖','💗','💕','💝','🌸','✦'][Math.floor(Math.random()*6)]
  }));

  function drawHeart(x,y,size,opacity,rot){
    ctx.save();
    ctx.translate(x,y); ctx.rotate(rot);
    ctx.font = size + 'px serif';
    ctx.globalAlpha = opacity;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('💕', 0, 0);
    ctx.restore();
  }

  function loop(){
    ctx.clearRect(0,0,c.width,c.height);
    HEARTS.forEach(h => {
      h.y -= h.speed;
      h.x += h.drift;
      h.rot += h.rotSpeed;
      if(h.y < -40){ h.y = c.height + 40; h.x = Math.random()*c.width; }
      drawHeart(h.x, h.y, h.size, h.opacity, h.rot);
    });
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ════ PETAL RAIN ════ */
(function(){
  const container = document.getElementById('heroPetals');
  const petals = ['🌸','🌺','🌷','✿','❀','💮'];
  for(let i=0;i<22;i++){
    const s = document.createElement('span');
    s.textContent = petals[Math.floor(Math.random()*petals.length)];
    const left = Math.random()*100;
    const dur  = 6 + Math.random()*10;
    const del  = Math.random()*8;
    const size = 10 + Math.random()*16;
    s.style.cssText = `left:${left}%;font-size:${size}px;animation-duration:${dur}s;animation-delay:${del}s;`;
    container.appendChild(s);
  }
})();
