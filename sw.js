importScripts('./uv/uv.sw.js');

// Auto-inject cookie credentials to prevent the black redirect screen loop
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(clients.claim()));

const sw = new UVServiceWorker();

self.addEventListener('fetch', event => {
    event.respondWith(
        sw.fetch(event)
    )
});