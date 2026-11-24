// 보관한 판정선 이펙트 시안 (2.14 시안 B~E): 금 세공 링 · 유리 파편 · 성당 빛줄기 · 금선 별빛 — 스킨 tf에 'draftB'~'draftE'로 지정하면 사용
function tileFxAlt(TF,f,pt,x,y,lw){
  const big=f.big, c=f.c, col=hexA(c,1).replace(/rgba\(|,1\)/g,'');
  if(TF==='ring'){ const d=0.42, e=(pt-f.t)/d; if(e>1) return; const a=1-e, ez=1-Math.pow(1-e,3), M=METALS.gold;
    ctx.globalCompositeOperation='source-over';
    for(const [k0,rr0] of [[0,1],[0.08,0.72]]){ const ee=Math.max(0,Math.min(1,(e-k0)/(1-k0))); if(ee<=0) continue; const ez2=1-Math.pow(1-ee,3), rx=lw*(0.25+0.55*ez2)*rr0*(big?1.15:1), ry=rx*0.32;
      const mg=ctx.createLinearGradient(x-rx,y-ry,x+rx,y+ry); M.forEach((mc,i)=>mg.addColorStop(i/(M.length-1),mc));
      ctx.globalAlpha=(1-ee)*0.9; ctx.strokeStyle=mg; ctx.lineWidth=Math.max(0.8,1.8*(1-ee)); ctx.beginPath(); ctx.ellipse(x,y,rx,ry,0,0,TAU); ctx.stroke(); }
    const rx=lw*(0.25+0.55*ez)*(big?1.15:1), ry=rx*0.32;   // 네 방향 작은 다이아 반짝임
    for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){ const px=x+dx*rx, py=y+dy*ry, s=lw*0.05*(1-e*0.5)*(big?1.3:1);
      ctx.globalAlpha=a; ctx.fillStyle=dy?mixHex(c,'#fff4d6',0.5):'#f3d995'; ctx.beginPath(); ctx.moveTo(px,py-s); ctx.lineTo(px+s*0.5,py); ctx.lineTo(px,py+s); ctx.lineTo(px-s*0.5,py); ctx.closePath(); ctx.fill(); }
    ctx.globalCompositeOperation='lighter'; ctx.globalAlpha=a*0.5; const cg=ctx.createRadialGradient(x,y,0,x,y,lw*0.3); cg.addColorStop(0,`rgba(${col},.45)`); cg.addColorStop(1,`rgba(${col},0)`); ctx.fillStyle=cg; ctx.beginPath(); ctx.arc(x,y,lw*0.3,0,TAU); ctx.fill();
    ctx.globalAlpha=1; return; }
  if(TF==='shard'){ const d=0.55, e=(pt-f.t)/d; if(e>1||!f.sh) return; const a=1-e;
    ctx.globalCompositeOperation='lighter'; ctx.globalAlpha=a*0.45; const cg=ctx.createRadialGradient(x,y,0,x,y,lw*0.35); cg.addColorStop(0,`rgba(${col},.5)`); cg.addColorStop(1,`rgba(${col},0)`); ctx.fillStyle=cg; ctx.beginPath(); ctx.arc(x,y,lw*0.35,0,TAU); ctx.fill();
    ctx.globalCompositeOperation='source-over';
    if(e<0.35){ ctx.globalAlpha=(1-e/0.35)*0.7; ctx.strokeStyle='#e9c977'; ctx.lineWidth=1; ctx.beginPath(); for(let i=0;i<6;i++){ const an=i/6*TAU+0.3, rl=lw*(0.18+0.1*(i%2)); ctx.moveTo(x,y); ctx.lineTo(x+Math.cos(an)*rl,y+Math.sin(an)*rl*0.45); } ctx.stroke(); }   // 금 균열선
    const tt=pt-f.t;
    for(const q of f.sh){ const px=x+q.vx*lw*0.9*Math.sqrt(e)*1.2, py=y+q.vy*lw*0.9*Math.sqrt(e)*1.2+lw*1.6*e*e, s=lw*q.s;
      ctx.save(); ctx.translate(px,py); ctx.rotate(q.r+q.vr*tt); ctx.globalAlpha=a*0.95;
      ctx.beginPath(); for(let i=0;i<q.n;i++){ const an=i/q.n*TAU, rr_=s*(i%2?0.6:1); i?ctx.lineTo(Math.cos(an)*rr_,Math.sin(an)*rr_):ctx.moveTo(Math.cos(an)*rr_,Math.sin(an)*rr_); } ctx.closePath();
      const gg=ctx.createLinearGradient(-s,-s,s,s); gg.addColorStop(0,mixHex(q.c,'#ffffff',0.35)); gg.addColorStop(1,mixHex(q.c,'#000000',0.3)); ctx.fillStyle=gg; ctx.fill();
      ctx.strokeStyle='rgba(20,16,14,.9)'; ctx.lineWidth=1; ctx.stroke(); ctx.restore(); }
    ctx.globalAlpha=1; return; }
  if(TF==='ray'){ const d=0.5, e=(pt-f.t)/d; if(e>1) return; const a=e<0.12?e/0.12:1-(e-0.12)/0.88;
    ctx.globalCompositeOperation='lighter';
    const top=Math.max(0,y-lw*4.2), pw=lw*(0.5+0.12*e)*(big?1.2:1), pg=ctx.createLinearGradient(0,top,0,y);   // 위에서 떨어지는 창문 빛
    pg.addColorStop(0,'rgba(255,240,200,0)'); pg.addColorStop(0.7,`rgba(255,236,190,${a*0.16})`); pg.addColorStop(1,`rgba(${col},${a*0.28})`);
    ctx.fillStyle=pg; ctx.beginPath(); ctx.moveTo(x-pw*0.25,top); ctx.lineTo(x+pw*0.25,top); ctx.lineTo(x+pw/2,y); ctx.lineTo(x-pw/2,y); ctx.closePath(); ctx.fill();
    for(let i=0;i<5;i++){ const ph=((pt*0.6+i*0.37+f.lane*0.13)%1), py=top+(y-top)*ph, px=x+Math.sin(i*2.1+pt)*pw*0.25;   // 빛 속 먼지
      ctx.fillStyle=`rgba(255,240,210,${a*0.5*(1-Math.abs(ph-0.6))})`; ctx.fillRect(px,py,1.4,1.4); }
    ctx.globalCompositeOperation='source-over';   // 장미창 문양 도장
    const R=lw*(0.26+0.12*Math.sqrt(e))*(big?1.15:1); ctx.save(); ctx.translate(x,y); ctx.scale(1,0.36); ctx.globalAlpha=a*0.7; ctx.strokeStyle='#e9c977'; ctx.lineWidth=1.2;
    ctx.beginPath(); ctx.arc(0,0,R,0,TAU); ctx.stroke(); ctx.beginPath(); ctx.arc(0,0,R*0.45,0,TAU); ctx.stroke();
    ctx.beginPath(); for(let i=0;i<8;i++){ const an=i/8*TAU+e*0.6; ctx.moveTo(Math.cos(an)*R*0.45,Math.sin(an)*R*0.45); ctx.lineTo(Math.cos(an)*R,Math.sin(an)*R); } ctx.stroke();
    for(let i=0;i<8;i++){ const an=(i+0.5)/8*TAU+e*0.6; ctx.beginPath(); ctx.arc(Math.cos(an)*R*0.73,Math.sin(an)*R*0.73,R*0.13,0,TAU); ctx.stroke(); }
    ctx.restore(); ctx.globalAlpha=1; return; }
  // glint: 판정선을 따라 번지는 금선 + 가운데 네 갈래 별빛
  const d=0.3, e=(pt-f.t)/d; if(e>1) return; const a=1-e, ez=1-Math.pow(1-e,2);
  ctx.globalCompositeOperation='lighter';
  const gw=lw*(0.35+0.75*ez)*(big?1.25:1), gg=ctx.createLinearGradient(x-gw,0,x+gw,0); gg.addColorStop(0,'rgba(233,201,119,0)'); gg.addColorStop(0.5,`rgba(255,240,205,${a*0.85})`); gg.addColorStop(1,'rgba(233,201,119,0)');
  ctx.fillStyle=gg; ctx.fillRect(x-gw,y-0.75,gw*2,1.5);
  const s=lw*(0.16+0.1*Math.sin(Math.PI*Math.min(1,e*1.6)))*(big?1.3:1); ctx.fillStyle=`rgba(255,246,220,${a*0.9})`;
  ctx.beginPath(); ctx.moveTo(x,y-s); ctx.quadraticCurveTo(x,y,x+s*0.6,y); ctx.quadraticCurveTo(x,y,x,y+s*0.6); ctx.quadraticCurveTo(x,y,x-s*0.6,y); ctx.quadraticCurveTo(x,y,x,y-s); ctx.fill();
  const cg=ctx.createRadialGradient(x,y,0,x,y,lw*0.22); cg.addColorStop(0,`rgba(${col},${a*0.35})`); cg.addColorStop(1,`rgba(${col},0)`); ctx.fillStyle=cg; ctx.beginPath(); ctx.arc(x,y,lw*0.22,0,TAU); ctx.fill();
}
