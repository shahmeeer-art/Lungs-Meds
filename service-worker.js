// Simple cache-first service worker for offline support
const CACHE_NAME = 'lung-atlas-cache-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => {
      if(k !== CACHE_NAME) return caches.delete(k);
    })))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      if(res) return res;
      return fetch(event.request).then(fetchRes => {
        // optional: cache new requests (avoid for large binaries)
        return fetchRes;
      }).catch(()=> caches.match('index.html'));
    })
  );
});
