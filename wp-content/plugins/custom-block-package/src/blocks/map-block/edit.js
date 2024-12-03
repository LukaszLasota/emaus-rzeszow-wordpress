import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, RangeControl } from '@wordpress/components';
import { useEffect, useRef } from '@wordpress/element';
// import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import Leaflet JS
import './edit.scss'; // Import stylów edytora

const Edit = ({ attributes, setAttributes }) => {
    const { latitude, longitude, zoom, containerHeight } = attributes;
    const mapContainer = useRef(null); // Referencja do kontenera mapy
    const mapInstance = useRef(null); // Przechowuje instancję mapy
    const marker = useRef(null); // Przechowuje marker

    useEffect(() => {
        if (!mapContainer.current) {
            console.error('Kontener mapy nie został znaleziony.');
            return;
        }

        if (!mapInstance.current) {
            mapInstance.current = L.map(mapContainer.current).setView([latitude, longitude], zoom);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(mapInstance.current);

            marker.current = L.marker([latitude, longitude], { draggable: true }).addTo(mapInstance.current);

            marker.current.on('dragend', (e) => {
                const { lat, lng } = e.target.getLatLng();
                setAttributes({ latitude: lat, longitude: lng });
            });
        } else {
            mapInstance.current.setView([latitude, longitude]);
            mapInstance.current.setZoom(zoom);
        }
    }, [latitude, longitude, zoom]);

    return (
        <>
            <InspectorControls>
                <PanelBody title="Map Settings" initialOpen={true}>
                    <TextControl
                        label="Latitude"
                        value={latitude}
                        onChange={(value) => setAttributes({ latitude: parseFloat(value) || 0 })}
                    />
                    <TextControl
                        label="Longitude"
                        value={longitude}
                        onChange={(value) => setAttributes({ longitude: parseFloat(value) || 0 })}
                    />
                    <RangeControl
                        label="Zoom"
                        value={zoom}
                        onChange={(value) => setAttributes({ zoom: value })}
                        min={1}
                        max={18}
                    />
                    <RangeControl
                        label="Container Height (px)"
                        value={containerHeight}
                        onChange={(value) => setAttributes({ containerHeight: value })}
                        min={200}
                        max={800}
                    />
                </PanelBody>
            </InspectorControls>
            <div
                {...useBlockProps()}
                style={{
                    height: `${containerHeight}px`,
                    width: '100%',
                    position: 'relative',
                }}
            >
                <div
                    ref={mapContainer}
                    className="leaflet-container"
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'relative',
                    }}
                ></div>
            </div>
        </>
    );
};

export default Edit;
