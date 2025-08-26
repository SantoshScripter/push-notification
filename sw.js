self.addEventListener("install", (event) => {
  console.log("Service Worker installed ✅");
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activated ✅");
});

// ✅ Required for iOS & Android notifications
self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("https://your-site-url.com") // replace with your site
  );
});
