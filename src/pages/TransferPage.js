import 'styles/transfer-page/transfer.css';
import TransferForm from 'components/Transfer/TransferForm';

function Train() {
	const TrainPageExplain = () => {
		return (
			<div className='container-info'>
				<div className='info'>
					<p>
						<span className='point'>열차</span>와{' '}
						<span className='point'>버스</span>
					</p>
					<p>시간표를</p>
					<p>한 눈에 확인해 보세요</p>
				</div>
			</div>
		);
	};

	return (
		<div className='container-depart'>
			<TrainPageExplain />
			<TransferForm />
		</div>
	);
}

export default Train;
