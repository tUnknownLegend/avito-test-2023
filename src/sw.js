const CACHE_NAME = `avito-test-${new Date()}`;
const urls = [];
const imageRegRex = /.webp|.svg|.jpg|.jpeg|.gif|.png/;

/**
 * Subscribe on installation of service worker
 */
self.addEventListener('install', (event) => {
    console.log('ins');
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urls)),
    );
});

/**
 * Deletes cache record
 */
const deleteCache = async (key) => {
    await caches.delete(key);
};

/**
 * Deletes outdated cache
 */
const deleteOldCaches = async () => {
    const cacheKeepList = [CACHE_NAME];
    const keyList = await caches.keys();
    const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
    await Promise.all(cachesToDelete.map(deleteCache));
};

/**
 * Subscribe on activation of service worker
 */
self.addEventListener('activate', (event) => {
    event.waitUntil(deleteOldCaches());
    event.waitUntil(self.clients.claim());
});

/**
 * Subscribe on event of browser sending request to the WEB
 */
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') {
        return;
    }
    if (imageRegRex.test(event.request)) {
        event.respondWith(cacheFirst(event));
    } else if (event.request.path.includes('/game/')) {
        event.respondWith(networkFirst(event));
    }
});

/**
 * Using network data first
 * @param {Event} event - событие, вызвавшее обработчик
 */
async function networkFirst(event) {
    const {request} = event;
    const cache = await caches.open(CACHE_NAME);
    try {
        const response = await fetch(request);

        if (navigator.onLine) {
            await cache.put(request, response.clone());
        }
        return response;
    } catch {
        try {
            const cachedResponse = await cache.match(request);
            if (cachedResponse) {
                return cachedResponse;
            }
        } catch {
            const response = await event.preloadResponse;
            if (response) {
                return response;
            } else {
                return new Response(null, {status: 404, statusText: 'Not Found'});
            }
        }
    }
}

/**
 * Using cache data first
 * @param {Event} event - событие, вызвавшее обработчик
 */
async function cacheFirst(event) {
    const {request} = event;
    const cache = await caches.open(CACHE_NAME);
    try {
        const cachedResponse = await cache.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }

        const response = await event.preloadResponse;
        if (response) {
            return response;
        }
    } catch {
        try {
            const response = await fetch(request);

            if (navigator.onLine) {
                await cache.put(request, response.clone());
            }
            return response;
        } catch {
            return new Response(null, {status: 404, statusText: 'Not Found'});
        }
    }
}
