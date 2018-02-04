self.addEventListener ('install', function(e){
  e.waitUntil([
    openCache()
  ]);
});

function openCache(){
  caches.open('instant-inspiration').then(function(cache){
    return cache.addAll([
      '/',
      '/main.js',
      '/assets/css/main.css',
      '/assets/css/fonts/Roboto/RobotoSlab-Thin.woff',
      '/manifest.json',
      '/assets/icon/android-icon-144x144.png',
      '/assets/icon/android-icon-192x192.png',
      '/assets/icon/android-icon-36x36.png',
      '/assets/icon/android-icon-48x48.png',
      '/assets/icon/android-icon-72x72.png',
      '/assets/icon/android-icon-96x96.png',
      '/assets/icon/apple-icon-114x114.png',
      '/assets/icon/apple-icon-120x120.png',
      '/assets/icon/apple-icon-144x144.png',
      '/assets/icon/apple-icon-152x152.png',
      '/assets/icon/apple-icon-180x180.png',
      '/assets/icon/apple-icon-57x57.png',
      '/assets/icon/apple-icon-60x60.png',
      '/assets/icon/apple-icon-72x72.png',
      '/assets/icon/apple-icon-76x76.png',
      '/assets/icon/apple-icon-precomposed.png',
      '/assets/icon/apple-icon.png',
      '/assets/icon/browserconfig.xml',
      '/assets/icon/favicon-16x16.png',
      '/assets/icon/favicon-32x32.png',
      '/assets/icon/favicon-96x96.png',
      '/assets/icon/favicon.ico',
      '/assets/icon/ms-icon-144x144.png',
      '/assets/icon/ms-icon-150x150.png',
      '/assets/icon/ms-icon-310x310.png',
      '/assets/icon/ms-icon-70x70.png'
    ]);
  })
}

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
