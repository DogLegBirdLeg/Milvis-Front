import React, { useEffect } from 'react';

/*global kakao*/

function Marker({ map, position, onClick }) {
	useEffect(() => {
		if (!map) return;

		const marker = new kakao.maps.Marker({
			position: new kakao.maps.LatLng(position.lat, position.lng),
		});

		marker.setMap(map);

		kakao.maps.event.addListener(marker, 'click', onClick);

		// Cleanup
		return () => {
			kakao.maps.event.removeListener(marker, 'click', onClick);
			marker.setMap(null);
		};
	}, [map, position, onClick]);

	return null; // This component does not render anything to the DOM itself.
}

export default Marker;
