import React from "react";
import { useLocation } from "react-router";

import ShowDepartInfo from "pages/train/components/trainResult/ShowDepartInfo";
import TimeTable from "pages/train/components/trainResult/TimeTable";

function TrainResult() {
  const { state } = useLocation();
  const data = state;
  
  return (
    <main>
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
    </main>
  );
}

export default TrainResult;
