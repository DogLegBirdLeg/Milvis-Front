import React, { useState,useEffect,useParams} from 'react'
import "../../pages/busTime/Bus.css";
// import { Truck } from 'react-bootstrap-icons' ;

const BusTimeTable = [
  // 캠퍼스 -> 역으로 평일
  // TODO: 상수들 따로 빼내기 
  {ID:1, hour:7, goto:'station', date:"weekday", time1:'a7시 02분',time2:'7시 18분',time3:'7시 25분'},
  {ID:2, hour:7, goto:'station', date:"weekday", time1:'7시 20분',time2:'7시 32분',time3:'7시 39분'},
  {ID:3, hour:7, goto:'station', date:"weekday", time1:'7시 37분',time2:'7시 56분',time3:'8시 03분'},
  {ID:4, hour:8, goto:'station', date:"weekday", time1:'8시 40분',time2:'8시 52분',time3:'8시 59분'},
  {ID:5, hour:8, goto:'station', date:"weekday", time1:'8시 57분',time2:'9시 12분',time3:'9시 19분'},
  {ID:6, hour:9, goto:'station', date:"weekday", time1:'9시 06분',time2:'9시 20분',time3:'9시 27분'},
  {ID:7, hour:9, goto:'station', date:"weekday", time1:'9시 46분',time2:'10시 00분',time3:'10시 07분'},
  {ID:7, hour:9, goto:'station', date:"weekday", time1:'9시 58분',time2:'10시 12분',time3:'10시 19분'},
  {ID:7, hour:10, goto:'station', date:"weekday", time1:'10시 16분',time2:'10시 30분',time3:'버스 없음'},
  {ID:7, hour:10, goto:'station', date:"weekday", time1:'10시 38분',time2:'10시 52분',time3:'10시 59분'},
  {ID:7, hour:13, goto:'station', date:"weekday", time1:'12시 00분',time2:'12시 16분',time3:'12시 23분'},
  {ID:7, hour:12, goto:'station', date:"weekday", time1:'12시 18분',time2:'12시 34분',time3:'12시 41분'},
  {ID:7, hour:13, goto:'station', date:"weekday", time1:'13시 05분',time2:'13시 16분',time3:'13시 23분'},
  {ID:7, hour:13, goto:'station', date:"weekday", time1:'13시 28분',time2:'13시 44분',time3:'13시 51분'},
  {ID:7, hour:13, goto:'station', date:"weekday", time1:'13시 50분',time2:'14시 00분',time3:'14시 07분'},
  {ID:7, hour:14, goto:'station', date:"weekday", time1:'14시 30분',time2:'14시 40분',time3:'14시 47분'},
  {ID:7, hour:15, goto:'station', date:"weekday", time1:'15시 20분',time2:'15시 30분',time3:'버스 없음'},
  {ID:7, hour:15, goto:'station', date:"weekday", time1:'15시 28분',time2:'15시 44분',time3:'15시 51분'},
  {ID:7, hour:15, goto:'station', date:"weekday", time1:'15시 52분',time2:'16시 00분',time3:'16시 07분'},
  {ID:7, hour:16, goto:'station', date:"weekday", time1:'16시 19분',time2:'16시 28분',time3:'버스 없음'},
  {ID:7, hour:17, goto:'station', date:"weekday", time1:'17시 02분',time2:'17시 16분',time3:'17시 23분'},
  {ID:7, hour:17, goto:'station', date:"weekday", time1:'17시 42분',time2:'17시 56분',time3:'18시 03분'},
  {ID:7, hour:17, goto:'station', date:"weekday", time1:'17시 58분',time2:'18시 08분',time3:'18시 15분'},
  {ID:7, hour:18, goto:'station', date:"weekday", time1:'18시 22분',time2:'18시 32분',time3:'18시 39분'},
  {ID:7, hour:18, goto:'station', date:"weekday", time1:'18시 42분',time2:'19시 00분',time3:'19시 07분'},
  {ID:7, hour:19, goto:'station', date:"weekday", time1:'19시 08분',time2:'19시 24분',time3:'19시 31분'},
  {ID:7, hour:19, goto:'station', date:"weekday", time1:'19시 42분',time2:'19시 50분',time3:'19시 57분'},
  {ID:7, hour:20, goto:'station', date:"weekday", time1:'20시 04분',time2:'20시 18분',time3:'20시 25분'},
  {ID:7, hour:20, goto:'station', date:"weekday", time1:'20시 20분',time2:'20시 30분',time3:'20시 37분'},
  {ID:7, hour:20, goto:'station', date:"weekday", time1:'20시 57분',time2:'21시 07분',time3:'21시 14분'},
  {ID:7, hour:21, goto:'station', date:"weekday", time1:'21시 17분',time2:'21시 28분',time3:'버스 없음'},
  {ID:7, hour:22, goto:'station', date:"weekday", time1:'22시 12분',time2:'22시 24분',time3:'22시 31분'},
  {ID:7, hour:22, goto:'station', date:"weekday", time1:'22시 44분',time2:'23시 00분',time3:'23시 07분'},
  {ID:7, hour:23, goto:'station', date:"weekday", time1:'23시 12분',time2:'23시 20분',time3:'23시 27분'},

 
  {ID:14, hour:7, goto:'station', date:"campusHoliday", time1:'c7시 02분',time2:'7시 18분',time3:'7시 25분'},
  {ID:15, hour:7, goto:'station', date:"campusHoliday", time1:'7시 20분',time2:'7시 32분',time3:'7시 39분'},
  {ID:16, hour:7, goto:'station', date:"campusHoliday", time1:'7시 37분',time2:'7시 56분',time3:'8시 03분'},
  {ID:17, hour:8, goto:'station', date:"campusHoliday", time1:'8시 39분',time2:'8시 52분',time3:'8시 59분'},
  {ID:17, hour:8, goto:'station', date:"campusHoliday", time1:'8시 57분',time2:'9시 12분',time3:'9시 19분'},
  {ID:18, hour:9, goto:'station', date:"campusHoliday", time1:'9시 46분',time2:'10시 00분',time3:'10시 07분'},
  {ID:19, hour:10, goto:'station', date:"campusHoliday", time1:'10시 38분',time2:'10시 52분',time3:'10시 59분'},
  {ID:17, hour:12, goto:'station', date:"campusHoliday", time1:'12시 18분',time2:'12시 34분',time3:'12시 41분'},
  {ID:17, hour:13, goto:'station', date:"campusHoliday", time1:'13시 28분',time2:'13시 44분',time3:'13시 51분'},
  {ID:17, hour:13, goto:'station', date:"campusHoliday", time1:'13시 50분',time2:'14시 00분',time3:'14시 07분'},
  {ID:17, hour:15, goto:'station', date:"campusHoliday", time1:'15시 28분',time2:'15시 44분',time3:'15시 51분'},
  {ID:17, hour:15, goto:'station', date:"campusHoliday", time1:'15시 52분',time2:'16시 00분',time3:'16시 07분'},
  {ID:17, hour:17, goto:'station', date:"campusHoliday", time1:'17시 02분',time2:'17시 16분',time3:'17시 23분'},
  {ID:17, hour:17, goto:'station', date:"campusHoliday", time1:'17시 42분',time2:'17시 56분',time3:'18시 03분'},
  {ID:17, hour:18, goto:'station', date:"campusHoliday", time1:'18시 42분',time2:'19시 00분',time3:'19시 07분'},
  {ID:17, hour:18, goto:'station', date:"campusHoliday", time1:'18시 22분',time2:'18시 32분',time3:'18시 39분'},
  {ID:17, hour:19, goto:'station', date:"campusHoliday", time1:'19시 08분',time2:'19시 24분',time3:'19시 31분'},
  {ID:17, hour:20, goto:'station', date:"campusHoliday", time1:'20시 04분',time2:'20시 18분',time3:'20시 25분'},
  {ID:17, hour:22, goto:'station', date:"campusHoliday", time1:'22시 44분',time2:'23시 00분',time3:'23시 07분'},

  {ID:20, hour:7, goto:'station', date:"holiday", time1:'d7시 20분',time2:'7시 35분',time3:'7시 42분'},
  {ID:21, hour:8, goto:'station', date:"holiday", time1:'8시 40분',time2:'9시 05분',time3:'9시 12분'},
  {ID:22, hour:8, goto:'station', date:"holiday", time1:'8시 57분',time2:'9시 10분',time3:'9시 17분'},
  {ID:23, hour:10, goto:'station', date:"holiday", time1:'10시 38분',time2:'10시 55분',time3:'11시 02분'},
  {ID:24, hour:12, goto:'station', date:"holiday", time1:'12시 18분',time2:'12시 40분',time3:'12시 47분'},
  {ID:25, hour:13, goto:'station', date:"holiday", time1:'13시 28분',time2:'13시 45분',time3:'13시 52분'},
  {ID:25, hour:15, goto:'station', date:"holiday", time1:'15시 28분',time2:'15시 45분',time3:'15시 52분'},
  {ID:25, hour:15, goto:'station', date:"holiday", time1:'15시 47분',time2:'16시 00분',time3:'16시 07분'},
  {ID:25, hour:17, goto:'station', date:"holiday", time1:'17시 02분',time2:'17시 15분',time3:'17시 22분'},
  {ID:25, hour:17, goto:'station', date:"holiday", time1:'17시 42분',time2:'18시 00분',time3:'18시 07분'},
  {ID:25, hour:18, goto:'station', date:"holiday", time1:'18시 20분',time2:'18시 30분',time3:'18시 37분'},
  {ID:25, hour:19, goto:'station', date:"holiday", time1:'18시 42분',time2:'18시 55분',time3:'19시 02분'},
  {ID:25, hour:20, goto:'station', date:"holiday", time1:'19시 08분',time2:'19시 24분',time3:'19시 31분'},
  {ID:25, hour:20, goto:'station', date:"holiday", time1:'20시 04분',time2:'20시 18분',time3:'20시 25분'},
  {ID:25, hour:21, goto:'station', date:"holiday", time1:'21시 34분',time2:'21시 44분',time3:'21시 51분'},
  {ID:25, hour:22, goto:'station', date:"holiday", time1:'22시 38분',time2:'22시 50분',time3:'22시 57분'},

//밑에서 부터는 goto campus

  {ID:1, hour:6, goto:'campus', date:"weekday", time1:'d6시 14분',time2:'6시 45분',time3:'6시 57분'},
  {ID:2, hour:7, goto:'campus', date:"weekday", time1:'버스 없음',time2:'7시 00분',time3:'7시 32분'},
  {ID:3, hour:7, goto:'campus', date:"weekday", time1:'6시 19분',time2:'7시 20분',time3:'7시 32분'},
  {ID:4, hour:8, goto:'campus', date:"weekday", time1:'8시 10분',time2:'8시 20분',time3:'8시 32분'},
  {ID:5, hour:8, goto:'campus', date:"weekday", time1:'8시 33분',time2:'8시 45분',time3:'8시 53분'},
  {ID:6, hour:8, goto:'campus', date:"weekday", time1:'8시 45분',time2:'8시 56분',time3:'9시 04분'},
  {ID:7, hour:9, goto:'campus', date:"weekday", time1:'9시 25분',time2:'9시 35분',time3:'9시 43분'},
  {ID:8, hour:9, goto:'campus', date:"weekday", time1:'9시 41분',time2:'9시 48분',time3:'9시 56분'},
  {ID:9, hour:10, goto:'campus', date:"weekday", time1:'9시 53분',time2:'10시 05분',time3:'10시 13분'},
  {ID:10, hour:10, goto:'campus', date:"weekday", time1:'10시 15분',time2:'10시 22분',time3:'10시 32분'},
  {ID:11, hour:11, goto:'campus', date:"weekday", time1:'버스 없음',time2:'11시 26분',time3:'11시 38분'},
  {ID:12, hour:11, goto:'campus', date:"weekday", time1:'11시 33분',time2:'11시 48분',time3:'11시 56분'},
  {ID:13, hour:12, goto:'campus', date:"weekday", time1:'버스 없음',time2:'12시 36분',time3:'12시 48분'},
  {ID:14, hour:12, goto:'campus', date:"weekday", time1:'12시 41분',time2:'12시 50분',time3:'13시 02분'},
  {ID:15, hour:13, goto:'campus', date:"weekday", time1:'13시 29분',time2:'13시 36분',time3:'13시 48분'},
  {ID:16, hour:14, goto:'campus', date:"weekday", time1:'14시 05분',time2:'14시 17분',time3:'14시 29분'},
  {ID:17, hour:14, goto:'campus', date:"weekday", time1:'버스 없음',time2:'14시 36분',time3:'14시 48분'},
  {ID:18, hour:15, goto:'campus', date:"weekday", time1:'14시 53분',time2:'15시 05분',time3:'15시 17분'},
  {ID:19, hour:15, goto:'campus', date:"weekday", time1:'15시 29분',time2:'15시 40분',time3:'15시 52분'},
  {ID:20, hour:16, goto:'campus', date:"weekday", time1:'15시 53분',time2:'16시 00분',time3:'16시 17분'},
  {ID:21, hour:16, goto:'campus', date:"weekday", time1:'16시 33분',time2:'16시 42분',time3:'16시 54분'},
  {ID:22, hour:17, goto:'campus', date:"weekday", time1:'17시 15분',time2:'17시 23분',time3:'17시 35분'},
  {ID:23, hour:17, goto:'campus', date:"weekday", time1:'17시 29분',time2:'17시 44분',time3:'17시 56분'},
  {ID:24, hour:17, goto:'campus', date:"weekday", time1:'롯데 A30',time2:'17시 45분',time3:'17시 57분'},
  {ID:25, hour:18, goto:'campus', date:"weekday", time1:'17시 57분',time2:'18시 10분',time3:'18시 22분'},
  {ID:26, hour:18, goto:'campus', date:"weekday", time1:'18시 37분',time2:'18시 45분',time3:'18시 57분'},
  {ID:27, hour:19, goto:'campus', date:"weekday", time1:'19시 17분',time2:'19시 30분',time3:'19시 42분'},
  {ID:28, hour:19, goto:'campus', date:"weekday", time1:'19시 35분',time2:'19시 44분',time3:'19시 56분'},
  {ID:29, hour:20, goto:'campus', date:"weekday", time1:'20시 01분',time2:'20시 08분',time3:'20시 20분'},
  {ID:30, hour:20, goto:'campus', date:"weekday", time1:'20시 35분',time2:'20시 45분',time3:'20시 57분'},
  {ID:31, hour:21, goto:'campus', date:"weekday", time1:'20시 53분',time2:'21시 05분',time3:'21시 17분'},
  {ID:32, hour:21, goto:'campus', date:"weekday", time1:'21시 50분',time2:'21시 57분',time3:'22시 09분'},
  {ID:33, hour:22, goto:'campus', date:"weekday", time1:'22시 13분',time2:'22시 22분',time3:'22시 34분'},
  {ID:34, hour:23, goto:'campus', date:"weekday", time1:'22시 53분',time2:'23시 00분',time3:'23시 12분'},

  {ID:13, hour:6, goto:'campus', date:"campusHoliday", time1:'f6시 14분',time2:'6시 45분',time3:'6시 57분'},
  {ID:14, hour:7, goto:'campus', date:"campusHoliday", time1:'버스 없음',time2:'7시 00분',time3:'7시 12분'},
  {ID:15, hour:7, goto:'campus', date:"campusHoliday", time1:'6시 19분',time2:'7시 20분',time3:'7시 32분'},
  {ID:16, hour:8, goto:'campus', date:"campusHoliday", time1:'8시 10분',time2:'8시 17분',time3:'8시 29분'},
  {ID:17, hour:8, goto:'campus', date:"campusHoliday", time1:'8시 33분',time2:'8시 45분',time3:'8시 53분'},
  {ID:18, hour:9, goto:'campus', date:"campusHoliday", time1:'9시 25분',time2:'9시 35분',time3:'9시 43분'},
  {ID:18, hour:10, goto:'campus', date:"campusHoliday", time1:'10시 15분',time2:'10시 22분',time3:'10시 32분'},
  {ID:18, hour:11, goto:'campus', date:"campusHoliday", time1:'버스 없음',time2:'11시 26분',time3:'11시 38분'},
  {ID:18, hour:12, goto:'campus', date:"campusHoliday", time1:'버스 없음',time2:'12시 36분',time3:'12시 48분'},
  {ID:18, hour:13, goto:'campus', date:"campusHoliday", time1:'13시 29분',time2:'13시 36분',time3:'13시 48분'},
  {ID:18, hour:14, goto:'campus', date:"campusHoliday", time1:'버스 없음',time2:'14시 36분',time3:'14시 48분'},
  {ID:18, hour:15, goto:'campus', date:"campusHoliday", time1:'15시 29분',time2:'15시 40분',time3:'15시 52분'},
  {ID:18, hour:16, goto:'campus', date:"campusHoliday", time1:'16시 33분',time2:'16시 42분',time3:'16시 54분'},
  {ID:18, hour:17, goto:'campus', date:"campusHoliday", time1:'17시 15분',time2:'17시 23분',time3:'17시 35분'},
  {ID:18, hour:17, goto:'campus', date:"campusHoliday", time1:'롯데 A30',time2:'17시 45분',time3:'17시 57분'},
  {ID:18, hour:18, goto:'campus', date:"campusHoliday", time1:'17시 57분',time2:'18시 10분',time3:'18시 22분'},
  {ID:18, hour:18, goto:'campus', date:"campusHoliday", time1:'18시 37분',time2:'18시 45분',time3:'18시 57분'},
  {ID:18, hour:19, goto:'campus', date:"campusHoliday", time1:'19시 35분',time2:'19시 44분',time3:'19시 56분'},
  {ID:18, hour:22, goto:'campus', date:"campusHoliday", time1:'22시 13분',time2:'22시 22분',time3:'22시 34분'},


  {ID:19, hour:7, goto:'campus', date:"holiday", time1:'버스 없음',time2:'7시 00분',time3:'7시 12분'},
  {ID:20, hour:8, goto:'campus', date:"holiday", time1:'8시 10분',time2:'8시 20분',time3:'8시 32분'},
  {ID:21, hour:8, goto:'campus', date:"holiday", time1:'8시 34분',time2:'8시 45분',time3:'8시 53분'},
  {ID:22, hour:10, goto:'campus', date:"holiday", time1:'10시 15분',time2:'10시 22분',time3:'10시 32분'},
  {ID:23, hour:11, goto:'campus', date:"holiday", time1:'버스 없음',time2:'11시 26분',time3:'11시 38분'},
  {ID:24, hour:12, goto:'campus', date:"holiday", time1:'버스 없음',time2:'12시 36분',time3:'12시 48분'},
  {ID:24, hour:14, goto:'campus', date:"holiday", time1:'버스 없음',time2:'14시 36분',time3:'14시 48분'},
  {ID:24, hour:15, goto:'campus', date:"holiday", time1:'15시 24분',time2:'15시 32분',time3:'15시 44분'},
  {ID:24, hour:16, goto:'campus', date:"holiday", time1:'16시 34분',time2:'16시 42분',time3:'16시 54분'},
  {ID:24, hour:17, goto:'campus', date:"holiday", time1:'17시 06분',time2:'17시 23분',time3:'17시 35분'},
  {ID:24, hour:17, goto:'campus', date:"holiday", time1:'롯데A30',time2:'17시 45분',time3:'17시 57분'},
  {ID:24, hour:18, goto:'campus', date:"holiday", time1:'17시 49분',time2:'18시 06분',time3:'18시 18분'},
  {ID:24, hour:18, goto:'campus', date:"holiday", time1:'18시 34분',time2:'18시 45분',time3:'18시 57분'},
  {ID:24, hour:19, goto:'campus', date:"holiday", time1:'19시 35분',time2:'19시 44분',time3:'19시 56분'},
  {ID:24, hour:20, goto:'campus', date:"holiday", time1:'20시 11분',time2:'20시 24분',time3:'20시 36분'},
  {ID:24, hour:21, goto:'campus', date:"holiday", time1:'20시 59분',time2:'21시 20분',time3:'21시 32분'},
  {ID:24, hour:22, goto:'campus', date:"holiday", time1:'22시 04분',time2:'22시 18분',time3:'22시 30분'},


];

const BusTime = (props) =>  {
  const [hours, setHours] = useState([]);
  useEffect(() => {
    const uniqueHours = [];
    BusTimeTable.forEach((bus) => {
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
            {BusTimeTable.filter(bus => bus.hour === hour && bus.date === props.date && bus.goto === props.goto).map((bus, busIndex) => (
              <div key={busIndex} className="time">
                <span >{`${bus.time1}`}</span>
                <span >{`${bus.time2}`}</span>
                <span>{`${bus.time3}`}</span>
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
