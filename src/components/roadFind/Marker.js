import { useEffect } from 'react';

/*global kakao*/
function Marker({ map, eventType, handleMarkerEvent }) {
	useEffect(() => {
		if (!map) return;
		console.log('map 생성 후 마커 생성');
		const marker = new kakao.maps.Marker({
			map: map,
			position: map.getCenter(),
			zIndex: 2
		});
		
		kakao.maps.event.addListener(map, eventType, function() {
			handleMarkerEvent(marker);
		});

		marker.setMap(map);

		return () => {
			kakao.maps.event.removeListener(marker, eventType, handleMarkerEvent);
			marker.setMap(null);
		};
	}, [map, eventType, handleMarkerEvent]);

	return null;
}

export default Marker;
