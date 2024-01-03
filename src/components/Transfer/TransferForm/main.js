import Button from 'components/Common/Button';
import FormDate from './FormDate';
import FormTime from './FormTime';
import FormStations from './FormStations';
import useTransferForm from './hooks/useTransferForm';

function TransferForm() {
	const { methods } = useTransferForm();
	const { handleSubmitForm } = methods;

	return (
		<div className='container-form'>
			<form onSubmit={(event) => handleSubmitForm(event)}>
				<FormDate />
				<FormTime />
				<FormStations />
				<Button />
			</form>
		</div>
	);
}

export default TransferForm;
