import Button from 'components/Common/Button';
import TransferDateForm from './TransferDateForm';
import TransferStationForm from './TransferStationForm';
import useTransferForm from './hooks/useTransferForm';

function TransferForm() {
	const { methods } = useTransferForm();
	const { handleSubmitForm } = methods;

	return (
		<div className='container-form'>
			<form onSubmit={(event) => handleSubmitForm(event)}>
				<TransferDateForm />
				<TransferStationForm />
				<Button />
			</form>
		</div>
	);
}

export default TransferForm;
