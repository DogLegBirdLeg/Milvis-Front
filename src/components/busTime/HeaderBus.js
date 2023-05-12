import React from 'react'
import {Link} from 'react-router-dom'
import "./HeaderBus.css";

const HeaderBus = (props) => {
  return (
    <>
    <div className="bus-date">
      <Link onClick={()=>{props.setDate("weekday") ; }} className={`bus-date-space ${props.date ==="weekday"? "select-date" : "" }`} to={`/bus/weekday`} style={{ textDecoration: 'none' , color:"white"}}>평일</Link>
      <Link onClick={()=>{props.setDate("campusHoliday"); }} className={`bus-date-space ${props.date ==="campusHoliday"? "select-date" : "" }`}  to='../bus/campusHoliday' style={{ textDecoration: 'none' , color:"white"}}>대학만 방학</Link>  
      <Link onClick={()=>{props.setDate("holiday"); }} className={`bus-date-space ${props.date ==="holiday"? "select-date" : "" }`}  to='../bus/holiday' style={{ textDecoration: 'none' , color:"white"}}>모두 방학</Link>
    </div>
    </>

  )
}

export default HeaderBus