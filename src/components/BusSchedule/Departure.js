import React from 'react';
import 'styles/bus-schedule-page/departure.css'

const Busline = (props) =>  {
  return (
  <div className='container-departure-station'>
    {
      props.goto ==="station" ?
      <div className='departure-point'>            
          <div className='element-departure-station'>캠퍼스</div>
          <div className='element-departure-station'>밀양역</div>
          <div className='element-departure-station'>영남루</div>
      </div>
      :
      <div className='departure-point'>
          <div className='element-departure-station'>영남루</div>
          <div className='element-departure-station'>밀양역</div>
          <div className='element-departure-station'>캠퍼스</div>
      </div>
    }
  </div>
  )
}
export default Busline