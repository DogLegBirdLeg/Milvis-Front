import { useState } from 'react';

import 'styles/bus-schedule-page/bus.css';
import FooterBus from './components/FooterBus';
import HeaderBus from './components/HeaderBus';
import BusTime from './components/BusTime';
import Busline from './components/Departure';

const Bus = () => {
	const [date, setDate] = useState('weekday');
	const [direction, setDirection] = useState('station');

	return (
		<div className='container-bus-time'>
			<HeaderBus date={date} setDate={setDate}></HeaderBus>
			<div className='bus-content'>
				<Busline direction={direction}></Busline>
				<BusTime direction={direction} date={date}></BusTime>
			</div>
			<FooterBus direction={direction} setDirection={setDirection}></FooterBus>
		</div>
	);
};
export default Bus;
