if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js')
        .then(() => {
            console.log('Registerd service worker');
        })
        .catch(() => {
            console.log('could not register a service worker');
        });
}