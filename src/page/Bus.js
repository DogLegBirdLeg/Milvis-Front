import React from 'react';
import "./Bus.css";
import FooterBus from "../components/Footer-bus";
import {Truck} from 'react-bootstrap-icons' ;
import HeaderBus from "../components/Header-bus";

const BusTimeTable = [
  {ID:1, hour:6, goto:'station', time1:'6시 05분',time2:'6시 05분',time3:'6시 05분'},
  {ID:2, hour:6, goto:'station', time1:'6시 10분',time2:'6시 05분',time3:'6시 05분'},
  {ID:3, hour:6, goto:'station', time1:'6시 34분',time2:'6시 05분',time3:'6시 05분'},
  {ID:4, hour:6, goto:'station', time1:'6시 55분',time2:'6시 05분',time3:'6시 05분'},
  {ID:5, hour:7, goto:'station', time1:'7시 05분',time2:'7시 05분',time3:'7시 05분'},
  {ID:6, hour:7, goto:'station', time1:'7시 35분',time2:'6시 05분',time3:'6시 05분'},
];

const timeList1 = BusTimeTable.map(bustime=> <li key={bustime.ID}>{bustime.time1}</li>)
const timeList2 = BusTimeTable.map(bustime=> <li key={bustime.ID}>{bustime.time2}</li>)
const timeList3 = BusTimeTable.map(bustime=> <li key={bustime.ID}>{bustime.time3}</li>)


const Bus = () =>  {
  return (
  <>
    <HeaderBus></HeaderBus>
    <div className="bus-content">
    <div className = "bus-stop">
        <text>밀양캠</text> {/* font 정해서 일괄 적용하기 */}
          <ul className='bus-time1'>{timeList1}</ul>
        <text className="bus-stop-space">밀양역</text>
          <ul className='bus-time2'>{timeList2}</ul>
        <text className="bus-stop-space">영남루</text>
          <ul className='bus-time3'>{timeList3}</ul>
      </div>
      {/*<Truck front size="3em" width="7em" color="black"/>*/}
    </div>
    <FooterBus></FooterBus>
  </>
  )
}
export default Bus







