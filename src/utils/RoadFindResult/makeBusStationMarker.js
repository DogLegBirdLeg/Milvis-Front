/*global kakao*/
export const makeBusStationMarker = (
	map,
	stationData,
	handleSelectStation = null,
	addEvent = false
) => {
	const busStationPositions = stationData.map((element) => {
		const { latitude, longitude } = element;
		const { name } = element;

		return {
			title: name,
			latlng: new kakao.maps.LatLng(latitude, longitude),
		};
	});

	console.log(busStationPositions);

	const markers = busStationPositions.map((element, index) => {
		const marker = new kakao.maps.Marker({
			position: element.latlng,
		});

		addEvent &&
			kakao.maps.event.addListener(marker, 'click', () => {
				handleSelectStation(stationData[index]);
			});

		return marker;
	});

	markers.forEach((marker) => marker.setMap(map));

	console.log(map);
};
