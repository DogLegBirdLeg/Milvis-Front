import React, { useState,useEffect} from 'react'
import "./BusTime.css";
import {BUSTIME} from 'utils/Constant';


const BusTime = (props) =>  {
  const [hours, setHours] = useState([]);
  useEffect(() => {
    const uniqueHours = [];
    BUSTIME.forEach((bus) => {
      if (bus.date === props.date && bus.goto === props.goto && !uniqueHours.includes(bus.hour)) {
        uniqueHours.push(bus.hour);
      }
    });
  
    setHours(uniqueHours.sort((a, b) => a - b));
  }, [props.date, props.goto]);
  
  return (
    <>
    <div className='b'>
    {hours.map((hour, index) => (
        <div key={index} >
          <div className="hour">{`Hour: ${hour}`}</div>
          <div className="bus-time-data">
            {BUSTIME.filter(bus => bus.hour === hour && bus.date === props.date && bus.goto === props.goto).map((bus, busIndex) => (
              <div key={busIndex} className="time">
                <div>{`${bus.time1}`}</div>
                <div className='bus-time-space' >{`${bus.time2}`}</div>
                <div className='bus-time-space'>{`${bus.time3}`}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>

    </>
  );
};

export default BusTime
