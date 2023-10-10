import 'styles/road-find-result-page/road-info.css';

const RoadInfo = ({ map, selectedStation, departStation, arriveStation }) => {
	const departStationName = selectedStation.name;
	const arriveStationName = arriveStation.stations[0].name;
	const firstArriveBus = departStation.stations[0].bus[0].name;
	const remainTime = Math.floor(
		departStation.stations[0].bus[0].arrive_time / 60
	);

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
					<div className='road-info__time'>{remainTime}</div>
					<div className='road-info__time-explain'>분 뒤 도착</div>
				</div>
			</div>
		</div>
	);
};

export default RoadInfo;
