import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'styles/road-find-page/road-find-page.css';
import Destination from 'components/roadFind/Destination';
import BusDateTime from 'components/roadFind/BusDateTime';
import Alert from 'components/roadFind/Alert';
import Button from 'components/common/Button';
import BUS_STATION_DATA from 'API/busInfo.json';
import { ALERT_MESSAGE } from 'utils/Constant';

const LAT_INIT_VALUE = 35.45373762287106;
const LNG_INIT_VALUE = 128.806692348998;

/*global kakao*/
const Map = () => {
  const navigate = useNavigate();
  const [distName, setDistName] = useState('부산대학교 밀양캠퍼스');
  const [lat, setLat] = useState(LAT_INIT_VALUE);
  const [lng, setLng] = useState(LNG_INIT_VALUE);
  const flag = 1;

  const [showCate, setShowCate] = useState(false);

  const today = new Date().toISOString().slice(0, 10);
  const currHour = new Date().getHours();
  const currMin = String(new Date().getMinutes()).padStart(2, '0');
  const currTime = `${currHour}:${currMin}`;

  const [date, setDate] = useState(today);
  const [time, setTime] = useState(currTime);

  const markers = [];

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3,
    };
    const map = new kakao.maps.Map(mapContainer, mapOption);

    const addMarker = (position) => {
      const marker = new kakao.maps.Marker({
        position: position,
      });

      marker.setMap(map);
      markers.push(marker);

      for (let i = 0; i < markers.length - 1; i++) {
        markers[i].setMap(null);
      }
    };

    const dragEnd = () => {
      const latlng = map.getCenter();
      const lat = latlng.getLat();
      const lng = latlng.getLng();

      addMarker(new kakao.maps.LatLng(lat, lng));
    };

    addMarker(new kakao.maps.LatLng(lat, lng));
    kakao.maps.event.addListener(map, 'dragend', dragEnd);
  }, []);

  const moveNextPage = async () => {
    try {
      console.log(BUS_STATION_DATA);
      navigate(`/map/${lat}/${lng}/${showCate}`, {
        state: {
          data: BUS_STATION_DATA,
        },
      });

    } catch (e) {
      alert('fetch Error');
      console.log(e);
    }
  };

  const NextButton = () => {
    return (
      <div className='button-container' onClick={moveNextPage}>
        <Button
          buttonsize={'short-button'}
          content={'검색'}
          type={'submit'}
        ></Button>
      </div>
    )
  }

  return (
    <main className='map-main'>
      <div id='map-container'>
        <div id='map' style={{ width: '600px', height: '' }}>
          <BusDateTime setDate={setDate} setTime={setTime} time={time} />
          <Alert flag={ALERT_MESSAGE.SELECT_DATE}></Alert>
          <span id='pointer'></span>
          <Destination 
            showCate={showCate}
            setShowCate={setShowCate}
            lng={lng}
            lat={lat}> 
          </Destination>
          <NextButton />
        </div>
      </div>
    </main>
  );
};

export default Map;
