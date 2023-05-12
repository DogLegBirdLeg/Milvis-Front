import React from "react";
import { useLocation } from "react-router";

import ShowDepartInfo from "components/train/trainResult/ShowDepartInfo";
import TimeTable from "components/train/trainResult/TimeTable";

function TrainResult() {
  const { state } = useLocation();
  const data = state;
  
  return (
    <div className='container-time-table-page'>
      <ShowDepartInfo
        departStation={data.departStation}
        arriveStation={data.arriveStation}
        date={data.date}
        time={data.time}
      />
      <TimeTable
        matchTime={data.time}
        type={data.type}
        timeSchedule={data.sortSchedules}
      />
    </div>
  );
}

export default TrainResult;
