if ('serviceWorker' in navigator && 'PushManager' in window) {
    // console.log('Service Worker and Push is supported');
    navigator.serviceWorker.register('../sw')
        .then((registration) => {
            window.swreg = registration
            // console.log('service worker working');
        })
        .catch((err) => {
            console.log('service worker not working');
        });
} else console.log('serviceWorker is not supported');