import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, RangeControl } from '@wordpress/components';
import { useEffect, useRef } from '@wordpress/element';
import L from 'leaflet';
import './edit.scss';

const Edit = ({ attributes, setAttributes }) => {
    const { latitude, longitude, zoom, containerHeight } = attributes;
    const mapContainer = useRef(null);
    const mapInstance = useRef(null);
    const marker = useRef(null);

    useEffect(() => {
        if (!mapContainer.current) {
            console.error('Kontener mapy nie został znaleziony.');
            return;
        }

        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconUrl: '/wp-content/plugins/custom-block-package/src/blocks/map-block/images/marker-icon.png',
            iconRetinaUrl: '/wp-content/plugins/custom-block-package/src/blocks/map-block/images/marker-icon-2x.png',
            shadowUrl: '/wp-content/plugins/custom-block-package/src/blocks/map-block/images/marker-shadow.png',
        });

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
