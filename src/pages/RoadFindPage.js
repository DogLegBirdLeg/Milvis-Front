import 'styles/road-find-page/road-find-page.css';
import Map from 'components/RoadFind/Map';
import DestinationInfo from 'components/RoadFind/DestinationInfo';
import { useEffect, useState } from 'react';
import Loading from 'components/Common/Loading';
import { changeLocation } from 'utils/RoadFind/changeLocation';

/*global kakao*/
function RoadFindPage() {
	const [loading, setLoading] = useState(false);
	const [userLocation, setUserLocation] = useState('부산대학교');
	const [map, setMap] = useState(undefined);

	useEffect(() => {
		if (map) {
			kakao.maps.event.addListener(map, 'idle', () => {
				changeLocation(map, setUserLocation)
			});
		}
	}, [map]);

	return (
		<div className='road-find-page'>
			{loading && <Loading />}
			<Map setMap={setMap} />
			<div className='destination-info'>
				<DestinationInfo
					startPoint={'부산대학교'}
					destinationPoint={userLocation}
					setLoading={setLoading}
				/>
			</div>
		</div>
	);
}

export default RoadFindPage;
