import Alert from 'components/RoadFind/Alert';
import { makeBusStationMarker } from 'utils/RoadFindResult/makeBusStationMarker';
import { ALERT_MESSAGE } from 'utils/Constant';
import { useEffect } from 'react';

const Result = ({ map, departStation, arriveStation, handleSelectStation }) => {
	const { NO_FIND_STATION } = ALERT_MESSAGE;

	useEffect(() => {
		makeBusStationMarker(map, departStation.stations, handleSelectStation);
		makeBusStationMarker(map, arriveStation.stations, handleSelectStation);
	}, []);

	return (
		<>
			{departStation.stations.length === 0 && <Alert flag={NO_FIND_STATION} />}
		</>
	);
};

export default Result;
