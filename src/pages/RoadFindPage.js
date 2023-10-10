import { useCallback, useEffect, useMemo, useState } from 'react';

import 'styles/road-find-page/road-find-page.css';
import { changeLocation } from 'utils/RoadFind/changeLocation';
import { ALERT_MESSAGE, MAP_OPTIONS } from 'utils/Constant';
import Map from 'components/RoadFind/Map';
import Marker from 'components/RoadFind/Marker';
import Alert from 'components/RoadFind/Alert';
import DestinationInfo from 'components/RoadFind/DestinationInfo';
import CenterPoint from 'components/RoadFind/CenterPoint';

/*global kakao*/
function RoadFindPage() {
	const { INIT_PLACE, MAP_INIT_LAT, MAP_INIT_LNG } = MAP_OPTIONS;
	const eventTypes = useMemo(() => ['center_changed', 'click'], []);
	const [userLatLng, setUserLatLng] = useState({
		lat: MAP_INIT_LAT,
		lng: MAP_INIT_LNG,
	});
	const [userLocation, setUserLocation] = useState(INIT_PLACE);
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
	useEffect(() => {
		if (!map) return;
		eventTypes.forEach((event) => {
			kakao.maps.event.addListener(map, event, (mouseEvent) => {
				const position = mouseEvent ? mouseEvent.latLng : map.getCenter();
				const { Ma: lat, La: lng } = position;

				setUserLatLng({ lat, lng });
				changeLocation(position, setUserLocation);
			});
		});
	}, [map, eventTypes]);

	return (
		<div className='road-find-page'>
			<div className='destination-info'>
				<DestinationInfo
					basePlace={INIT_PLACE}
					userPlace={userLocation}
					userLatLng={userLatLng}
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
			</div>
		</div>
	);
}

export default RoadFindPage;
