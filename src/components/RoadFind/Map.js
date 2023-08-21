import { useEffect, useRef } from 'react';
import { changeLocation } from 'utils/RoadFind/changeLocation';
import { MAP_OPTIONS } from 'utils/Constant';

/*global kakao*/
function Map({ userLocation, setUserLocation }) {
	const mapRef = useRef();
	const { MAP_INIT_LAT, MAP_INIT_LNG, MAP_LEVEL } = MAP_OPTIONS;

	useEffect(() => {}, []);

	useEffect(() => {
		const mapOption = {
			center: new kakao.maps.LatLng(MAP_INIT_LAT, MAP_INIT_LNG),
			level: MAP_LEVEL,
		};
		const map = new kakao.maps.Map(mapRef.current, mapOption);

		kakao.maps.event.addListener(map, 'idle', () => {
      changeLocation(map, setUserLocation)
		});
	}, [MAP_INIT_LAT, MAP_INIT_LNG, MAP_LEVEL, setUserLocation]);

	return <div ref={mapRef} id='map' className='map'></div>;
}

export default Map;
