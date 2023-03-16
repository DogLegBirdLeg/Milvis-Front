import { useState } from 'react';
import TrainLoading from 'pages/train/components/train/TrainLoading'
import TrainForm from "pages/train/components/train/TrainForm";
import "pages/train/style/Train.css";

function Train() {  
  const [loading, setLoading] = useState(false);
  const TrainPageExplain = () => {
    return (
      <div className="explain-container">
        <div className="explain">
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
    <main>
      {
        loading // TODO: CSS
        ? <TrainLoading />
        :    
        <>
          <TrainPageExplain />
          <TrainForm 
          setLoading={setLoading}
          />
        </>  
      }
    </main>
  )
}

export default Train