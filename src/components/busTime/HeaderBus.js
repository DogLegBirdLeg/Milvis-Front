import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import "../common/Header.css";

const HeaderBus = (props) => {
  const [position, setPosition] = useState();
  return (
    <>
    <div className="bus-date">
      <Link onClick={()=>{props.setDate("weekday") ; setPosition(1)}} className={`bus-date-space ${position ===1? "ff" : "" }`} to='../bus/weekday' style={{ textDecoration: 'none' , color:"white"}}>평일</Link>
      <Link onClick={()=>{props.setDate("weekend"); setPosition(2)}} className={`bus-date-space ${position ===2? "ff" : "" }`} to='../bus/weekend' style={{ textDecoration: 'none' , color:"white"}}>주말</Link>
      <Link onClick={()=>{props.setDate("campusHoliday"); setPosition(3)}} className={`bus-date-space ${position ===3? "ff" : "" }`}  to='../bus/campusHoliday' style={{ textDecoration: 'none' , color:"white"}}>대학만 방학</Link>  
      <Link onClick={()=>{props.setDate("holiday"); setPosition(4)}} className={`bus-date-space ${position ===4? "ff" : "" }`}  to='../bus/holiday' style={{ textDecoration: 'none' , color:"white"}}>모두 방학</Link>
    </div>
    {console.log(position)}
    </>

  )
}

export default HeaderBus