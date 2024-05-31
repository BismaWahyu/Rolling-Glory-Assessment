const CACHE_NAME = 'my-pwa-cache-v1';

const urlsToCache = [
    '/',
    'index.html',
    'main.js',
    'manifest.json',
    'style.css',
    'logo-dummy.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

self.addEventListener('activate', event => {
    var cacheWhitelist = [CACHE_NAME];

    return Promise.all(
        caches.map(cacheName => {
            if(cacheWhitelist.indexOf(cacheName) === -1){
                return caches.delete(cacheName);
            }
        })
    )
})