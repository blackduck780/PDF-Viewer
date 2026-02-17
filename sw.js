const CACHE_NAME = 'jio-pdf-reader-v1';
const urlsToCache = [
  '/', 'index.html', 'pdfjs/web/viewer.html', 'pdfjs/web/viewer.css',
  'pdfjs/build/pdf.js', 'pdfjs/build/pdf.worker.js'  // Add all PDF.js files
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});
