import React, {useEffect, useState} from 'react'

import 'styles/road-find-page/road-find-page.css';
import KakaoMapEvent from 'utils/kakaoMapEvent';
import BusInfo from './BusInfo';
import Alert from './Alert';
import { ALERT_MESSAGE } from 'utils/Constant';


// const MARKER_CUSTOM_IMAGE = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

/*global kakao*/ 
function KakaoMap({lat, lng, data}) {
  const [infoView, setInfoView] = useState(false);
  const [page, setPage] = useState(0);
  const [stationData, setStationData] = useState(undefined);
  let kakaoMapEvent = undefined;
  const flag = 2

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
        <Alert flag={ALERT_MESSAGE.SELECT_STATION}></Alert>
        {infoView 
          ? <BusInfo page={page} setPage={setPage} data={stationData}/> 
          : ''}
      </div> 
    </div>
  )
}

export default KakaoMap