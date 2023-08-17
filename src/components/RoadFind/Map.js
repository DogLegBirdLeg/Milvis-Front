import { useEffect, useRef } from 'react';
import { MAP_OPTIONS } from 'utils/Constant';
import DestinationInfo from './DestinationInfo';

/*global kakao*/
function Map() {
	const mapRef = useRef();
	const { MAP_INIT_LAT, MAP_INIT_LNG, MAP_LEVEL } = MAP_OPTIONS;

	useEffect(() => {
    const mapOption = {
      center: new kakao.maps.LatLng(MAP_INIT_LAT, MAP_INIT_LNG),
      level: MAP_LEVEL,
    };
    new kakao.maps.Map(mapRef.current, mapOption);

  }, [MAP_INIT_LAT, MAP_INIT_LNG, MAP_LEVEL]);

	return (
		<div ref={mapRef} id='map' className='map'>
			<DestinationInfo />
		</div>
	);
}

export default Map;
