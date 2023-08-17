import React from 'react';
import 'styles/bus-schedule-page/header-bus.css';

const HeaderBus = ({ date, setDate }) => {
  return (
    <>
      <div className='container-date-type'>
        <div
          onClick={() => {
            setDate('weekday');
          }}
          className={`element-date-type ${date === 'weekday' ? 'point' : ''}`}
        >
          평일
        </div>
        <div
          onClick={() => {
            setDate('holiday');
          }}
          className={`element-date-type ${date === 'holiday' ? 'point' : ''}`}
        >
          휴일/대학 방학
        </div>
        <div
          onClick={() => {
            setDate('vacation');
          }}
          className={`element-date-type ${date === 'vacation' ? 'point' : ''}`}
        >
          모두 방학
        </div>
      </div>
    </>
  );
};

export default HeaderBus;
