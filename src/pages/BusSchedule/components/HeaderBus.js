import 'styles/bus-schedule-page/header-bus.css';

const HeaderBus = ({ date, setDate }) => {
	return (
		<div>
			<div className='container-date-type'>
				<div
					onClick={() => {
						setDate('weekday');
					}}
					className={`element-date-type ${
						date === 'weekday' ? 'element-date-type__point' : ''
					}`}>
					평일
				</div>
				<div
					onClick={() => {
						setDate('holiday');
					}}
					className={`element-date-type ${
						date === 'holiday' ? 'element-date-type__point' : ''
					}`}>
					대학 방학
				</div>
				<div
					onClick={() => {
						setDate('vacation');
					}}
					className={`element-date-type ${
						date === 'vacation' ? 'element-date-type__point' : ''
					}`}>
					모두 방학/휴일
				</div>
			</div>
		</div>
	);
};

export default HeaderBus;
