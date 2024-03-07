import { useMemo } from 'react';

import 'styles/bus-schedule-page/bus-time.css';
import { BUS_SCHEDULE } from 'constants/Constant';

const BusTime = ({ direction, date }) => {
	const hours = useMemo(() => makeStandardHour(), []);
	const station =
		direction === 'station'
			? ['부산대', '밀양역', '영남루']
			: ['영남루', '밀양역', '부산대'];

	function makeStandardHour() {
		const standardHour = [];

		for (let hour = 6; hour <= 22; hour++) {
			hour = String(hour).padStart(2, '0');
			standardHour.push(hour);
		}

		return standardHour;
	}

	return (
		<div className='container-bus-content'>
			{hours.map((hour, index) => (
				<div key={index}>
					<div className='container-standard-hour'>{hour}시</div>
					<div className='container-bus-data'>
						{BUS_SCHEDULE[direction][date].map((timeData, busIndex) => {
							const departHour =
								direction === 'station'
									? timeData.time1.split(':')[0]
									: timeData.time2.split(':')[0];
							return (
								hour === departHour && (
									<div key={busIndex} className='time'>
										<div className='bus-time-space'>
											<div className='top-data'>{station[0]}</div>
											<div className='bottom-data'>{timeData.time1 || 'X'}</div>
										</div>
										<div className='bus-time-space'>
											<div className='top-data'>{station[1]}</div>
											<div className='bottom-data'>{timeData.time2 || 'X'}</div>
										</div>
										<div className='bus-time-space'>
											<div className='top-data'>{station[2]}</div>
											<div className='bottom-data'>{timeData.time3 || 'X'}</div>
										</div>
									</div>
								)
							);
						})}
					</div>
				</div>
			))}
		</div>
	);
};

export default BusTime;
