import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router';
import "./busFind/BusFindResult.css";
import "./busFind/Map.css";
const IMAGE_SRC = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

/*global kakao*/ 
const SearchingRoad = (props) => {
  const [currIndex, setCurrIndex] = useState(1);
  const { state } = useLocation();
  const { lat, lng } = useParams();
  let map = undefined;
  useEffect(() => {
    makeKaKaoMap();
    if (map) {
      initMap();
    }
  },[])

  function makeKaKaoMap() {
    const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
    map = new kakao.maps.Map(mapContainer, mapOption); 
    // 커스텀 오버레이 엘리먼트를 만들고, 컨텐츠를 추가합니다
    const content = document.createElement('div');
    content.className = 'overlay';
    content.innerHTML = 
      '버스시간표<br/>'+
      '<div class="bus-time">oo 버스 정류장</div>' +
      '<div class="arrow">-></div>' +
      '<div class="bus-time2">xx 버스 정류장</div>' +
      '<div class="time"><br/>17</div><div class="time2">분</div>'
    // 커스텀 오버레이를 생성합니다 
    const customoverlay = new kakao.maps.CustomOverlay({
        map: map,
        content: content,
        position: new kakao.maps.LatLng(map.getCenter().getLat(), map.getCenter().getLng()),
    });
    
  }

  function initMap() {
    const currBusInfo = state.data[currIndex];
    if (currBusInfo) {
      setMapElement(currBusInfo)
    }
  }

  function setMapElement(currBusInfo) {
    const { stations } = currBusInfo;
    const markers = [];
    const lines = [];
    stations.forEach((station) => {
      const value = new kakao.maps.LatLng(station.x, station.y);
      markers.push({title: station.name, latlng: value});
      lines.push(value);
    })

    setMarkers(markers);
    setLines(lines);
  }

  function setMarkers(markers) {
    const imageSize = new kakao.maps.Size(24, 35);    
    const markerImage = new kakao.maps.MarkerImage(IMAGE_SRC, imageSize); 
    
    for (let i = 0; i < markers.length; i ++) {
      const marker = new kakao.maps.Marker({
        map: map, 
        position: markers[i].latlng, 
        title : markers[i].title, 
        image : markerImage
      });
    }
  }

  function setLines(lines) {
    const polyline = new kakao.maps.Polyline({
      path: lines, 
      strokeWeight: 5, 
      strokeColor: '#FFAE00', 
      strokeOpacity: 0.7, 
      strokeStyle: 'solid' 
    });
    polyline.setMap(map);
  }  

  const Page = () => {
    return (
      <div id="pagination">
        <div
          data-index = "1"
          className={currIndex === 1 ? 'select' : ''}
          onClick={ () => { setCurrIndex(1) } }></div>
        <div 
          data-index = "2"
          className={currIndex === 2 ? 'select' : ''}
          onClick={ () => { setCurrIndex(2) } }></div>
        <div
          data-index = "3"
          className={currIndex === 3 ? 'select' : ''}
          onClick={ () => { setCurrIndex(3) } }></div>
      </div>
    )
  }

  const Card = () => {
      return(
        <div id = "gg">
        {console.log("ggg")}
        {state.data.forEach((data,index) => (
          console.log(data.bus)
        ))}  
        </div>
      )
    }

  return (
    <div>
      <div id="map" style={{width:"350px", height:"700px"}}></div> 
      <Page></Page>
      {
        state.data.forEach((data,index) => (
          console.log(data.line_id,currIndex),
          Number(data.line_id) === currIndex ? Card() : console.log("false")
        ))  
      }
    </div>
  )
}
export default SearchingRoad
//state.data.line_id가 currIndex랑 같으면 거기에 있는 객체의 bus 배열을 뺀면 된다.
// switch(curr) {
//   case 1:
//     ul.setAttribute('style', `left: ${0}px`)
//     break;
//   case 2:
//     ul.setAttribute('style', `left: ${-slideWidth}px`)
//     break;
//   case 3:
//     ul.setAttribute('style', `left: ${-slideWidth * 2}px`)
//     break;
//   default:
//     ul.setAttribute('style', `left: ${0}px`)
//     break;
// }