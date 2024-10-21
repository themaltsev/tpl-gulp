importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );
  
  const time = 60 * 1000
  
  workbox.googleAnalytics.initialize();
  // Кэширование изображений
  
  
  // Кэширование изображений 30 дней
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.CacheFirst({
      cacheName: 'images-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 1000,
          maxAgeSeconds: time, 
        }),
      ],
    })
  );
  
  // Кэширование скриптов
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'script',
    new workbox.strategies.CacheFirst({
      cacheName: 'scripts-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 1,
          maxAgeSeconds: time, 
        }),
      ],
    })
  );
  
  // Кэширование CSS
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'style',
    new workbox.strategies.CacheFirst({
      cacheName: 'styles-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 1,
          maxAgeSeconds: time, 
        }),
      ],
    })
  );
  
  // Кэширование HTML страниц
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'document',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'html-cache',
    })
  );
  // Кэширование страницы /offline
  workbox.precaching.precacheAndRoute([
    { url: '/offline', revision: null },
    { url: '/search', revision: null },
    { url: '/remont-telefonov/', revision: null },
    { url: '/remont-telefonov/iphone/', revision: null }
  ]);
  
  
  
  // Редирект на страницу /offline при потере интернета
  // self.addEventListener('fetch', (event) => {
  //   event.respondWith(
  //     fetch(event.request).catch(() => caches.match('/offline'))
  //   );
  // });
  
  // Редирект на страницу /offline при потере интернета
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request).then((response) => {
          if (response) {
            return response;
          }
          return caches.match('/offline');
        });
      })
    );
  });
  
  
    