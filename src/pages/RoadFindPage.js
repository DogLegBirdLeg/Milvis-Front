import { useCallback, useEffect, useState } from 'react';

import 'styles/road-find-page/road-find-page.css';
import { changeLocation } from 'utils/RoadFind/changeLocation';
import { ALERT_MESSAGE } from 'utils/Constant';
import Map from 'components/RoadFind/Map';
import Loading from 'components/Common/Loading';
import Marker from 'components/RoadFind/Marker';
import Alert from 'components/RoadFind/Alert';
import DestinationInfo from 'components/RoadFind/DestinationInfo';
import DestinationPoint from 'components/RoadFind/DestinationPoint';

/*global kakao*/
function RoadFindPage() {
	const [loading, setLoading] = useState(false);
	const [userLocation, setUserLocation] = useState('부산대학교');
	const [map, setMap] = useState(undefined);

	const handleMarkerEvent = useCallback((marker) => {
		if (!map) return;

		marker.setPosition(map.getCenter());
		marker.setZIndex(3);
	}, [map]);

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
				<Marker map={map} eventType={'center_changed'} handleMarkerEvent={handleMarkerEvent} />
				<Alert flag={ALERT_MESSAGE.SELECT_PLACE} />
				<DestinationPoint />
				<Map setMap={setMap} />
			</div>
		</div>
	);
}

export default RoadFindPage;
