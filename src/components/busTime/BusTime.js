import React, { useState, useEffect } from 'react';
import './BusTime.css';
import { BUS_SCHEDULE } from 'utils/Constant';

const BusTime = ({ goto, date }) => {
  const [hours, setHours] = useState([]);
  const station = goto === 'station' 
  ? ['부산대', '밀양역', '영남루']
  : ['영남루', '밀양역', '부산대'];

  useEffect(() => {
    const standardHour = [];

    for (let hour = 6; hour <= 22; hour++) {
      hour = String(hour).padStart(2, '0');
      standardHour.push(hour);
    }
    setHours(standardHour);
  }, []);

  return (
    <div className='container-bus-content'>
      {hours.map((hour, index) => (
        <div key={index}>
          <div className='container-standard-hour point'>{hour}시</div>
          <div className='container-bus-data'>
            {BUS_SCHEDULE[goto][date].map((timeData, busIndex) => {
              return hour === timeData.hour ? (
                <div key={busIndex} className='time'>
                  <div className='bus-time-space'>
                    <div className='top-data'>{station[0]}</div>
                    <div className="bottom-data">{timeData.time1}</div>
                  </div>
                  <div className='bus-time-space'>
                    <div className='top-data'>{station[1]}</div>
                    <div className="bottom-data">{timeData.time2}</div>
                  </div>
                  <div className='bus-time-space'>
                    <div className='top-data'>{station[2]}</div>
                    <div className="bottom-data">{timeData.time3}</div>
                  </div>
                </div>
              ) : (
                <></>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusTime;
