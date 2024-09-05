// sw.js

self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};
    
    const title = data.title || 'Notificación Activa';
    const options = {
        body: data.body || 'Gracias por hacer clic en el botón.',
        icon: 'IcoLogo.ico' // Usa un ícono válido si es necesario
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});
