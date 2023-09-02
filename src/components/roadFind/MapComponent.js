import React, { useEffect, useRef } from 'react';

/*global kakao*/

function MapComponent({ lat, lng, level = 5, children }) {
    const mapRef = useRef(null);

    useEffect(() => {
        const mapContainer = document.getElementById('map-component-container'),
            mapOption = {
                center: new kakao.maps.LatLng(lat, lng),
                level: level
            };
        const map = new kakao.maps.Map(mapContainer, mapOption);
        mapRef.current = map;
    }, [lat, lng, level]);

    return (
        <div id="map-component-container" style={{ width: "600px", height: "400px" }}>
            {children && React.Children.map(children, child => {
                return React.cloneElement(child, { map: mapRef.current });
            })}
        </div>
    );
}

export default MapComponent;