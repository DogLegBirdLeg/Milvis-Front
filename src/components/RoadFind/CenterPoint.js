import { useEffect } from 'react';

/*global kakao*/
function CenterPoint({
  map,
  eventType,
  handleRedrawEvent,
	center,
	radius = 50,
	strokeWeight = 0,
	strokeColor = '#ffff',
	strokeOpacity = 0,
	strokeStyle = 'dashed',
	fillColor = '#606dff',
	fillOpacity = 0.2,
}) {
  useEffect(() => {
    if (!map) return;

    const circle = new kakao.maps.Circle({
      center: map.getCenter(),
      radius,
      strokeWeight,
      strokeColor,
      strokeOpacity,
      strokeStyle,
      fillColor,
      fillOpacity
    })

    kakao.maps.event.addListener(map, eventType, function() {
      handleRedrawEvent(circle);
    })

    circle.setMap(map);
  }, [map, eventType, handleRedrawEvent, center, radius, strokeWeight, strokeColor, strokeStyle, strokeOpacity, fillColor, fillOpacity])
	return null;
}

export default CenterPoint;
