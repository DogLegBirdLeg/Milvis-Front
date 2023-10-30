import { useCallback, useEffect, useState } from 'react';

import Alert from 'components/RoadFind/Alert';
import { makeBusStationMarker } from 'utils/RoadFindResult/makeBusStationMarker';
import { ALERT_MESSAGE } from 'utils/Constant';
import RoadInfo from './RoadInfo';

/*global kakao*/
const Result = ({ map, departStation, arriveStation }) => {
	const { NO_FIND_STATION, SELECT_STATION } = ALERT_MESSAGE;
	const [selectedStation, setSelectedStation] = useState(null);

	const handleSelectStation = useCallback((station) => {
		setSelectedStation(station);
	}, []);

	useEffect(() => {
		makeBusStationMarker(
			map,
			departStation.stations,
			handleSelectStation,
			true
		);
	}, [map]);

	return (
		<>
			{departStation.stations.length === 0 && <Alert flag={NO_FIND_STATION} />}
			{!selectedStation && <Alert flag={SELECT_STATION} />}
			{selectedStation && (
				<RoadInfo
					map={map}
					selectedStation={selectedStation}
					departStation={departStation}
					arriveStation={arriveStation}
				/>
			)}
		</>
	);
};

export default Result;
