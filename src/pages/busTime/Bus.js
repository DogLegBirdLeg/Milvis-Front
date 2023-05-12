import React,{useState} from 'react';
import "./Bus.css";
import FooterBus from "components/busTime/FooterBus";
import HeaderBus from "components/busTime/HeaderBus";
import BusTime from 'components/busTime/BusTime';
import Busline from 'components/busTime/Departure';

const Bus = () =>  {
  const [date, setDate] = useState("weekday");
  const [goto,setGoto] =useState("station");

  return (
  <>
    <HeaderBus date={date} setDate={setDate}></HeaderBus>

    <div className="bus-content">
      <Busline goto={goto}></Busline>
      <div className='bus-content-time'>
        <BusTime goto = {goto} date={date}></BusTime>
      </div>
    </div>

    <FooterBus goto={goto} setGoto={setGoto}></FooterBus>
  </>
  )
}
export default Bus