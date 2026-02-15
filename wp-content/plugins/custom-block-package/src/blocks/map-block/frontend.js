import L from 'leaflet';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.map-container').forEach((mapElement) => {
        const latitude = parseFloat(mapElement.dataset.lat);
        const longitude = parseFloat(mapElement.dataset.lng);
        const zoom = parseInt(mapElement.dataset.zoom, 10);
        const popupText = mapElement.dataset.popup || 'Nasza lokalizacja';
        const iconUrl = mapElement.dataset.iconUrl;
        const shadowUrl = mapElement.dataset.shadowUrl;

        if (isNaN(latitude) || isNaN(longitude)) return;

        const map = L.map(mapElement).setView([latitude, longitude], zoom);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Configure marker icon from PHP-generated paths
        const markerOptions = {};
        if (iconUrl && shadowUrl) {
            markerOptions.icon = L.icon({
                iconUrl,
                shadowUrl,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41],
            });
        }

        const marker = L.marker([latitude, longitude], markerOptions).addTo(map);
        marker.bindPopup(popupText).openPopup();
    });
});
