import React, { useEffect } from 'react';

/*global kakao*/
function CenterPoint({
  map,
  eventType,
  handleRedrawEvent,
	center,
	radius = 50 ,
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

    eventType.forEach((event) => {
			kakao.maps.event.addListener(map, event, function(mouseEvent) {
				const position = mouseEvent ? mouseEvent.latLng : map.getCenter();

				handleRedrawEvent(circle, position);
			});
		})

    circle.setMap(map);
    return () => {
			kakao.maps.event.removeListener(circle, eventType, handleRedrawEvent);
			circle.setMap(null);
		};
  }, [map, eventType, handleRedrawEvent, center, radius, strokeWeight, strokeColor, strokeStyle, strokeOpacity, fillColor, fillOpacity])
	return null;
}

export default React.memo(CenterPoint);
