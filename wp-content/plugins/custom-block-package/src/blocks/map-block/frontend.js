import L from 'leaflet';

document.addEventListener('DOMContentLoaded', () => {
    const mapElement = document.getElementById('map');

    if (mapElement) {
        const latitude = parseFloat(mapElement.getAttribute('data-lat'));
        const longitude = parseFloat(mapElement.getAttribute('data-lng'));
        const zoom = parseInt(mapElement.getAttribute('data-zoom'), 10);
        const popupText = mapElement.getAttribute('data-popup') || 'Nasza lokalizacja';

        const map = L.map(mapElement).setView([latitude, longitude], zoom);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const marker = L.marker([latitude, longitude]).addTo(map);
        marker.bindPopup(popupText).openPopup();
    }
});
