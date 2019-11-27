self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cache)
        .then(cache =>
            cache.addAll(
                [
                    '/',
                    '/img',
                    '/js',
                    '/css'
                ]
            )
        )
    );

})