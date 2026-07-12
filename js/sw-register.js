/**
 * Menstrupedia Comic Reader - Service Worker Registration
 * Enables offline reading capability
 */

// Register Service Worker for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('✅ Service Worker registered:', registration.scope);

                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // New content available
                            showUpdateNotification();
                        }
                    });
                });
            })
            .catch(error => {
                console.warn('⚠️ Service Worker registration failed:', error);
            });
    });

    // Listen for messages from service worker
    navigator.serviceWorker.addEventListener('message', event => {
        if (event.data.type === 'UPDATE_AVAILABLE') {
            showUpdateNotification();
        }
    });
}

function showUpdateNotification() {
    // Create update notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--secondary, #4ECDC4);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 0.9rem;
        animation: slideDown 0.3s ease;
    `;
    notification.innerHTML = `
        <span>🔄 New version available!</span>
        <button id="update-app" style="
            padding: 0.4rem 1rem;
            background: white;
            color: var(--secondary, #4ECDC4);
            border: none;
            border-radius: 20px;
            font-weight: 600;
            cursor: pointer;
        ">Update Now</button>
    `;

    document.body.appendChild(notification);

    document.getElementById('update-app').addEventListener('click', () => {
        window.location.reload();
    });

    setTimeout(() => {
        notification.remove();
    }, 10000);
}
