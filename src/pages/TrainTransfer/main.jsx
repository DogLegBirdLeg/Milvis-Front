import 'styles/transfer-page/transfer.css';
import PageExplain from './components/PageExplain/main';
import TransferForm from './components/TransferForm/main';

function TrainTransfer() {
	return (
		<div className='container-depart'>
			<PageExplain />
			<TransferForm />
		</div>
	);
}

export default TrainTransfer;
