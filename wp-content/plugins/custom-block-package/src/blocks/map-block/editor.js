import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, RangeControl } from '@wordpress/components';
import { useEffect, useRef } from '@wordpress/element';
import L from 'leaflet';

const Edit = ({ attributes, setAttributes }) => {
    const { latitude, longitude, zoom } = attributes;
    const mapContainer = useRef(null);
    const mapInstance = useRef(null);
    const marker = useRef(null);

    // Inicjalizacja mapy przy pierwszym renderowaniu
    useEffect(() => {
        if (!mapContainer.current) return;

        if (!mapInstance.current) {
            mapInstance.current = L.map(mapContainer.current).setView([latitude, longitude], zoom);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapInstance.current);

            marker.current = L.marker([latitude, longitude], { draggable: true }).addTo(mapInstance.current);

            marker.current.on('dragend', function (e) {
                const { lat, lng } = e.target.getLatLng();
                setAttributes({ latitude: lat, longitude: lng });
            });

            // Odśwież mapę, aby poprawnie wyrenderować kafelki
            setTimeout(() => {
                mapInstance.current.invalidateSize();
            }, 0);
        }

        mapInstance.current.setView([latitude, longitude], zoom);
        marker.current.setLatLng([latitude, longitude]);
    }, [latitude, longitude, zoom]);


    // Ustawienia panelu bocznego
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
                </PanelBody>
            </InspectorControls>
            <div {...useBlockProps()}>
                <div ref={mapContainer} style={{ height: '300px' }}></div>
            </div>
        </>
    );
};

export default Edit;
