import React, { useEffect } from 'react';

/*global kakao*/
function Marker({ map,eventType, handleMarkerEvent }) {
	useEffect(() => {
		if (!map) return;
		const marker = new kakao.maps.Marker({
			map: map,
			position: map.getCenter(),
			zIndex: 2
		});
		
		eventType.forEach((event) => {
			kakao.maps.event.addListener(map, event, function(mouseEvent) {
				const position = mouseEvent ? mouseEvent.latLng : map.getCenter();
				handleMarkerEvent(marker, position);
			});
		})

		marker.setMap(map);

		return () => {
			kakao.maps.event.removeListener(marker, eventType, handleMarkerEvent);
			marker.setMap(null);
		};
	}, [map, eventType, handleMarkerEvent]);

	return null;
}

export default React.memo(Marker);
