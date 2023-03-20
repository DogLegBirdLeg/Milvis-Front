import React, { useState,useEffect,useParams} from 'react'
import "../../pages/busTime/Bus.css";
// import { Truck } from 'react-bootstrap-icons' ;

const BusTimeTable = [
  // 캠퍼스 -> 역으로 평일
  {ID:1, hour:6, goto:'station', date:"weekday", time1:'a6시 05분',time2:'6시 05분',time3:'6시 05분'},
  {ID:2, hour:6, goto:'station', date:"weekday", time1:'6시 10분',time2:'6시 05분',time3:'6시 05분'},
  {ID:3, hour:6, goto:'station', date:"weekday", time1:'6시 34분',time2:'6시 05분',time3:'6시 05분'},
  {ID:4, hour:6, goto:'station', date:"weekday", time1:'6시 55분',time2:'6시 05분',time3:'6시 05분'},
  {ID:5, hour:7, goto:'station', date:"weekday", time1:'7시 05분',time2:'7시 05분',time3:'7시 05분'},
  {ID:6, hour:7, goto:'station', date:"weekday", time1:'7시 35분',time2:'6시 05분',time3:'6시 05분'},
  {ID:6, hour:8, goto:'station', date:"weekday", time1:'8시 35분',time2:'8시 05분',time3:'8시 05분'},
// 캠퍼스 -> 역으로 주말
  {ID:7, hour:6, goto:'station', date:"weekend", time1:'b6시 05분',time2:'6시 05분',time3:'6시 05분'},
  {ID:8, hour:6, goto:'station', date:"weekend", time1:'6시 10분',time2:'6시 05분',time3:'6시 05분'},
  {ID:9, hour:6, goto:'station', date:"weekend", time1:'6시 34분',time2:'6시 05분',time3:'6시 05분'},
  {ID:10, hour:6, goto:'station', date:"weekend", time1:'6시 55분',time2:'6시 05분',time3:'6시 05분'},
  {ID:11, hour:7, goto:'station', date:"weekend", time1:'7시 05분',time2:'7시 05분',time3:'7시 05분'},
  {ID:12, hour:7, goto:'station', date:"weekend", time1:'7시 35분',time2:'6시 05분',time3:'6시 05분'},

  {ID:13, hour:6, goto:'station', date:"campusHoliday", time1:'c6시 05분',time2:'6시 05분',time3:'6시 05분'},
  {ID:14, hour:6, goto:'station', date:"campusHoliday", time1:'6시 10분',time2:'6시 05분',time3:'6시 05분'},
  {ID:15, hour:6, goto:'station', date:"campusHoliday", time1:'6시 34분',time2:'6시 05분',time3:'6시 05분'},
  {ID:16, hour:6, goto:'station', date:"campusHoliday", time1:'6시 55분',time2:'6시 05분',time3:'6시 05분'},
  {ID:17, hour:7, goto:'station', date:"campusHoliday", time1:'7시 05분',time2:'7시 05분',time3:'7시 05분'},
  {ID:18, hour:7, goto:'station', date:"campusHoliday", time1:'7시 35분',time2:'6시 05분',time3:'6시 05분'},

  {ID:19, hour:6, goto:'station', date:"holiday", time1:'d6시 05분',time2:'6시 05분',time3:'6시 05분'},
  {ID:20, hour:6, goto:'station', date:"holiday", time1:'6시 10분',time2:'6시 05분',time3:'6시 05분'},
  {ID:21, hour:6, goto:'station', date:"holiday", time1:'6시 34분',time2:'6시 05분',time3:'6시 05분'},
  {ID:22, hour:6, goto:'station', date:"holiday", time1:'6시 55분',time2:'6시 05분',time3:'6시 05분'},
  {ID:23, hour:7, goto:'station', date:"holiday", time1:'7시 05분',time2:'7시 05분',time3:'7시 05분'},
  {ID:24, hour:7, goto:'station', date:"holiday", time1:'7시 35분',time2:'6시 05분',time3:'6시 05분'},

//밑에서 부터는 goto campus

  {ID:1, hour:6, goto:'campus', date:"weekday", time1:'d6시 05분',time2:'6시 05분',time3:'6시 05분'},
  {ID:2, hour:6, goto:'campus', date:"weekday", time1:'6시 10분',time2:'6시 05분',time3:'6시 05분'},
  {ID:3, hour:6, goto:'campus', date:"weekday", time1:'6시 34분',time2:'6시 05분',time3:'6시 05분'},
  {ID:4, hour:6, goto:'campus', date:"weekday", time1:'6시 55분',time2:'6시 05분',time3:'6시 05분'},
  {ID:5, hour:7, goto:'campus', date:"weekday", time1:'7시 05분',time2:'7시 05분',time3:'7시 05분'},
  {ID:6, hour:7, goto:'campus', date:"weekday", time1:'7시 35분',time2:'6시 05분',time3:'6시 05분'},

  {ID:7, hour:6, goto:'campus', date:"weekend", time1:'e6시 05분',time2:'6시 05분',time3:'6시 05분'},
  {ID:8, hour:6, goto:'campus', date:"weekend", time1:'6시 10분',time2:'6시 05분',time3:'6시 05분'},
  {ID:9, hour:6, goto:'campus', date:"weekend", time1:'6시 34분',time2:'6시 05분',time3:'6시 05분'},
  {ID:10, hour:6, goto:'campus', date:"weekend", time1:'6시 55분',time2:'6시 05분',time3:'6시 05분'},
  {ID:11, hour:7, goto:'campus', date:"weekend", time1:'7시 05분',time2:'7시 05분',time3:'7시 05분'},
  {ID:12, hour:7, goto:'campus', date:"weekend", time1:'7시 35분',time2:'6시 05분',time3:'6시 05분'},

  {ID:13, hour:6, goto:'campus', date:"campusHoliday", time1:'f6시 05분',time2:'6시 05분',time3:'6시 05분'},
  {ID:14, hour:6, goto:'campus', date:"campusHoliday", time1:'6시 10분',time2:'6시 05분',time3:'6시 05분'},
  {ID:15, hour:6, goto:'campus', date:"campusHoliday", time1:'6시 34분',time2:'6시 05분',time3:'6시 05분'},
  {ID:16, hour:6, goto:'campus', date:"campusHoliday", time1:'6시 55분',time2:'6시 05분',time3:'6시 05분'},
  {ID:17, hour:7, goto:'campus', date:"campusHoliday", time1:'7시 05분',time2:'7시 05분',time3:'7시 05분'},
  {ID:18, hour:7, goto:'campus', date:"campusHoliday", time1:'7시 35분',time2:'6시 05분',time3:'6시 05분'},

  {ID:19, hour:6, goto:'campus', date:"holiday", time1:'g6시 05분',time2:'6시 05분',time3:'6시 05분'},
  {ID:20, hour:6, goto:'campus', date:"holiday", time1:'6시 10분',time2:'6시 05분',time3:'6시 05분'},
  {ID:21, hour:6, goto:'campus', date:"holiday", time1:'6시 34분',time2:'6시 05분',time3:'6시 05분'},
  {ID:22, hour:6, goto:'campus', date:"holiday", time1:'6시 55분',time2:'6시 05분',time3:'6시 05분'},
  {ID:23, hour:7, goto:'campus', date:"holiday", time1:'7시 05분',time2:'7시 05분',time3:'7시 05분'},
  {ID:24, hour:7, goto:'campus', date:"holiday", time1:'7시 35분',time2:'6시 05분',time3:'6시 05분'},
];

const BusTime = (props) =>  {
  
  const [hours, setHours] = useState([]);
  useEffect(() => {
    const uniqueHours = [];

    for (let i = 0; i < BusTimeTable.length; i++) {
      if (i === 0 || BusTimeTable[i].hour !== BusTimeTable[i - 1].hour && BusTimeTable[i].date === props.date && BusTimeTable[i].goto === props.goto) {
        uniqueHours.push(BusTimeTable[i].hour);
      }
    }
    setHours(uniqueHours);
  }, [BusTimeTable]);

  return (
    <div>
      {hours.map((hour, index) => (
        <div key={index}>
          <h3>{`Hour: ${hour}`}</h3>
          {BusTimeTable.filter(bus => bus.hour === hour && bus.date === props.date && bus.goto === props.goto).map((bus, busIndex) => (
            <div key={busIndex}>
              {`Time1: ${bus.time1}, Time2: ${bus.time2}, Time3: ${bus.time3}`}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BusTime
