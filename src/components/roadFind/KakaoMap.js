import React, {useEffect, useState} from 'react'

import 'pages/roadFind/Map.css';
import KakaoMapEvent from '../../pages/roadFind/utils/kakaoMapEvent';
import BusInfo from './BusInfo';

const MARKER_CUSTOM_IMAGE = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

/*global kakao*/ 
function KakaoMap({lat, lng, data}) {
  const [infoView, setInfoView] = useState(false);
  const [page, setPage] = useState(0);
  const [stationData, setStationData] = useState(undefined);
  let kakaoMapEvent = undefined;

  useEffect(() => {
    
  }, [page])

  useEffect(() => {
    const map = makeKaKaoMap();
    kakaoMapEvent = new KakaoMapEvent(map);
    linkMapEvent(kakaoMapEvent);
  }, []);

  function makeKaKaoMap() {
    const mapContainer = document.getElementById('map'), 
    mapOption = { 
        center: new kakao.maps.LatLng(lat, lng), 
        level: 5 
    };
    const map = new kakao.maps.Map(mapContainer, mapOption); 

    return map;
  }

  function linkMapEvent(kakaoMapEvent) {
    kakaoMapEvent.setArriveCircle(lat, lng);
    kakaoMapEvent.setStationMarkers(data.stations, setInfoView, setPage, setStationData);
  }

  // TODO 날짜까지 보내려면 데이터 형식을 좀 다르게 해야하려나 일단 큰 문제는 해결..~
  return (
    <div id='map-container'>
      <div id="map" style={{width:"600px", height:""}}>
        <div className='map-explain'>도착할 정류장을 선택해주세요.</div>  
        {infoView 
          ? <BusInfo page={page} setPage={setPage} data={stationData}/> 
          : ''}
      </div> 
    </div>
  )
}

export default KakaoMap