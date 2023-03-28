import React from 'react';
import './Destination.css';

const Destination = ({location, setLocation}) => {
  return (
    <div id='destination-container'>
      <div className="img-container">
        <img
          src='/picture/up-down3.png'
          onClick={() => setLocation(!location)}
          className={`arrow ${location ? '' : 'rotate'}`}
          alt='출발 도착 전환'
        />
      </div>
      <div className="dest-info-container">
        <div className="dest-depart-container">
          <div className='dest-deaprt-title'>출발지</div>
            <div className='font-space'>
            </div>
        </div>
        <div className='split-line'></div>
        <div className="dest-arrive-container">
          <div className='dest-arrive-title'>도착지</div>
        </div>
      </div>
      </div>
  );
};

export default Destination;
