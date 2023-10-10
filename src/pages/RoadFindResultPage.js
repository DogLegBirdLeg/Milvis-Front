import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import 'styles/road-find-result-page/road-find-result.css';
import { getBusArriveTime } from 'API/getBusArriveTime';
import { ALERT_MESSAGE } from 'utils/Constant';
import { makeBusStationMarker } from 'utils/RoadFindResult/makeBusStationMarker';
import Map from 'components/RoadFind/Map';
import RoadInfo from 'components/RoadFindResult/RoadInfo';
import Loading from 'components/Common/Loading';
import Alert from 'components/RoadFind/Alert';

const RoadFindResult = () => {
	const locate = useLocation();
	const { NO_FIND_STATION, ERROR_MESSAGE } = ALERT_MESSAGE;
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [departStation, setDepartStation] = useState({});
	const [arriveStation, setArriveStation] = useState({});
	const [selectedStation, setSelectedStation] = useState({});
	const [map, setMap] = useState();

	// 1. 출발 정류장을 알려주는 시스템
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
				stationName: arrive.name,
				placeName: toSchool ? schoolPlace.placeName : userPlace.placeName,
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
			<Map setMap={setMap} />
			{loading && <Loading />}
			{error && <Alert flag={ERROR_MESSAGE} />}
			{/* {stationData.length === 0 && !loading && <Alert flag={NO_FIND_STATION} />} */}
			{selectedStation && <RoadInfo stationInfo={selectedStation} />}
			<button
				onClick={() => {
					setSelectedStation(null);
				}}>
				이전
			</button>
		</main>
	);
};
export default RoadFindResult;
