import { Link } from "react-router-dom";

// import "pages/train/style/Train.css";
import Button from "components/common/Button";

//TODO: 버튼 사이즈 상수로 만들기?
function ShowDepartInfo({departStation, arriveStation, date, time}) {
  // * components
  const DepartInfo = () => {
    return (
      <>
        <h1>{departStation} ▸ {arriveStation}</h1>
        <p>{date[0]}년 {date[1]}월 {date[2]}일</p>
        <p>{time}시 출발</p>
      </>
    )
  }

  return (
    <div id="train-depart-info">
      <DepartInfo />
      <Link to="/train" style={{width: "80%"}}>
        <Button
        buttonsize={"search-button"} 
        content={"다시 조회하기"}
        type={"button"}
        />
      </Link>
    </div>
  )
}

export default ShowDepartInfo;