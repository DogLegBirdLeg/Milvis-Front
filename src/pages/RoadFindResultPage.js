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
	const [stationData, setStationData] = useState([{}]);
	const [selectedStation, setSelectedStation] = useState();
	const [map, setMap] = useState();

	const handleButtonClick = () => {
		setSelectedStation(null);
	};

	useEffect(() => {
		if (locate.state === undefined) {
			setError(true);
			return;
		}
		const { toSchool, departPlace, arrivePlace } = locate.state;
		const direction = toSchool ? '부산대' : '밀양';
		console.log(locate.state);
	}, []);

	useEffect(() => {
		makeBusStationMarker(map, stationData, (station) => {
			setSelectedStation(station);
		});
	}, [stationData]);

	return (
		<main className='road-find-result-page'>
			<Map setMap={setMap} />
			{loading && <Loading />}
			{error && <Alert flag={ERROR_MESSAGE} />}
			{stationData.length === 0 && !loading && <Alert flag={NO_FIND_STATION} />}
			{selectedStation && <RoadInfo stationInfo={selectedStation} />}
			<button onClick={handleButtonClick}>이전</button>
		</main>
	);
};
export default RoadFindResult;
