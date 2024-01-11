import FormStationsName from './FormStationsName';
import FormStationsHeader from './FormStationsHeader';
import useFormStations from '../../hooks/useFormStations';
import FormStationsLists from './FormStationsLists';

function FormStations({
	departStation,
	arriveStation,
	setDepartStation,
	setArriveStation,
}) {
	const { states, methods } = useFormStations({
		departStation,
		arriveStation,
		setDepartStation,
		setArriveStation,
	});
	const { departToggle, arriveToggle, stationLists, searchInputValue } = states;
	const {
		handleChangeInputValue,
		handleReverseStation,
		handleClickDepartStation,
		handleClickArriveStation,
		handleSearchStationByInputValue,
		handleChangeStation,
	} = methods;

	return (
		<div className='container-station-input'>
			<FormStationsHeader onReverse={handleReverseStation} />
			<FormStationsName
				stations={{ departStation, arriveStation }}
				toggles={{ departToggle, arriveToggle }}
				handleOpenInput={{ handleClickDepartStation, handleClickArriveStation }}
			/>
			{(departToggle || arriveToggle) && (
				<input
					value={searchInputValue}
					onChange={(event) => {
						handleChangeInputValue(event);
						handleSearchStationByInputValue(event);
					}}
					placeholder={`${departToggle ? '출발' : '도착'}역을 검색해보세요.`}
				/>
			)}
			<FormStationsLists
				stationLists={stationLists}
				handleChangeStation={handleChangeStation}
			/>
		</div>
	);
}

export default FormStations;
