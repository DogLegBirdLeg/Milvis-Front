import { useEffect, useRef, useState } from 'react';
import Map from 'components/RoadFind/Map';

const RoadFindResult = () => {
	const [stationData, setStationData] = useState([]);
	const [selectedStation, setSelectedStation] = useState();
	const mapRef = useRef(null);

	const getStationData = async () => {
		const response = await fetch('');

		if (response.ok) {
			return response.json();
		}
	};

	const handleButtonClick = () => {
		selectedStation(null);
	};

	useEffect(() => {
		getStationData().then((data) => setStationData(data));
	}, []);
	return (
		<main className='page'>
			<Map ref={mapRef} />
			{!selectedStation && stationData.length > 0 && <BusStationMarker />}
			{selectedStation && <RoadInfo stationInfo={selectedStation} />}
			<button onClick={handleButtonClick}>이전</button>
		</main>
	);
};
export default RoadFindResult;
