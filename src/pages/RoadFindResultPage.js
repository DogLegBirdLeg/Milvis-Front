import React from 'react'
import { useLocation, useParams } from 'react-router';

import "styles/road-find-page/road-find-page.css";
import "styles/road-find-page/road-find-result-page.css"
import KakaoMap from 'components/roadFind/KakaoMap';

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
