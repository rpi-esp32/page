var staticCacheName = "pwa";

const assets = [
"/",
"/index.html", 
"https://pyscript.net/alpha/pyscript.css", 
"https://pyscript.net/alpha/pyscript.js",
"src/main.py",
"src/main.js",
"images/icon-192x192.png",
"images/icon-512x512.png",
]


self.addEventListener("install", function (e) {
e.waitUntil(
	caches.open(staticCacheName).then(function (cache) {
	return cache.addAll(assets);
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

