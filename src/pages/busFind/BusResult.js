import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router';

import KakaoMap from './component/KakaoMap';
import "./style/Map.css";
import "./style/BusResult.css"

const BusResult = () => {
  const { state } = useLocation();
  const { lat, lng } = useParams();

  return (
    <main className='map-main'>
      <KakaoMap 
        lat={lat}
        lng={lng}
        data={state.data}
      />
    </main>
  )
}
export default BusResult;
