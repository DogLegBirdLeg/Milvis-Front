import Button from 'components/Button';
import FormDate from './FormDate';
import FormTime from './FormTime';
import FormStations from './FormStations';
import FormBusType from './FormBusType';
import useTransferForm from '../../hooks/useTransferForm';

function TransferForm() {
	const { states, methods } = useTransferForm();
	const { departDate, departTime, departStation, arriveStation, busType } =
		states;
	const {
		handleSubmitForm,
		setDepartDate,
		setDepartTime,
		setDepartStation,
		setArriveStation,
		setBusType,
	} = methods;

	return (
		<div className='container-form'>
			<form onSubmit={(event) => handleSubmitForm(event)}>
				<FormDate departDate={departDate} setDepartDate={setDepartDate} />
				<FormTime departTime={departTime} setDepartTime={setDepartTime} />
				<FormBusType busType={busType} setBusType={setBusType} />
				<FormStations
					departStation={departStation}
					arriveStation={arriveStation}
					setDepartStation={setDepartStation}
					setArriveStation={setArriveStation}
				/>
				<Button disable={departStation === arriveStation}>검색하기</Button>
			</form>
		</div>
	);
}

export default TransferForm;
