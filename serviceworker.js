var staticCacheName = "pwa";

self.addEventListener("install", function (e) {
e.waitUntil(
	caches.open(staticCacheName).then(function (cache) {
	return cache.addAll([
		'/',
       '/index.html',
       '/images/icon-192x192.png',
       '/images/icon-512x512.png',
       '/manifest.json',
       '/serviceworker.js'
	]);
	})
);
});

self.addEventListener("fetch", function (event) {
console.log(event.request.url);

event.respondWith(
	caches.match(event.request).then(function (response) {
	return response || fetch(event.request);
	})
);
});
