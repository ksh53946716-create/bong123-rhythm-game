// 오프라인 캐시: 게임 화면은 최신판 우선, 음악은 한 번 받으면 저장해서 재사용
const V='rhythm-20261125122123', SHELL=['./','./index.html','./fbk.bundle.js','./firebase-config.js','./manifest.json','./icons/app-192.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url); if(e.request.method!=='GET'||u.origin!==location.origin) return;
  if(u.pathname.endsWith('.mp3')){ e.respondWith(caches.open(V).then(async c=>{ const hit=await c.match(e.request); if(hit) return hit; const r=await fetch(e.request); if(r.ok) c.put(e.request,r.clone()); return r; })); return; }
  e.respondWith(fetch(e.request,{cache:'no-cache'}).then(r=>{ if(r.ok){ const cl=r.clone(); caches.open(V).then(c=>c.put(e.request,cl)); } return r; }).catch(()=>caches.match(e.request)));
});
