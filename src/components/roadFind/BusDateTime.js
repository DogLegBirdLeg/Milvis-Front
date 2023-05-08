import React from "react";
import "./BusDateTime.css";

const BusDateTime = ({setDate, setTime, time}) => {
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);

  return (
    <div id='bus-time-select' className='align-center'>
      <input
        type="date"
        required
        defaultValue={today}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        required
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
    </div>
  );
};

export default BusDateTime;
