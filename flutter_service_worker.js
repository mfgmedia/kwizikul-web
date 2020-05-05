'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c622d1d4da8a4b0f028c0890e4e220f4",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "6d613339b9503442c01a93585c446afd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/quiz_data/categories_old.json": "0065102f200f5931478bbe755fdac4c0",
"assets/quiz_data/conditionals.json": "5160d8625e9abb38b0cb38e3cac6648e",
"assets/quiz_data/ing_forms.json": "21bd8b1f4e8b000dc728ad8c2a5925fc",
"assets/quiz_data/modals.json": "2465717ef81789fac920118a01c81689",
"assets/quiz_data/quantifiers.json": "36373e3931f6fe45ff16c8a35ccf3836",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "9fa9935adf1728106a9d94b8d5311c82",
"/": "9fa9935adf1728106a9d94b8d5311c82",
"main.dart.js": "aa7ec580ab9768ef6cfb29cd09eb2ba8",
"manifest.json": "2b42b44cf86e0f6fe06d5006e7de8970"
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
