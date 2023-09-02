import React, {useEffect, useState,useRef } from 'react'
import Marker from './Marker';

import 'styles/road-find-page/road-find-page.css';
import KakaoMapEvent from 'utils/kakaoMapEvent';
import BusInfo from './BusInfo';
import Alert from './Alert';
import { ALERT_MESSAGE } from 'utils/Constant';
import MapComponent from './MapComponent';


// const MARKER_CUSTOM_IMAGE = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
/*global kakao*/
function KakaoMap({lat, lng, data}) {
  const [infoView, setInfoView] = useState(false);
  const [page, setPage] = useState(0);
  const [stationData, setStationData] = useState(undefined);

  // TODO 날짜까지 보내려면 데이터 형식을 좀 다르게 해야하려나 일단 큰 문제는 해결..~
  return (
    <div id='map-container'>
        <MapComponent lat={lat} lng={lng}>
            <Alert flag={ALERT_MESSAGE.SELECT_STATION} />
            {data.stations.map((station, index) => (
                <Marker 
                    key={index} 
                    position={{ lat: station.lat, lng: station.lng }} 
                    onClick={() => {
                        setInfoView(true);
                        setPage(index);
                        setStationData(station);
                    }}
                />
            ))}
        </MapComponent>

        {infoView && <BusInfo page={page} setPage={setPage} data={stationData} />}
    </div>
);
}

export default KakaoMap;

