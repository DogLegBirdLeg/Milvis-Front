import React, { useState,useEffect} from 'react'
import "./Map.css";
import "./BusFindResult.css";
/*global kakao*/ 

const BusFindResult = () => {
  const [currIndex, setCurrIndex] = useState(1);

  const calStyle = (curr) => {
    const slideWidth = document.querySelector('.slide').clientWidth;
    const ul = document.querySelector('ul');
    switch(curr) {
      case 1:
        ul.setAttribute('style', `left: ${0}px`)
        break;
      case 2:
        ul.setAttribute('style', `left: ${0}px`)
        break;
      case 3:
        ul.setAttribute('style', `left: ${0}px`)
        break;
      default:
        ul.setAttribute('style', `left: ${0}px`)
        break;
    }
  }

  const clickPagination = (e) => {
    const {index} = e.target.dataset;
    setCurrIndex(index)
    console.log(currIndex)
  }

  const Pagination = () => {
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

  useEffect(()=>{
    const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
    const map = new kakao.maps.Map(mapContainer, mapOption); 

    
    const content = document.createElement('div');
    content.className = 'overlay';
    content.innerHTML = 
      '버스시간표<br/>'+
      '<div class="bus-time">oo 버스 정류장</div>' +
      '<div class="arrow">-></div>' +
      '<div class="bus-time2">xx 버스 정류장</div>' +
      '<div class="time"><br/>17</div><div class="time2">분</div>'

    const customoverlay = new kakao.maps.CustomOverlay({
        map: map,
        content: content,
        position: new kakao.maps.LatLng(33.450701, 126.570667),
    });


  },[]);   

  return (
    <div>
      <div className='map-explain'>길 그리기 테스트 <br />페이지 </div>
      <div id="map" style={{width:"350px", height:"700px"}}></div> 
      <div className='test'>test</div>
      <Pagination></Pagination>
    </div>
  )
}

export default BusFindResult

