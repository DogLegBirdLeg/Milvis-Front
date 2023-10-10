import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import 'styles/road-find-result-page/road-find-result.css';
import { getBusArriveTime } from 'API/getBusArriveTime';
import { ALERT_MESSAGE, MAP_OPTIONS } from 'utils/Constant';
import Map from 'components/RoadFind/Map';
import Result from 'components/RoadFindResult/Result';
import Loading from 'components/Common/Loading';
import Alert from 'components/RoadFind/Alert';

const RoadFindResult = () => {
	const locate = useLocation();
	const { ERROR_MESSAGE } = ALERT_MESSAGE;
	const { MAP_INIT_LAT, MAP_INIT_LNG, RESULT_MAP_LEVEL } = MAP_OPTIONS;

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const [mapCenter, setMapCenter] = useState({
		lat: MAP_INIT_LAT,
		lng: MAP_INIT_LNG,
	});
	const [departStation, setDepartStation] = useState(null);
	const [arriveStation, setArriveStation] = useState(null);
	const [selectedStation, setSelectedStation] = useState(null);
	const [map, setMap] = useState();

	const getPlaceStation = async (toSchool, schoolPlace, userPlace) => {
		const depart = await getBusArriveTime(
			toSchool ? '부산대' : '밀양',
			toSchool ? userPlace.lat : schoolPlace.lat,
			toSchool ? userPlace.lng : schoolPlace.lng
		);
		const arrive = await getBusArriveTime(
			toSchool ? '밀양' : '부산대',
			toSchool ? schoolPlace.lat : userPlace.lat,
			toSchool ? schoolPlace.lng : userPlace.lng
		);

		if (depart && arrive) {
			setDepartStation({
				...depart,
				placeName: toSchool ? userPlace.placeName : schoolPlace.placeName,
			});
			setArriveStation({
				...arrive,
				placeName: toSchool ? schoolPlace.placeName : userPlace.placeName,
			});
			setMapCenter({
				lat: toSchool ? userPlace.lat : schoolPlace.lat,
				lng: toSchool ? userPlace.lng : schoolPlace.lng,
			});
		}
	};

	useEffect(() => {
		if (locate.state === undefined) {
			setError(true);
			return;
		}
		const { toSchool, schoolPlace, userPlace } = locate.state;
		getPlaceStation(toSchool, schoolPlace, userPlace);
	}, []);

	return (
		<main className='road-find-result-page'>
			{mapCenter && (
				<Map setMap={setMap} center={mapCenter} level={RESULT_MAP_LEVEL} />
			)}
			{loading && <Loading />}
			{error && <Alert flag={ERROR_MESSAGE} />}
			{!loading && departStation && arriveStation && (
				<Result
					map={map}
					departStation={departStation}
					arriveStation={arriveStation}
					handleSelectStation={(marker) => {
						setSelectedStation(marker);
					}}
				/>
			)}
		</main>
	);
};
export default RoadFindResult;
