import Button from 'components/Common/Button';
import TransferFormDate from './TransferFormDate';
import TreanferFormTime from './TreanferFormTime';
import TransferStationForm from './TransferStationForm';
import useTransferForm from './hooks/useTransferForm';

function TransferForm() {
	const { methods } = useTransferForm();
	const { handleSubmitForm } = methods;

	return (
		<div className='container-form'>
			<form onSubmit={(event) => handleSubmitForm(event)}>
				<TransferFormDate />
				<TreanferFormTime />
				<TransferStationForm />
				<Button />
			</form>
		</div>
	);
}

export default TransferForm;
