var myCachName = 'my-cache-v1';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(myCachName)
        .then(cache =>
            cache.addAll[
                '/',
                '/img',
                '/js',
                '/css'
            ])
    )
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