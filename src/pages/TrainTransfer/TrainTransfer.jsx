import './TrainTransfer.css';
import PageExplain from './components/PageExplain/PageExplain';
import TransferForm from './components/TransferForm/main';

function TrainTransfer() {
  return (
    <div className="train-transfer-container">
      <PageExplain />
      <TransferForm />
    </div>
  );
}

export default TrainTransfer;
