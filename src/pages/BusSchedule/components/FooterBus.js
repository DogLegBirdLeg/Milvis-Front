import 'styles/bus-schedule-page/footer-bus.css';

const FooterBus = ({ direction, setDirection }) => {
	const clickToStation = () => {
		setDirection('station');
	};
	const clickToCampus = () => {
		setDirection('campus');
	};

	return (
		<div className='container-footer'>
			<div
				onClick={clickToStation}
				className={`${direction === 'station' && 'footer-line'} footer-item`}>
				학교-&gt;밀양역{' '}
			</div>
			<div
				onClick={clickToCampus}
				className={`${direction === 'campus' && 'footer-line'} footer-item`}>
				밀양역-&gt;학교{' '}
			</div>
		</div>
	);
};

export default FooterBus;
