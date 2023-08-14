import React from 'react';

import 'styles/road-find-page/destination.css';

const Destination = ({showCate, setShowCate, lng, lat}) => {
  const ArrowImg = () => {
    return (
      <div className='left align-center'>
        <img
          src='/picture/up-down3.png'
          onClick={() => setShowCate(!showCate)}
          className={`arrow ${showCate ? '' : 'rotate'}`}
          alt='출발 도착 전환 버튼 이미지'
        />
      </div>    
    )
  }

  const DepartArrive = () => {
    return (
      <div className='right'>
        <div className='dest-depart'>
          <div className='title'>출발</div>
          <div className={`${showCate ? 'location font-color-gray' : 'location'}`}>
            {showCate === true ? '밀양캠퍼스' : `${lat}${lng}`}
          </div>
        </div>

        <div className='div-line'></div>

        <div className="dest-arrive">
          <div className="title">도착</div>
          <div className={`${showCate ? 'location' : 'location font-color-gray'}`}>
            {showCate === true ? `${lat}${lng}` : '밀양캠퍼스'}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id='destination'>
      <ArrowImg />
      <DepartArrive />
    </div>
  );
};

export default Destination;
