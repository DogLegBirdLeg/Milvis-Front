import React from "react";
import "./BusDateTime.css";
//버스 날짜 및 시간 설정
const BusDateTime = ({setDate, setTime, time}) => {
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);

  return (
<<<<<<< HEAD
    <div id='bus-time-select' className="mapheader">
=======
    <div>
>>>>>>> parent of e8671eb (Merge branch 'FixCode' into submain)
      <input
        id="date"
        type="date"
        required
        defaultValue={today}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        id="time"
        type="time"
        required
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
    </div>
  );
};

export default BusDateTime;
