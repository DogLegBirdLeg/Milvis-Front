import React,{useState,useEffect} from 'react';
import '../../pages/busTime/Bus.css'
const Busline = (props) =>  {

  return (
  <>
    {
        props.goto ==="station" ?
        <div className='bus-stop'>            
            <text>캠퍼스</text>
            <text>밀양역</text>
            <text>영남루</text>
        </div>
        :
        <div className='bus-stop'>
            <text>영남루</text>
            <text>밀양역</text>
            <text>캠퍼스</text>
        </div>
    }
  </>
  )
}
export default Busline