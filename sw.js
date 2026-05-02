// Charge Calculator service worker
// Strategy: network-first for HTML (so updates roll out instantly),
//           cache-first for static assets (icons, fonts, etc.)

const CACHE_VERSION = “v2.4.3”;
const CACHE_NAME = `ev-calc-${CACHE_VERSION}`;
const STATIC_ASSETS = [
“/manifest.json”,
“/icon-192.png”,
“/icon-512.png”,
“/apple-touch-icon.png”,
];

// ─── INSTALL: pre-cache static assets only ───────────────
self.addEventListener(“install”, (event) => {
event.waitUntil(
caches.open(CACHE_NAME)
.then((cache) => cache.addAll(STATIC_ASSETS))
.then(() => self.skipWaiting())  // activate immediately
);
});

// ─── ACTIVATE: delete ALL old caches, take control ───────
self.addEventListener(“activate”, (event) => {
event.waitUntil(
caches.keys()
.then((keys) => Promise.all(
keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
))
.then(() => self.clients.claim())  // control all open tabs immediately
);
});

// ─── FETCH: smart strategy by request type ───────────────
self.addEventListener(“fetch”, (event) => {
const req = event.request;
const url = new URL(req.url);

// Skip non-GET requests
if (req.method !== “GET”) return;

// Skip cross-origin (analytics, fonts, IP API, etc.)
if (url.origin !== self.location.origin) return;

// HTML pages → NETWORK FIRST (always check for updates, fall back to cache offline)
if (req.mode === “navigate” || req.headers.get(“accept”)?.includes(“text/html”)) {
event.respondWith(
fetch(req)
.then((response) => {
// Cache the fresh copy for offline use
const copy = response.clone();
caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
return response;
})
.catch(() => caches.match(req).then((c) => c || caches.match(”/”)))
);
return;
}

// Static assets → CACHE FIRST (fast, fall back to network)
event.respondWith(
caches.match(req).then((cached) => {
if (cached) return cached;
return fetch(req).then((response) => {
// Only cache successful basic responses
if (response.ok && response.type === “basic”) {
const copy = response.clone();
caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
}
return response;
});
})
);
});

// ─── MESSAGE: allow page to trigger immediate skipWaiting ──
self.addEventListener(“message”, (event) => {
if (event.data === “SKIP_WAITING”) {
self.skipWaiting();
}
});