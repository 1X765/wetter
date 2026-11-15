/* KRAFTPILOT Fahrwetter – Service Worker: App installierbar + läuft auch ohne Netz */
const VERSION = "kp-v2.5";
const SHELL = [
  "./", "./index.html", "./manifest.webmanifest", "./manifest.webmanifest?v=23",
  "./icons/icon-192-v23.png", "./icons/icon-512-v23.png", "./icons/icon-maskable-512-v23.png"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return; // Wetterdaten immer live
  if (e.request.mode === "navigate") {
    // Seite: erst Netz (für Updates), sonst gespeicherte Version
    e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put("./index.html", copy)); return r; })
      .catch(() => caches.match("./index.html")));
    return;
  }
  // Icons & Co.: erst Netz, sonst gespeicherte Version (so kommen neue Icons sofort an)
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return r; })
    .catch(() => caches.match(e.request)));
});
