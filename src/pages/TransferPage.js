import 'styles/transfer/transfer.css';
import { useState } from 'react';
import TransferLoading from 'components/Transfer/TransferLoading';
import TransferForm from 'components/Transfer/TransferForm';

function Train() {
  const [loading, setLoading] = useState(false);
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
      {loading ? (
        <TransferLoading />
      ) : (
        <>
          <TrainPageExplain />
          <TransferForm setLoading={setLoading} />
        </>
      )}
    </div>
  );
}

export default Train;
