import TrainForm from "pages/train/components/train/TrainForm";
import "pages/train/style/Train.css";

function Train() {  
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
      <TrainPageExplain />
      <TrainForm />
    </main>
  )
}

export default Train