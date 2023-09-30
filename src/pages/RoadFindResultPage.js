import { useEffect, useRef, useState } from 'react';

import { getRoadResultData } from 'API/getRoadResultData';
import { ALERT_MESSAGE } from 'utils/Constant';
import Map from 'components/RoadFind/Map';
import BusStationMarker from 'components/RoadFindResult/BusStationMarker';
import RoadInfo from 'components/RoadFindResult/RoadInfo';
import Loading from 'components/Common/Loading';
import Alert from 'components/RoadFind/Alert';

const RoadFindResult = () => {
	const { NO_FIND_STATION, ERROR_MESSAGE } = ALERT_MESSAGE;
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [stationData, setStationData] = useState([]);
	const [selectedStation, setSelectedStation] = useState();
	const [map, setMap] = useState();

	const handleButtonClick = () => {
		selectedStation(null);
	};

	useEffect(() => {
		getRoadResultData()
			.then((data) => setStationData(data))
			.catch(() => setError(true))
			.finally(() => setLoading(false));
	}, []);

	return (
		<main className='page'>
			<Map setMap={setMap} />
			{loading && <Loading />}
			{error && <Alert flag={ERROR_MESSAGE} />}
			{!selectedStation && stationData.length > 0 && <BusStationMarker />}
			{selectedStation && <RoadInfo stationInfo={selectedStation} />}
			<button onClick={handleButtonClick}>이전</button>
		</main>
	);
};
export default RoadFindResult;
