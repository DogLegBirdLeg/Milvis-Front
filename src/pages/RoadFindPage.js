import { useCallback, useEffect, useMemo, useState } from 'react';

import 'styles/road-find-page/road-find-page.css';
import { changeLocation } from 'utils/RoadFind/changeLocation';
import { ALERT_MESSAGE, MAP_OPTIONS } from 'utils/Constant';
import Map from 'components/RoadFind/Map';
import Loading from 'components/Common/Loading';
import Marker from 'components/RoadFind/Marker';
import Alert from 'components/RoadFind/Alert';
import DestinationInfo from 'components/RoadFind/DestinationInfo';
import CenterPoint from 'components/RoadFind/CenterPoint';
import { useNavigate } from 'react-router';

/*global kakao*/
function RoadFindPage() {
	const navigate = useNavigate();
	const eventTypes = useMemo(() => ['center_changed', 'click'], []);
	const [loading, setLoading] = useState(false);
	const [userLatLng, setUserLatLng] = useState({
		x: MAP_OPTIONS.MAP_INIT_LAT,
		y: MAP_OPTIONS.MAP_INIT_LNG,
	});
	const [userLocation, setUserLocation] = useState('부산대학교');
	const [map, setMap] = useState(undefined);

	const handleMarkerEvent = useCallback(
		(marker, position) => {
			if (!map) return;

			marker.setPosition(position);
			marker.setZIndex(3);
		},
		[map]
	);

	const handleRedrawEvent = useCallback(
		(circle, position) => {
			if (!map) return;

			circle.setPosition(position);
		},
		[map]
	);

	const moveResultPage = () => {
		navigate('/road-find-result', { state: userLatLng });
	};

	useEffect(() => {
		if (!map) return;
		eventTypes.forEach((event) => {
			kakao.maps.event.addListener(map, event, (mouseEvent) => {
				const position = mouseEvent ? mouseEvent.latLng : map.getCenter();
				console.log(position);
				setUserLatLng(position);
				changeLocation(position, setUserLocation);
			});
		});
	}, [map, eventTypes]);

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
				<Marker
					map={map}
					eventType={eventTypes}
					handleMarkerEvent={handleMarkerEvent}
				/>
				<Alert flag={ALERT_MESSAGE.SELECT_PLACE} />
				<CenterPoint
					map={map}
					eventType={eventTypes}
					handleRedrawEvent={handleRedrawEvent}
				/>
				<Map setMap={setMap} />
				<button onClick={moveResultPage}>다음</button>
			</div>
		</div>
	);
}

export default RoadFindPage;
