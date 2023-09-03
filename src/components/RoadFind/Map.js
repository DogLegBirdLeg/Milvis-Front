import { useEffect, useRef } from 'react';
import { MAP_OPTIONS } from 'utils/Constant';

/*global kakao*/
function Map({ setMap }) {
	const mapRef = useRef();
	const { MAP_INIT_LAT, MAP_INIT_LNG, MAP_LEVEL } = MAP_OPTIONS;

	useEffect(() => {
		const mapOption = {
			center: new kakao.maps.LatLng(MAP_INIT_LAT, MAP_INIT_LNG),
			level: MAP_LEVEL,
		};
		const map = new kakao.maps.Map(mapRef.current, mapOption);
		setMap(map);

	}, [MAP_INIT_LAT, MAP_INIT_LNG, MAP_LEVEL, setMap]);

	return <div ref={mapRef} id='map' className='map'></div>;
}

export default Map;
