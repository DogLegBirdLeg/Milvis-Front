import React from 'react';
import 'styles/common-components/footer.css';

const FooterMap = (props) => {
  return (
    <div className='footer-map'>
      <div className='font-space' style={{ fontSize: '10px' }}>
        출발지
      </div>
      <div className='font-space'>
        <div className={`${props.showCate ? 'font-color-gray' : ''}`}>
          {props.showCate === true ? '밀양캠퍼스' : '{props.lat}{props.lng}'}
        </div>
      </div>
      <div className='center-line'></div>
      <img
        src='/picture/up-down3.png'
        onClick={() => props.setShowCate(!props.showCate)}
        className={`arrow ${props.showCate ? '' : 'rotate'}`}
        alt={''}
      ></img>
      <div className='font-space' style={{ fontSize: '10px' }}>
        도착지
      </div>
      <div className='font-space'>
        <div className={`${props.showCate ? '' : 'font-color-gray'}`}>
          {props.showCate === true ? '{props.lat}{props.lng}' : '밀양캠퍼스'}
        </div>
      </div>
    </div>
  );
};

export default FooterMap;
