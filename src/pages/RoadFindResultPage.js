import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router';

import KakaoMap from 'components/roadFind/KakaoMap';
import "pages/roadFind/Map.css";
import "./BusResult.css"

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
