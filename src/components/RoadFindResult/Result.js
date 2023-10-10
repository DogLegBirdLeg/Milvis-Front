import { useCallback, useEffect, useState } from 'react';

import Alert from 'components/RoadFind/Alert';
import { makeBusStationMarker } from 'utils/RoadFindResult/makeBusStationMarker';
import { ALERT_MESSAGE } from 'utils/Constant';
import RoadInfo from './RoadInfo';

const Result = ({ map, departStation, arriveStation }) => {
	const { NO_FIND_STATION } = ALERT_MESSAGE;
	const [selectedStation, setSelectedStation] = useState(null);
	console.log(arriveStation);
	console.log(departStation);

	const handleSelectStation = useCallback((station) => {
		setSelectedStation(station);
	}, []);

	useEffect(() => {
		makeBusStationMarker(map, departStation.stations, handleSelectStation);
		makeBusStationMarker(map, arriveStation.stations, handleSelectStation);
	}, []);

	return (
		<>
			{departStation.stations.length === 0 && <Alert flag={NO_FIND_STATION} />}
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
