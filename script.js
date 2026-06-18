(function(){
  const canvas = document.getElementById('grid');
  const ctx = canvas.getContext('2d');
  let nodes = [], W, H;
  const COUNT = 60;

  function resize(){
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function init(){
    nodes = [];
    for(let i=0;i<COUNT;i++){
      nodes.push({
        x: Math.random()*W,
        y: Math.random()*H,
        vx: (Math.random()-0.5)*0.35,
        vy: (Math.random()-0.5)*0.35,
        r: 1.5 + Math.random()*2
      });
    }
  }

  function draw(){
    ctx.clearRect(0,0,W,H);
    const MAX_DIST = 140;

    for(let i=0;i<nodes.length;i++){
      const a = nodes[i];
      for(let j=i+1;j<nodes.length;j++){
        const b = nodes[j];
        const dx = a.x-b.x, dy = a.y-b.y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if(dist < MAX_DIST){
          const alpha = (1-dist/MAX_DIST)*0.4;
          ctx.beginPath();
          ctx.moveTo(a.x,a.y);
          ctx.lineTo(b.x,b.y);
          ctx.strokeStyle = `rgba(0,212,255,${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    nodes.forEach(n=>{
      ctx.beginPath();
      ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
      ctx.fillStyle = 'rgba(0,212,255,0.7)';
      ctx.fill();
      n.x += n.vx;
      n.y += n.vy;
      if(n.x<0||n.x>W) n.vx *= -1;
      if(n.y<0||n.y>H) n.vy *= -1;
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', ()=>{ resize(); init(); });
  resize(); init(); draw();
})();
