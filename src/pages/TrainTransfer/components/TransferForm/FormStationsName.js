const FormStationsName = ({ stations, toggles, handleOpenInput }) => {
	const { departStation, arriveStation } = stations;
	const { departToggle, arriveToggle } = toggles;
	const { handleClickDepartStation, handleClickArriveStation } =
		handleOpenInput;
	return (
		<div className='container-stations'>
			<div className={departToggle ? 'focus depart-station' : 'depart-station'}>
				<span onClick={handleClickDepartStation}>{departStation}</span>
			</div>
			<div className={arriveToggle ? 'focus arrive-station' : 'arrive-station'}>
				<span onClick={handleClickArriveStation}>{arriveStation}</span>
			</div>
		</div>
	);
};

export default FormStationsName;
