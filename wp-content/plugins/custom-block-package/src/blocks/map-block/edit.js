import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, RangeControl } from '@wordpress/components';
import { useEffect, useRef } from '@wordpress/element';
import L from 'leaflet';
import './edit.scss';

const Edit = ({ attributes, setAttributes }) => {
    const { latitude, longitude, zoom, containerHeight, popupText } = attributes;
    const mapContainer = useRef(null);
    const mapInstance = useRef(null);
    const marker = useRef(null);

    const blockProps = useBlockProps();

    useEffect(() => {
        if (!mapContainer.current) {
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
            marker.current.bindPopup(popupText);

            marker.current.on('dragend', (e) => {
                const { lat, lng } = e.target.getLatLng();
                setAttributes({ latitude: lat, longitude: lng });
            });

        } else {
            mapInstance.current.setView([latitude, longitude]);
            mapInstance.current.setZoom(zoom);
            marker.current.setLatLng([latitude, longitude]);
            marker.current.getPopup().setContent(popupText);
        }
    }, [latitude, longitude, zoom, popupText]);

    return (
        <>
            <InspectorControls>
                <PanelBody title="Ustawienia mapy" initialOpen={true}>
                    <TextControl
                        label="Szerokość geograficzna"
                        value={latitude}
                        onChange={(value) => setAttributes({ latitude: parseFloat(value) || 0 })}
                    />
                    <TextControl
                        label="Długość geograficzna"
                        value={longitude}
                        onChange={(value) => setAttributes({ longitude: parseFloat(value) || 0 })}
                    />
                    <RangeControl
                        label="Powiększenie"
                        value={zoom}
                        onChange={(value) => setAttributes({ zoom: value })}
                        min={1}
                        max={18}
                    />
                    <RangeControl
                        label="Wysokość kontenera (px)"
                        value={containerHeight}
                        onChange={(value) => setAttributes({ containerHeight: value })}
                        min={200}
                        max={800}
                    />
                    <TextControl
                        label="Treść popupu"
                        value={popupText}
                        onChange={(value) => setAttributes({ popupText: value })}
                    />
                </PanelBody>
            </InspectorControls>
            <div
                {...blockProps}
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
