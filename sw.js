var myCachName = 'my-cache-v1';
var urlsToCache = [
    '/',
    '/img',
    '/js',
    '/css'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(myCachName)
        .then(function(cache) {
            console.log('a cache has been opend');
            return cache.addAll(urlsToCache);
        })
    );
});



self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );

});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cachName => {
                    if (cachName != myCachName) {
                        return caches.delete(cachName);
                    }
                })
            )
        })
    );
})