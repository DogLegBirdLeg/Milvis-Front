import { useEffect, useState } from 'react';

import 'styles/road-find-page/road-find-page.css';
import { changeLocation } from 'utils/RoadFind/changeLocation';
import { ALERT_MESSAGE } from 'utils/Constant';
import Map from 'components/RoadFind/Map';
import Alert from 'components/RoadFind/Alert';
import DestinationInfo from 'components/RoadFind/DestinationInfo';
import Loading from 'components/Common/Loading';

/*global kakao*/
function RoadFindPage() {
	const [loading, setLoading] = useState(false);
	const [userLocation, setUserLocation] = useState('부산대학교');
	const [map, setMap] = useState(undefined);

	useEffect(() => {
		if (map) {
			kakao.maps.event.addListener(map, 'idle', () => {
				changeLocation(map, setUserLocation);
			});
		}
	}, [map]);

	return (
		<div className='road-find-page'>
			{loading && <Loading />}
			<div className='destination-info'>
				<DestinationInfo
					startPoint={'부산대학교'}
					destinationPoint={userLocation}
					setLoading={setLoading}
				/>
			</div>
			<div className='road-find-page__map'>
				<Alert flag={ALERT_MESSAGE.SELECT_PLACE} />
				<Map setMap={setMap} />
			</div>
		</div>
	);
}

export default RoadFindPage;
