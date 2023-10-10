import { useEffect, useRef } from 'react';

/*global kakao*/
function Map({ setMap, center, level }) {
	const mapRef = useRef();
	const { lat, lng } = center;

	useEffect(() => {
		const mapOption = {
			center: new kakao.maps.LatLng(lat, lng),
			level: level,
		};
		const map = new kakao.maps.Map(mapRef.current, mapOption);
		setMap(map);
	}, [lat, lng, level, setMap]);

	return <div ref={mapRef} id='map' className='map'></div>;
}

export default Map;
