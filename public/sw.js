self.addEventListener("install", (event) => {
	self.skipWaiting(); // Instantly activate new service worker
});

self.addEventListener("activate", (event) => {
	event.waitUntil(self.clients.claim()); // Claim all open clients immediately
});