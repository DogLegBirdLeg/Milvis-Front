import React from 'react';
import './Departure.css'

const Busline = (props) =>  {
  return (
  <>
    {
      props.goto ==="station" ?
      <div className='departure-point'>            
          <text>캠퍼스</text>
          <text>밀양역</text>
          <text>영남루</text>
      </div>
      :
      <div className='departure-point'>
          <text>영남루</text>
          <text>밀양역</text>
          <text>캠퍼스</text>
      </div>
    }
  </>
  )
}
export default Busline