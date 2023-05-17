import React from 'react';
import './Departure.css'

const Busline = (props) =>  {
  return (
  <>
    {
      props.goto ==="station" ?
      <div className='departure-point'>            
          <div>캠퍼스</div>
          <div className='bus-stop-space'>밀양역</div>
          <div className='bus-stop-space'>영남루</div>
      </div>
      :
      <div className='departure-point'>
          <div>영남루</div>
          <div className='bus-stop-space'>밀양역</div>
          <div className='bus-stop-space'>캠퍼스</div>
      </div>
    }
  </>
  )
}
export default Busline