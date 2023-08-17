/*global kakao*/
class KakaoMapEvent {
  constructor(map) {
    this.map = map;
    this.markers = [];
    this.markerInfo = new Map();
  }

  /**
   * 도착지점 반경으로 원 생성
   */
  setArriveCircle(lat, lng) {
    const circle = new kakao.maps.Circle({
      center: new kakao.maps.LatLng(lat, lng), // 원의 중심좌표
      radius: 700, // m 기준 반경
      strokeWeight: 0,
      strokeColor: '#CFE7FF', // 선의 색깔
      strokeOpacity: 0, // 선의 불투명도
      strokeStyle: 'dashed', // 선의 스타일
      fillColor: '#CFE7FF', // 채우기 색깔
      fillOpacity: 0.6, // 채우기 불투명도
    });

    circle.setMap(this.map);
  }

  /**
   * 버스 정류장마다 마커 생성
   */
  setStationMarkers(stationData, setInfoView, setPage, setStationData) {
    for (let station of stationData) {
      this.makeStationMarkers(station, setInfoView, setPage, setStationData);
    }
  }

  makeStationMarkers(station, setInfoView, setPage, setStationData) {
    const markerPosition = new kakao.maps.LatLng(station.lat, station.lng);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      clickable: true,
    });

    if (!this.markerInfo.has(marker)) {
      this.markerInfo.set(marker, station.bus_info);
    } else {
      const currData = this.markerInfo.get(marker);
      this.markerInfo.set(marker, [...currData, station]);
    }

    this.addMarkerClickEvent(marker, setInfoView, setPage, setStationData);
    this.markers.push(marker);
    marker.setMap(this.map); 
  }

  addMarkerClickEvent(marker, setInfoView, setPage, setStationData) {
    kakao.maps.event.addListener(marker, 'click', () => {
      // 마커 위에 인포윈도우를 표시합니다
      setInfoView(true);
      setPage(0);
      setStationData(this.markerInfo.get(marker));
    });
  }

  /**
   * 지도에 선 그리기
   */
  drawLine() {

  }
}

export default KakaoMapEvent;
