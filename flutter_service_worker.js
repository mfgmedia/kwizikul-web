'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ca042fbabb4e49db8de6ba36473c4e6d",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "6d613339b9503442c01a93585c446afd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/quiz_data/categories.json": "d450f491c0e2b27eba01dd9d63557314",
"assets/quiz_data/categories_old.json": "2d7821c530077328d71dcd5976ff7d06",
"assets/quiz_data/cephalosporine.json": "b15c6833be1f1e4dce3b201189b2875f",
"assets/quiz_data/kokken.json": "70ee940e7423ff6351543f101d352ebf",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a56465d94e800efb6a672c7479998c25",
"/": "a56465d94e800efb6a672c7479998c25",
"main.dart.js": "403386f7cf6acb3abac685fdc51501f5",
"manifest.json": "62153e63fe75294649a52f327e101bbe"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
