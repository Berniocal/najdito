const CACHE_VERSION = 'dobble-dual-mode-v20';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './firebase-config.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-192.png',
  './icons/maskable-512.png',
  './symbols/e00.png',
  './symbols/e01.png',
  './symbols/e02.png',
  './symbols/e03.png',
  './symbols/e04.png',
  './symbols/e05.png',
  './symbols/e06.png',
  './symbols/e07.png',
  './symbols/e08.png',
  './symbols/e09.png',
  './symbols/e10.png',
  './symbols/e11.png',
  './symbols/e12.png',
  './symbols/e13.png',
  './symbols/e14.png',
  './symbols/e15.png',
  './symbols/e16.png',
  './symbols/e17.png',
  './symbols/e18.png',
  './symbols/e19.png',
  './symbols/e20.png',
  './symbols/e21.png',
  './symbols/e22.png',
  './symbols/e23.png',
  './symbols/e24.png',
  './symbols/e25.png',
  './symbols/e26.png',
  './symbols/e27.png',
  './symbols/e28.png',
  './symbols/e29.png',
  './symbols/e30.png',
  './symbols/e31.png',
  './symbols/e32.png',
  './symbols/e33.png',
  './symbols/e34.png',
  './symbols/e35.png',
  './symbols/e36.png',
  './symbols/e37.png',
  './symbols/e38.png',
  './symbols/e39.png',
  './symbols/e40.png',
  './symbols/e41.png',
  './symbols/e42.png',
  './symbols/e43.png',
  './symbols/e44.png',
  './symbols/e45.png',
  './symbols/e46.png',
  './symbols/e47.png',
  './symbols/e48.png',
  './symbols/e49.png',
  './symbols/e50.png',
  './symbols/e51.png',
  './symbols/e52.png',
  './symbols/e53.png',
  './symbols/e54.png',
  './symbols/e55.png',
  './symbols/e56.png',
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE_VERSION).then(cache => cache.put(req, copy)).catch(()=>{});
      return res;
    }).catch(() => cached))
  );
});
