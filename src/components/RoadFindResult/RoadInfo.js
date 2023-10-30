import { useEffect } from 'react';

import 'styles/road-find-result-page/road-info.css';
import { getPathFinder } from 'API/getPathFinder';
import { makeBusStationMarker } from 'utils/RoadFindResult/makeBusStationMarker';

/*global kakao*/
const RoadInfo = ({ map, selectedStation, departStation, arriveStation }) => {
	const departStationName = selectedStation.name;
	const arriveStationName = arriveStation.stations[0].name;
	const firstArriveBus = departStation.stations[0].bus[0].name;
	const firstRemainTime = Math.floor(
		departStation.stations[0].bus[0].arrive_time / 60
	);

	const getPathFind = async () => {
		const data = await getPathFinder(
			{ lat: selectedStation.latitude, lng: selectedStation.longitude },
			{
				lat: arriveStation.stations[0].latitude,
				lng: arriveStation.stations[0].longitude,
			}
		);
		const { roads } = data.routes[0].sections[0];
		const vertexes = roads.map((road) => road.vertexes).flat();
		makePolyLine(vertexes);

		const arriveStationVertexes = roads.at(-1).vertexes;

		const arriveStationLatLng = [
			arriveStationVertexes.at(-1),
			arriveStationVertexes.at(-2),
		];
		makeBusStationMarker(map, [
			{
				latitude: arriveStationLatLng[0],
				longitude: arriveStationLatLng[1],
			},
		]);
	};

	const makePolyLine = (vertexes) => {
		const linePath = [];

		for (let i = 0; i < vertexes.length / 2; i++) {
			const line = new kakao.maps.LatLng(vertexes[i * 2 + 1], vertexes[i * 2]);
			linePath.push(line);
		}

		const polyline = new kakao.maps.Polyline({
			path: linePath,
			strokeWeight: 5,
			strokeColor: '#606dff',
			strokeOpacity: 0.7,
			strokeStyle: 'solid',
		});
		polyline.setMap(map);
	};

	useEffect(() => {
		if (selectedStation === null) return;

		getPathFind();
	}, [selectedStation, getPathFind]);

	return (
		<div className='road-info'>
			<div className='road-info__stations'>
				<div className='road-info__depart'>
					<div className='road-info__depart-explain'>출발</div>
					<div className='road-info__depart-station'>{departStationName}</div>
				</div>
				<div className='road-info__arrive'>
					<div className='road-info__arrive-explain'>도착</div>
					<div className='road-info__arrive-station'>{arriveStationName}</div>
				</div>
			</div>
			<div className='road-info__times'>
				<div className='road-info__bus-name'>🚎 {firstArriveBus}</div>
				<div className='road-info__bus-arrive'>
					<div className='road-info__time'>{firstRemainTime}</div>
					<div className='road-info__time-explain'>분 뒤 도착</div>
				</div>
			</div>
		</div>
	);
};

export default RoadInfo;
