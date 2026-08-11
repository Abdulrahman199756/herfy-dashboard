// Minimal service worker — only exists so the browser considers this page
// installable as an app. Always defers to the network; no offline caching,
// since the dashboard's data changes daily and stale caches would mislead.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
