import { useEffect, useRef, useState } from 'react';

import 'styles/road-find-result-page/road-find-result.css';
import { getRoadResultData } from 'API/getRoadResultData';
import { ALERT_MESSAGE } from 'utils/Constant';
import Map from 'components/RoadFind/Map';
import BusStationMarker from 'components/RoadFindResult/BusStationMarker';
import RoadInfo from 'components/RoadFindResult/RoadInfo';
import Loading from 'components/Common/Loading';
import Alert from 'components/RoadFind/Alert';

const RoadFindResult = () => {
	const { NO_FIND_STATION, ERROR_MESSAGE } = ALERT_MESSAGE;
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(true);
	const [stationData, setStationData] = useState([{}]);
	const [selectedStation, setSelectedStation] = useState();
	const [map, setMap] = useState();

	const handleButtonClick = () => {
		selectedStation(null);
	};

	// useEffect(() => {
	// 	getRoadResultData()
	// 		.then((data) => setStationData(data))
	// 		.catch(() => setError(true))
	// 		.finally(() => setLoading(false));
	// }, []);

	// TODO: BusStationMarker 에 버스 정류장 정보들 전달하기
	// TODO: selectedStation 이 존재하면 마커 새로 표시하기
	// TODO: RoadInfo 에 선택된 버스 정류장 정보 전달하기
	return (
		<main className='road-find-result-page'>
			<Map setMap={setMap} />
			{loading && <Loading />}
			{error && <Alert flag={ERROR_MESSAGE} />}
			{stationData.length > 0 ? (
				<BusStationMarker
					selectedStation={selectedStation}
					handleSelectStation={(station) => {
						setSelectedStation(station);
					}}
				/>
			) : (
				!loading && <Alert flag={NO_FIND_STATION} />
			)}
			{selectedStation && <RoadInfo stationInfo={selectedStation} />}
			<button onClick={handleButtonClick}>이전</button>
		</main>
	);
};
export default RoadFindResult;
