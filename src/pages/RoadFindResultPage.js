import { useEffect, useState } from 'react';

import 'styles/road-find-result-page/road-find-result.css';
import { getBusArriveTime } from 'API/getBusArriveTime';
import { ALERT_MESSAGE } from 'utils/Constant';
import { makeBusStationMarker } from 'utils/RoadFindResult/makeBusStationMarker';
import Map from 'components/RoadFind/Map';
import RoadInfo from 'components/RoadFindResult/RoadInfo';
import Loading from 'components/Common/Loading';
import Alert from 'components/RoadFind/Alert';
import { useLocation } from 'react-router';

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
		const { stationLatLng, reverseFlag } = locate.state;
		const { Ma: lat, La: lng } = stationLatLng;
		const direction = reverseFlag === true ? '부산대' : '밀양';
		getBusArriveTime(direction, lat, lng)
			.then((data) => setStationData(data.stations))
			.catch(() => setError(true))
			.finally(() => setLoading(false));
	}, []);

	useEffect(() => {
		makeBusStationMarker(map, stationData, (station) => {
			setSelectedStation(station);
		});
	}, [stationData]);

	// TODO: marker 에 Info window 표시하기
	// TODO: selectedStation 이 존재하면 마커 새로 표시하기
	// TODO: RoadInfo 에 선택된 버스 정류장 정보 전달하기
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
