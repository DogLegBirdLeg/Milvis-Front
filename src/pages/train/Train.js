import { useState } from 'react';
import TrainLoading from 'components/train/TrainLoading'
import TrainForm from "components/train/TrainForm";
import "./Train.css";

function Train() {  
  const [loading, setLoading] = useState(false);
  const TrainPageExplain = () => {
    return (
      <div className="container-info">
        <div className="info">
          <p>
            <span className="point">열차</span>와{" "}
            <span className="point">버스</span>
          </p>
          <p>시간표를</p>
          <p>한 눈에 확인해 보세요</p>
        </div>
      </div>
    );
  };

  return (
    <div className='container-depart'>
      {
        loading
        ? <TrainLoading />
        :    
        <>
          <TrainPageExplain />
          <TrainForm 
          setLoading={setLoading}
          />
        </>  
      }
    </div>
  )
}

export default Train