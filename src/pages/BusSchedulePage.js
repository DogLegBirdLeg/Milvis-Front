import React,{useState} from 'react';

import "styles/bus-schedule-page/Bus.css";
import FooterBus from "components/BusSchedule/FooterBus";
import HeaderBus from "components/BusSchedule/HeaderBus";
import BusTime from 'components/BusSchedule/BusTime';
import Busline from 'components/BusSchedule/Departure';

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