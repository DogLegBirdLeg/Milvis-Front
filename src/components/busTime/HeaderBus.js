import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import "../common/Header.css";

const HeaderBus = (props) => {
  return (
    <>
    {console.log(props.date)}
    <div className="bus-date">
      <Link onClick={()=>{props.setDate("weekday") ; }} className={`bus-date-space ${props.date ==="weekday"? "ff" : "" }`} to={`/bus/weekday`} style={{ textDecoration: 'none' , color:"white"}}>평일</Link>
      <Link onClick={()=>{props.setDate("weekend"); }} className={`bus-date-space ${props.date ==="weekend"? "ff" : "" }`} to='../bus/weekend' style={{ textDecoration: 'none' , color:"white"}}>주말</Link>
      <Link onClick={()=>{props.setDate("campusHoliday"); }} className={`bus-date-space ${props.date ==="campusHoliday"? "ff" : "" }`}  to='../bus/campusHoliday' style={{ textDecoration: 'none' , color:"white"}}>대학만 방학</Link>  
      <Link onClick={()=>{props.setDate("holiday"); }} className={`bus-date-space ${props.date ==="holiday"? "ff" : "" }`}  to='../bus/holiday' style={{ textDecoration: 'none' , color:"white"}}>모두 방학</Link>
    </div>
    </>

  )
}

export default HeaderBus