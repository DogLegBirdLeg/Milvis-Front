import Button from 'components/Button';
import FormDate from './FormDate';
import FormTime from './FormTime';
import FormStations from './FormStations';
import useTransferForm from '../../hooks/useTransferForm';

function TransferForm() {
	const { states, methods } = useTransferForm();
	const { departDate, departTime, departStation, arriveStation } = states;
	const {
		handleSubmitForm,
		setDepartDate,
		setDepartTime,
		setDepartStation,
		setArriveStation,
	} = methods;

	return (
		<div className='container-form'>
			<form onSubmit={(event) => handleSubmitForm(event)}>
				<FormDate departDate={departDate} setDepartDate={setDepartDate} />
				<FormTime departTime={departTime} setDepartTime={setDepartTime} />
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