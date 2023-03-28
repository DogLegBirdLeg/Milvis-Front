import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { MAP_URL } from "../../API/API_URL";
import { sendData } from "../../API/useData";
import FooterMap from "../../components/FooterMap";
import BusDateTime from "../../components/busFind/BusDateTime";
import Button from "../../components/common/Button";
import Destination from 'components/busFind/Destination';
import "./style/Map.css";

const LAT_INIT_VALUE = 35.45373762287106;
const LNG_INIT_VALUE = 128.806692348998;

/*global kakao*/
const Map = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [distName, setDistName] = useState('부산대학교 밀양캠퍼스');
  const [direction, setDirection] = useState(false);
  const [lat, setLat] = useState(LAT_INIT_VALUE);
  const [lng, setLng] = useState(LNG_INIT_VALUE);

  const today = new Date().toISOString().slice(0, 10);
  const currHour = new Date().getHours();
  const currMin = String(new Date().getMinutes()).padStart(2, '0');
  const currTime = `${currHour}:${currMin}`;

  const [date, setDate] = useState(today);
  const [time, setTime] = useState(currTime);
  const geocoder = new kakao.maps.services.Geocoder(); // 좌표 - 주소 변환 객체

  const markers = [];


  useEffect(() => {
    const mapContainer = document.getElementById("map");
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
    }

    const dragEnd = () => {
      const latlng = map.getCenter();
      const lat = latlng.getLat();
      const lng = latlng.getLng();
      searchDetailAddrFromCoords(lat, lng, () => {
        setLat(lat);
        setLng(lng);
        setDistName()
      })
      addMarker(new kakao.maps.LatLng(lat, lng));
    }

    addMarker(new kakao.maps.LatLng(lat, lng));
    kakao.maps.event.addListener(map, "dragend", dragEnd);
  }, []);

  const onClick = async() => {
    const data = {};
    data.depart_time = `${date}T${time}:00`;
    data.station_x = lat;
    data.station_y = lng;
    data.is_depart_from_campus = location;

    const {results} = await sendData(MAP_URL, JSON.stringify(data));
    
    navigate(`/map/${lat}/${lng}/${location}`, {
      state: {
        data: results
      }
    })
  }

  const searchDetailAddrFromCoords = (lat, lng, callback) => {
    // 좌표로 법정동 상세 주소 정보를 요청합니다
    geocoder.coord2Address(lat, lng, callback);
  }


  return (
    <div>
      <div className="map-explain">
        출발 지점과 날짜를<br />
        설정해주세요.
      </div>
      <BusDateTime setDate={setDate} setTime={setTime} time={time}/> 
      {/* {console.log(date,"T",time,":00")} */}
      <div id="map-container">
        <BusDateTime setDate={setDate} setTime={setTime} time={time}/> 
        <div className="map-explain">원하시는 장소를 마커로 선택해주세요.</div> 
        <div id="map" style={{ width: "600px", height: ""}}></div>
        <span id="pointer"></span>
        <Destination 
        location={location} 
        setLocation={setLocation}
        direction={direction}
        setDirection={setDirection}
        ></Destination>
      </div>
      <FooterMap showCate={showCate} setShowCate={setShowCate}></FooterMap>
      <div className="button-container" onClick={onClick}>
        <Button
          buttonsize={"short-button"}
          content={"검색"}
          type={"submit"}
        ></Button>
      </div>
    </div>
  );
};

export default Map;