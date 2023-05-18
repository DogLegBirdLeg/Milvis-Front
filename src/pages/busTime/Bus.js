import React,{useState} from 'react';
import "./Bus.css";
import FooterBus from "components/busTime/FooterBus";
import HeaderBus from "components/busTime/HeaderBus";
import BusTime from 'components/busTime/BusTime';
import Busline from 'components/busTime/Departure';

const Bus = () =>  {
  const [date, setDate] = useState("weekday");
  const [goto, setGoto] = useState("station");

  console.log(date);
  return (
  <div className='container-bus-time'>
    <HeaderBus date={date} setDate={setDate}></HeaderBus>
    <div className="bus-content">
      <Busline goto={goto}></Busline>
      <BusTime goto={goto} date={date}></BusTime>
    </div>
    <FooterBus goto={goto} setGoto={setGoto}></FooterBus>
  </div>
  )
}
export default Bus