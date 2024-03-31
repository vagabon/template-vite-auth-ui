self.addEventListener('push', (event) => {
  const data = event.data.json();
  const options = {
    body: data.notification.body,
    icon: '/images/logo.png',
    data: {
      url: data.data.url,
    },
  };

  event.waitUntil(self.registration.showNotification(data.notification.title, options));
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});
